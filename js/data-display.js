let allData = [];
let filteredData = [];
let currentPage = 1;
const itemsPerPage = 50;

// Load and process data in chunks
async function loadData() {
    try {
        const response = await fetch('../data/estimated-cumulative-excess-deaths-per-100000-people-during-covid-19.csv');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Process the CSV in chunks
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let headers = null;
        const data = [];
        let chunk = '';
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            chunk += decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');
            
            // Process all complete lines except the last one
            for (let i = 0; i < lines.length - 1; i++) {
                if (!headers) {
                    headers = lines[i].split(',').map(h => h.trim());
                } else {
                    const values = lines[i].split(',');
                    if (values.length === headers.length) {
                        const entry = {};
                        headers.forEach((header, index) => {
                            entry[header] = values[index].trim();
                        });
                        data.push(entry);
                    }
                }
            }
            
            // Keep the last incomplete line for the next chunk
            chunk = lines[lines.length - 1];
        }
        
        // Process the last line
        if (chunk && headers) {
            const values = chunk.split(',');
            if (values.length === headers.length) {
                const entry = {};
                headers.forEach((header, index) => {
                    entry[header] = values[index].trim();
                });
                data.push(entry);
            }
        }
        
        return data;
    } catch (error) {
        console.error('Error loading data:', error);
        return [];
    }
}

// Initialize the page with loading indicator
document.addEventListener('DOMContentLoaded', async () => {
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';
    document.body.appendChild(loadingIndicator);
    
    try {
        const data = await loadData();
        if (data.length > 0) {
            console.log('Data loaded successfully:', data.length, 'records');
            allData = data;
            filteredData = [...allData];
            displayData(filteredData);
            populateFilters(allData);
            setupEventListeners();
            setupPagination();
        } else {
            console.error('No data loaded');
            showError('No data could be loaded');
        }
    } catch (error) {
        console.error('Error:', error);
        showError('Error loading data');
    } finally {
        loadingIndicator.remove();
    }
});

function setupEventListeners() {
    document.getElementById('countryFilter').addEventListener('change', applyFilters);
    document.getElementById('dateFilter').addEventListener('change', applyFilters);
    document.getElementById('metricFilter').addEventListener('change', applyFilters);
    
    // Add search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        applyFilters();
    });
}

function applyFilters() {
    const countryFilter = document.getElementById('countryFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;
    const metricFilter = document.getElementById('metricFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    filteredData = allData.filter(row => {
        const countryMatch = !countryFilter || row.Country === countryFilter;
        const dateMatch = !dateFilter || row.Date === dateFilter;
        
        // Search in all columns if search term exists
        let searchMatch = true;
        if (searchTerm) {
            searchMatch = Object.values(row).some(value => 
                String(value).toLowerCase().includes(searchTerm)
            );
        }
        
        return countryMatch && dateMatch && searchMatch;
    });

    displayData(filteredData);
}

function populateFilters(data) {
    // Get unique values for filters
    const countries = [...new Set(data.map(row => row.Country))].sort();
    const dates = [...new Set(data.map(row => row.Date))].sort();
    const metrics = Object.keys(data[0]).filter(key => 
        key !== 'Country' && key !== 'Date' && key !== 'Region'
    );

    // Populate country filter
    const countryFilter = document.getElementById('countryFilter');
    countryFilter.innerHTML = '<option value="">All Countries</option>';
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });

    // Populate date filter
    const dateFilter = document.getElementById('dateFilter');
    dateFilter.innerHTML = '<option value="">All Dates</option>';
    dates.forEach(date => {
        const option = document.createElement('option');
        option.value = date;
        option.textContent = date;
        dateFilter.appendChild(option);
    });

    // Populate metric filter
    const metricFilter = document.getElementById('metricFilter');
    metricFilter.innerHTML = '<option value="">All Metrics</option>';
    metrics.forEach(metric => {
        const option = document.createElement('option');
        option.value = metric;
        option.textContent = metric;
        metricFilter.appendChild(option);
    });
}

function setupPagination() {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    pagination.innerHTML = `
        <button class="btn btn-primary" id="prevPage">Previous</button>
        <span id="pageInfo">Page 1</span>
        <button class="btn btn-primary" id="nextPage">Next</button>
    `;
    document.getElementById('data-container').appendChild(pagination);
    
    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayData(filteredData);
        }
    });
    
    document.getElementById('nextPage').addEventListener('click', () => {
        const maxPage = Math.ceil(filteredData.length / itemsPerPage);
        if (currentPage < maxPage) {
            currentPage++;
            displayData(filteredData);
        }
    });
}

function displayData(data) {
    const container = document.getElementById('data-container');
    if (!container) return;
    
    // Clear existing content except pagination
    const pagination = container.querySelector('.pagination');
    container.innerHTML = '';
    if (pagination) container.appendChild(pagination);
    
    if (data.length === 0) {
        container.innerHTML = '<div class="alert alert-warning">No data found matching the selected filters.</div>';
        return;
    }
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);
    
    // Update page info
    const pageInfo = document.getElementById('pageInfo');
    if (pageInfo) {
        pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(data.length / itemsPerPage)}`;
    }
    
    // Create table
    const table = document.createElement('table');
    table.className = 'table table-striped table-bordered table-hover';
    
    // Create header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    Object.keys(paginatedData[0]).forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create body
    const tbody = document.createElement('tbody');
    paginatedData.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    
    container.insertBefore(table, pagination);
}

function showError(message) {
    const container = document.getElementById('data-container');
    if (container) {
        container.innerHTML = `<div class="alert alert-danger">${message}</div>`;
    }
}

function updateCharts(data) {
    // This function will be implemented to update charts with the parsed data
    console.log('Data ready for chart updates:', data);
} 