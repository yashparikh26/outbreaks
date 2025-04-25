// Initialize ECharts instances
const casesChart = echarts.init(document.getElementById('casesChart'));
const deathsChart = echarts.init(document.getElementById('deathsChart'));
const worldMap = echarts.init(document.getElementById('worldMap'));
const comparisonChart = echarts.init(document.getElementById('comparisonChart'));

// Global data store
let diseaseData = [];
let filteredData = [];

// Fetch and process data
async function loadData() {
    try {
        const response = await fetch('/data');
        const csvText = await response.text();
        diseaseData = parseCSV(csvText);
        filteredData = [...diseaseData];
        
        updateCharts();
        updateDataTable();
        populateFilters();
    } catch (error) {
        showAlert('Error loading data: ' + error.message, 'danger');
    }
}

// Parse CSV data
function parseCSV(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1).map(line => {
        const values = line.split(',');
        const row = {};
        headers.forEach((header, index) => {
            let value = values[index]?.trim();
            // Convert numeric values
            if (header.includes('deaths') || header.includes('cases')) {
                value = parseFloat(value) || 0;
            }
            row[header] = value;
        });
        return row;
    });
}

// Update all charts
function updateCharts() {
    updateCasesChart();
    updateDeathsChart();
    updateWorldMap();
    updateComparisonChart();
}

// Cases chart configuration
function updateCasesChart() {
    const option = {
        title: {
            text: 'Cases Over Time'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                const data = params[0].data;
                return `Date: ${data[0]}<br/>Cases: ${data[1]}`;
            }
        },
        legend: {
            data: ['Cases']
        },
        xAxis: {
            type: 'category',
            data: filteredData.map(d => d.Day)
        },
        yAxis: {
            type: 'value',
            name: 'Cases per 100,000'
        },
        series: [{
            name: 'Cases',
            type: 'line',
            data: filteredData.map(d => [d.Day, d['Cumulative excess deaths per 100,000 people (central estimate)']]),
            smooth: true,
            areaStyle: {}
        }]
    };
    casesChart.setOption(option);
}

// Deaths chart configuration
function updateDeathsChart() {
    const option = {
        title: {
            text: 'Deaths Over Time'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                const data = params[0].data;
                return `Date: ${data[0]}<br/>Deaths: ${data[1]}`;
            }
        },
        legend: {
            data: ['Deaths']
        },
        xAxis: {
            type: 'category',
            data: filteredData.map(d => d.Day)
        },
        yAxis: {
            type: 'value',
            name: 'Deaths per 100,000'
        },
        series: [{
            name: 'Deaths',
            type: 'line',
            data: filteredData.map(d => [d.Day, d['Total confirmed deaths due to COVID-19 per 100,000 people']]),
            smooth: true,
            areaStyle: {}
        }]
    };
    deathsChart.setOption(option);
}

// World map configuration
function updateWorldMap() {
    const option = {
        title: {
            text: 'Global Disease Map'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return `${params.name}<br/>Excess Deaths: ${params.value}`;
            }
        },
        visualMap: {
            min: 0,
            max: Math.max(...filteredData.map(d => parseFloat(d['Cumulative excess deaths per 100,000 people (central estimate)']) || 0)),
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695']
            }
        },
        series: [{
            name: 'Excess Deaths',
            type: 'map',
            map: 'world',
            emphasis: {
                label: {
                    show: true
                }
            },
            data: filteredData.map(d => ({
                name: d.Entity,
                value: parseFloat(d['Cumulative excess deaths per 100,000 people (central estimate)']) || 0
            }))
        }]
    };
    worldMap.setOption(option);
}

// Comparison chart configuration
function updateComparisonChart() {
    const option = {
        title: {
            text: 'Disease Comparison'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Excess Deaths', 'Confirmed Deaths']
        },
        xAxis: {
            type: 'category',
            data: filteredData.map(d => d.Day)
        },
        yAxis: [
            {
                type: 'value',
                name: 'Excess Deaths per 100,000'
            },
            {
                type: 'value',
                name: 'Confirmed Deaths per 100,000'
            }
        ],
        series: [
            {
                name: 'Excess Deaths',
                type: 'bar',
                data: filteredData.map(d => parseFloat(d['Cumulative excess deaths per 100,000 people (central estimate)']) || 0)
            },
            {
                name: 'Confirmed Deaths',
                type: 'line',
                yAxisIndex: 1,
                data: filteredData.map(d => parseFloat(d['Total confirmed deaths due to COVID-19 per 100,000 people']) || 0)
            }
        ]
    };
    comparisonChart.setOption(option);
}

// Update data table
function updateDataTable() {
    const tbody = document.getElementById('dataTable');
    tbody.innerHTML = '';
    
    filteredData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.Day}</td>
            <td>${row.Entity}</td>
            <td>${row['Cumulative excess deaths per 100,000 people (central estimate)']}</td>
            <td>${row['Total confirmed deaths due to COVID-19 per 100,000 people']}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Populate filter dropdowns
function populateFilters() {
    const diseaseFilter = document.getElementById('diseaseFilter');
    const countryFilter = document.getElementById('countryFilter');
    
    const countries = [...new Set(diseaseData.map(d => d.Entity))];
    
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });
}

// Filter data based on search and filters
function filterData() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const countryFilter = document.getElementById('countryFilter').value;
    
    filteredData = diseaseData.filter(row => {
        const matchesSearch = Object.values(row).some(value => 
            value?.toString().toLowerCase().includes(searchTerm)
        );
        const matchesCountry = !countryFilter || row.Entity === countryFilter;
        
        return matchesSearch && matchesCountry;
    });
    
    updateCharts();
    updateDataTable();
}

// Show alert message
function showAlert(message, type = 'info') {
    const alertsDiv = document.getElementById('alerts');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    alertsDiv.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterData);
document.getElementById('countryFilter').addEventListener('change', filterData);

// Handle window resize
window.addEventListener('resize', () => {
    casesChart.resize();
    deathsChart.resize();
    worldMap.resize();
    comparisonChart.resize();
});

// Initialize the application
loadData(); 