let allData = [];
let filteredData = [];
let currentPage = 1;
const itemsPerPage = 100;

// Load and process data
async function loadData() {
    try {
        const response = await fetch('../data/estimated-cumulative-excess-deaths-per-100000-people-during-covid-19.csv');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const csvText = await response.text();
        const lines = csvText.split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        const data = [];
        
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
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

function setupPagination() {
    const container = document.getElementById('data-container');
    if (!container) return;

    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    pagination.innerHTML = `
        <button class="btn btn-primary" id="prevPage">Previous</button>
        <span id="pageInfo">Page 1</span>
        <button class="btn btn-primary" id="nextPage">Next</button>
    `;
    container.appendChild(pagination);
    
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
        container.innerHTML = '<div class="alert alert-warning">No data found.</div>';
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
    
    // Add table to container
    container.insertBefore(table, pagination);
    
    // Add data summary
    const summary = document.createElement('div');
    summary.className = 'alert alert-info mt-3';
    summary.innerHTML = `