// Remove the import statement since we're not using data.js
// import { hivData, smallpoxData } from './data.js';

// Function to parse CSV data
function parseCSV(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
        const values = line.split(',');
        const row = {};
        headers.forEach((header, index) => {
            row[header.trim()] = values[index] ? values[index].trim() : '';
        });
        return row;
    }).filter(row => Object.values(row).some(value => value !== ''));
}

// Sample data for HIV
const hivData = {
    title: 'HIV Prevalence',
    description: 'Percentage of population aged 15-49',
    unit: 'Prevalence (%)',
    data: [
        { country: 'South Africa', year: 1990, value: 0.5 },
        { country: 'South Africa', year: 1995, value: 1.2 },
        { country: 'South Africa', year: 2000, value: 2.8 },
        { country: 'South Africa', year: 2005, value: 4.5 },
        { country: 'South Africa', year: 2010, value: 3.8 },
        { country: 'South Africa', year: 2015, value: 3.2 },
        { country: 'Eswatini', year: 1990, value: 0.3 },
        { country: 'Eswatini', year: 1995, value: 0.8 },
        { country: 'Eswatini', year: 2000, value: 2.1 },
        { country: 'Eswatini', year: 2005, value: 3.9 },
        { country: 'Eswatini', year: 2010, value: 3.5 },
        { country: 'Eswatini', year: 2015, value: 2.9 },
        { country: 'Lesotho', year: 1990, value: 0.4 },
        { country: 'Lesotho', year: 1995, value: 1.0 },
        { country: 'Lesotho', year: 2000, value: 2.5 },
        { country: 'Lesotho', year: 2005, value: 4.2 },
        { country: 'Lesotho', year: 2010, value: 3.7 },
        { country: 'Lesotho', year: 2015, value: 3.1 },
        { country: 'Botswana', year: 1990, value: 0.2 },
        { country: 'Botswana', year: 1995, value: 0.6 },
        { country: 'Botswana', year: 2000, value: 1.8 },
        { country: 'Botswana', year: 2005, value: 3.2 },
        { country: 'Botswana', year: 2010, value: 2.9 },
        { country: 'Botswana', year: 2015, value: 2.5 },
        { country: 'Zimbabwe', year: 1990, value: 0.1 },
        { country: 'Zimbabwe', year: 1995, value: 0.4 },
        { country: 'Zimbabwe', year: 2000, value: 1.5 },
        { country: 'Zimbabwe', year: 2005, value: 2.8 },
        { country: 'Zimbabwe', year: 2010, value: 2.4 },
        { country: 'Zimbabwe', year: 2015, value: 2.1 }
    ]
};

// Sample data for Smallpox
const smallpoxData = {
    title: 'Smallpox Deaths',
    description: 'Deaths per 1,000 population',
    unit: 'Deaths per 1,000',
    data: [
        { country: 'Austria', year: 1847, value: 0.16 },
        { country: 'Austria', year: 1848, value: 0.215 },
        { country: 'Austria', year: 1849, value: 0.293 },
        { country: 'Austria', year: 1850, value: 0.161 },
        { country: 'Austria', year: 1851, value: 0.111 },
        { country: 'Belgium', year: 1851, value: 0.156 },
        { country: 'Belgium', year: 1852, value: 0.114 },
        { country: 'Belgium', year: 1853, value: 0.114 },
        { country: 'Belgium', year: 1854, value: 0.114 },
        { country: 'Belgium', year: 1855, value: 0.097 },
        { country: 'England', year: 1838, value: 1.064 },
        { country: 'England', year: 1839, value: 0.589 },
        { country: 'England', year: 1840, value: 0.661 },
        { country: 'England', year: 1841, value: 0.4 },
        { country: 'England', year: 1842, value: 0.168 },
        { country: 'Netherlands', year: 1866, value: 0.404 },
        { country: 'Netherlands', year: 1867, value: 0.154 },
        { country: 'Netherlands', year: 1868, value: 0.04 },
        { country: 'Netherlands', year: 1869, value: 0.014 },
        { country: 'Netherlands', year: 1870, value: 0.196 },
        { country: 'Prussia', year: 1847, value: 0.095 },
        { country: 'Prussia', year: 1848, value: 0.137 },
        { country: 'Prussia', year: 1849, value: 0.108 },
        { country: 'Prussia', year: 1850, value: 0.157 },
        { country: 'Prussia', year: 1851, value: 0.129 },
        { country: 'Scotland', year: 1855, value: 0.44 },
        { country: 'Scotland', year: 1856, value: 0.436 },
        { country: 'Scotland', year: 1857, value: 0.281 },
        { country: 'Scotland', year: 1858, value: 0.11 },
        { country: 'Scotland', year: 1859, value: 0.224 },
        { country: 'Sweden', year: 1774, value: 1.032 },
        { country: 'Sweden', year: 1775, value: 0.631 },
        { country: 'Sweden', year: 1776, value: 0.737 },
        { country: 'Sweden', year: 1777, value: 0.943 },
        { country: 'Sweden', year: 1778, value: 3.177 }
    ]
};

// Sample data for COVID-19
const covidData = {
    title: 'COVID-19 Deaths',
    description: 'Deaths per 100,000 population',
    unit: 'Deaths per 100,000',
    data: [
        { country: 'United States', date: '2020-12-31', value: 81.40388, lowerCI: 75.40388, upperCI: 87.40388 },
        { country: 'United States', date: '2021-12-31', value: 184.19847, lowerCI: 178.19847, upperCI: 190.19847 },
        { country: 'United States', date: '2022-12-31', value: 238.66261, lowerCI: 232.66261, upperCI: 244.66261 },
        { country: 'United States', date: '2023-12-31', value: 248.59126, lowerCI: 242.59126, upperCI: 254.59126 },
        { country: 'United Kingdom', date: '2020-12-31', value: 168.68507, lowerCI: 162.68507, upperCI: 174.68507 },
        { country: 'United Kingdom', date: '2021-12-31', value: 243.2353, lowerCI: 237.2353, upperCI: 249.2353 },
        { country: 'United Kingdom', date: '2022-12-31', value: 286.20114, lowerCI: 280.20114, upperCI: 292.20114 },
        { country: 'United Kingdom', date: '2023-12-31', value: 294.96265, lowerCI: 288.96265, upperCI: 300.96265 },
        { country: 'India', date: '2020-12-31', value: 4.462618, lowerCI: 3.462618, upperCI: 5.462618 },
        { country: 'India', date: '2021-12-31', value: 16.572906, lowerCI: 15.572906, upperCI: 17.572906 },
        { country: 'India', date: '2022-12-31', value: 17.380535, lowerCI: 16.380535, upperCI: 18.380535 },
        { country: 'India', date: '2023-12-31', value: 17.402378, lowerCI: 16.402378, upperCI: 18.402378 },
        { country: 'Brazil', date: '2020-12-31', value: 91.61918, lowerCI: 85.61918, upperCI: 97.61918 },
        { country: 'Brazil', date: '2021-12-31', value: 294.24542, lowerCI: 288.24542, upperCI: 300.24542 },
        { country: 'Brazil', date: '2022-12-31', value: 329.86823, lowerCI: 323.86823, upperCI: 335.86823 },
        { country: 'Brazil', date: '2023-12-31', value: 333.85382, lowerCI: 327.85382, upperCI: 339.85382 },
        { country: 'Russia', date: '2020-12-31', value: 15.414399, lowerCI: 14.414399, upperCI: 16.414399 },
        { country: 'Russia', date: '2021-12-31', value: 60.621975, lowerCI: 59.621975, upperCI: 61.621975 },
        { country: 'Russia', date: '2022-12-31', value: 77.59526, lowerCI: 76.59526, upperCI: 78.59526 },
        { country: 'Russia', date: '2023-12-31', value: 77.59526, lowerCI: 76.59526, upperCI: 78.59526 },
        { country: 'Italy', date: '2020-12-31', value: 98.84343, lowerCI: 92.84343, upperCI: 104.84343 },
        { country: 'Italy', date: '2021-12-31', value: 193.1705, lowerCI: 187.1705, upperCI: 199.1705 },
        { country: 'Italy', date: '2022-12-31', value: 251.51448, lowerCI: 245.51448, upperCI: 257.51448 },
        { country: 'Italy', date: '2023-12-31', value: 261.44022, lowerCI: 255.44022, upperCI: 267.44022 }
    ]
};

// Function to populate HIV table
function populateHIVTable() {
    const tableBody = document.getElementById('hivTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    // Sort data by country and year
    const sortedData = [...hivData.data].sort((a, b) => {
        if (a.country === b.country) {
            return a.year - b.year;
        }
        return a.country.localeCompare(b.country);
    });

    sortedData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.country}</td>
            <td>${item.year}</td>
            <td>${(item.value * 100).toFixed(2)}%</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to populate Smallpox table
function populateSmallpoxTable() {
    const tableBody = document.getElementById('smallpoxTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    // Sort data by country and year
    const sortedData = [...smallpoxData.data].sort((a, b) => {
        if (a.country === b.country) {
            return a.year - b.year;
        }
        return a.country.localeCompare(b.country);
    });

    sortedData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.country}</td>
            <td>${item.year}</td>
            <td>${(item.value * 1000).toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to create HIV visualization
function createHIVChart() {
    const ctx = document.getElementById('hivChart').getContext('2d');
    
    // Get unique years and sort them
    const years = [...new Set(hivData.data.map(item => item.year))].sort((a, b) => a - b);
    
    // Group data by country
    const countryGroups = {};
    hivData.data.forEach(item => {
        if (!countryGroups[item.country]) {
            countryGroups[item.country] = [];
        }
        countryGroups[item.country].push(item);
    });
    
    // Create datasets for each country
    const datasets = Object.entries(countryGroups).map(([country, data]) => {
        const values = years.map(year => {
            const dataPoint = data.find(d => d.year === year);
            return dataPoint ? dataPoint.value : null;
        });
        
        return {
            label: country,
            data: values,
            borderColor: getHIVColor(country),
            backgroundColor: getHIVColor(country, 0.2),
            borderWidth: 2,
            fill: true,
            tension: 0.3,
            pointRadius: 3,
            pointHoverRadius: 5
        };
    });

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'HIV Prevalence',
                    font: {
                        size: 20,
                        weight: 'bold',
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                    },
                    color: '#2c3e50',
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Percentage of population aged 15-49',
                    font: {
                        size: 16,
                        weight: '500',
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                    },
                    color: '#34495e',
                    padding: {
                        bottom: 30
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 12,
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Prevalence (%)',
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    },
                    grid: {
                        color: 'rgba(44, 62, 80, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year',
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    },
                    grid: {
                        color: 'rgba(44, 62, 80, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    }
                }
            }
        }
    });
}

// Function to create Smallpox visualization
function createSmallpoxChart() {
    const ctx = document.getElementById('smallpoxChart').getContext('2d');
    
    // Get unique years and sort them
    const years = [...new Set(smallpoxData.data.map(item => item.year))].sort((a, b) => a - b);
    
    // Group data by country
    const countryGroups = {};
    smallpoxData.data.forEach(item => {
        if (!countryGroups[item.country]) {
            countryGroups[item.country] = [];
        }
        countryGroups[item.country].push(item);
    });
    
    // Create datasets for each country
    const datasets = Object.entries(countryGroups).map(([country, data]) => {
        const values = years.map(year => {
            const dataPoint = data.find(d => d.year === year);
            return dataPoint ? dataPoint.value : null;
        });
        
        return {
            label: country,
            data: values,
            borderColor: getSmallpoxColor(country),
            backgroundColor: getSmallpoxColor(country, 0.2),
            borderWidth: 2,
            fill: true,
            tension: 0.3,
            pointRadius: 3,
            pointHoverRadius: 5
        };
    });

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Smallpox Deaths',
                    font: {
                        size: 20,
                        weight: 'bold',
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                    },
                    color: '#2c3e50',
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Deaths per 1,000 population',
                    font: {
                        size: 16,
                        weight: '500',
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                    },
                    color: '#34495e',
                    padding: {
                        bottom: 30
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 12,
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Deaths per 1,000',
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    },
                    grid: {
                        color: 'rgba(44, 62, 80, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year',
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    },
                    grid: {
                        color: 'rgba(44, 62, 80, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    }
                }
            }
        }
    });
}

// Color schemes for HIV chart
function getHIVColor(country, opacity = 1) {
    const colors = {
        'South Africa': `rgba(46, 204, 113, ${opacity})`, // Green
        'Eswatini': `rgba(52, 152, 219, ${opacity})`,    // Blue
        'Lesotho': `rgba(155, 89, 182, ${opacity})`      // Purple
    };
    return colors[country] || `rgba(149, 165, 166, ${opacity})`; // Gray for other countries
}

// Color schemes for Smallpox chart
function getSmallpoxColor(country, opacity = 1) {
    const colors = {
        'Austria': `rgba(231, 76, 60, ${opacity})`,      // Red
        'Belgium': `rgba(241, 196, 15, ${opacity})`,     // Yellow
        'England': `rgba(52, 73, 94, ${opacity})`,       // Dark Blue
        'Netherlands': `rgba(230, 126, 34, ${opacity})`, // Orange
        'Prussia': `rgba(149, 165, 166, ${opacity})`,    // Gray
        'Scotland': `rgba(26, 188, 156, ${opacity})`,    // Turquoise
        'Sweden': `rgba(142, 68, 173, ${opacity})`       // Purple
    };
    return colors[country] || `rgba(149, 165, 166, ${opacity})`; // Gray for other countries
}

// Function to populate COVID-19 table
function populateCOVIDTable() {
    const tableBody = document.getElementById('covidTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    // Sort data by country and date
    const sortedData = [...covidData.data].sort((a, b) => {
        if (a.country === b.country) {
            return new Date(a.date) - new Date(b.date);
        }
        return a.country.localeCompare(b.country);
    });

    sortedData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.country}</td>
            <td>${item.date}</td>
            <td>${item.value.toFixed(2)}</td>
            <td>${item.lowerCI ? item.lowerCI.toFixed(2) : 'N/A'}</td>
            <td>${item.upperCI ? item.upperCI.toFixed(2) : 'N/A'}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to create COVID-19 visualization
function createCOVIDChart() {
    const ctx = document.getElementById('covidChart').getContext('2d');
    
    // Get unique dates and sort them
    const dates = [...new Set(covidData.data.map(item => item.date))].sort((a, b) => new Date(a) - new Date(b));
    
    // Group data by country
    const countryGroups = {};
    covidData.data.forEach(item => {
        if (!countryGroups[item.country]) {
            countryGroups[item.country] = [];
        }
        countryGroups[item.country].push(item);
    });
    
    // Create datasets for each country
    const datasets = Object.entries(countryGroups).map(([country, data]) => {
        const values = dates.map(date => {
            const dataPoint = data.find(d => d.date === date);
            return dataPoint ? dataPoint.value : null;
        });
        
        return {
            label: country,
            data: values,
            borderColor: getCOVIDColor(country),
            backgroundColor: getCOVIDColor(country, 0.2),
            borderWidth: 2,
            fill: true,
            tension: 0.3,
            pointRadius: 3,
            pointHoverRadius: 5
        };
    });

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'COVID-19 Deaths',
                    font: {
                        size: 20,
                        weight: 'bold',
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                    },
                    color: '#2c3e50',
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Deaths per 100,000 population',
                    font: {
                        size: 16,
                        weight: '500',
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                    },
                    color: '#34495e',
                    padding: {
                        bottom: 30
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 12,
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Deaths per 100,000',
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    },
                    grid: {
                        color: 'rgba(44, 62, 80, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Date',
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    },
                    grid: {
                        color: 'rgba(44, 62, 80, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                        },
                        color: '#2c3e50'
                    }
                }
            }
        }
    });
}

// Color scheme for COVID-19 chart
function getCOVIDColor(country, opacity = 1) {
    const colors = {
        'United States': `rgba(231, 76, 60, ${opacity})`,    // Red
        'India': `rgba(52, 152, 219, ${opacity})`,          // Blue
        'Brazil': `rgba(46, 204, 113, ${opacity})`,         // Green
        'United Kingdom': `rgba(155, 89, 182, ${opacity})`, // Purple
        'Russia': `rgba(241, 196, 15, ${opacity})`,         // Yellow
        'France': `rgba(230, 126, 34, ${opacity})`,         // Orange
        'Germany': `rgba(52, 73, 94, ${opacity})`           // Dark Blue
    };
    return colors[country] || `rgba(149, 165, 166, ${opacity})`; // Gray for other countries
}

// Function to insert HIV data
function insertHIVData(country, year, value) {
    const newData = {
        country: country,
        year: parseInt(year),
        value: parseFloat(value)
    };
    
    // Check if data point already exists
    const exists = hivData.data.some(item => 
        item.country === country && item.year === parseInt(year)
    );
    
    if (exists) {
        alert('Data point already exists. Use update instead.');
        return false;
    }
    
    hivData.data.push(newData);
    populateHIVTable();
    createHIVChart();
    return true;
}

// Function to update HIV data
function updateHIVData(country, year, value) {
    const index = hivData.data.findIndex(item => 
        item.country === country && item.year === parseInt(year)
    );
    
    if (index === -1) {
        alert('Data point not found. Use insert instead.');
        return false;
    }
    
    hivData.data[index].value = parseFloat(value);
    populateHIVTable();
    createHIVChart();
    return true;
}

// Function to delete HIV data
function deleteHIVData(country, year) {
    const index = hivData.data.findIndex(item => 
        item.country === country && item.year === parseInt(year)
    );
    
    if (index === -1) {
        alert('Data point not found.');
        return false;
    }
    
    hivData.data.splice(index, 1);
    populateHIVTable();
    createHIVChart();
    return true;
}

// Function to insert Smallpox data
function insertSmallpoxData(country, year, value) {
    const newData = {
        country: country,
        year: parseInt(year),
        value: parseFloat(value)
    };
    
    const exists = smallpoxData.data.some(item => 
        item.country === country && item.year === parseInt(year)
    );
    
    if (exists) {
        alert('Data point already exists. Use update instead.');
        return false;
    }
    
    smallpoxData.data.push(newData);
    populateSmallpoxTable();
    createSmallpoxChart();
    return true;
}

// Function to update Smallpox data
function updateSmallpoxData(country, year, value) {
    const index = smallpoxData.data.findIndex(item => 
        item.country === country && item.year === parseInt(year)
    );
    
    if (index === -1) {
        alert('Data point not found. Use insert instead.');
        return false;
    }
    
    smallpoxData.data[index].value = parseFloat(value);
    populateSmallpoxTable();
    createSmallpoxChart();
    return true;
}

// Function to delete Smallpox data
function deleteSmallpoxData(country, year) {
    const index = smallpoxData.data.findIndex(item => 
        item.country === country && item.year === parseInt(year)
    );
    
    if (index === -1) {
        alert('Data point not found.');
        return false;
    }
    
    smallpoxData.data.splice(index, 1);
    populateSmallpoxTable();
    createSmallpoxChart();
    return true;
}

// Function to insert COVID-19 data
function insertCOVIDData(country, date, value, lowerCI, upperCI) {
    const newData = {
        country: country,
        date: date,
        value: parseFloat(value),
        lowerCI: parseFloat(lowerCI),
        upperCI: parseFloat(upperCI)
    };
    
    const exists = covidData.data.some(item => 
        item.country === country && item.date === date
    );
    
    if (exists) {
        alert('Data point already exists. Use update instead.');
        return false;
    }
    
    covidData.data.push(newData);
    populateCOVIDTable();
    createCOVIDChart();
    return true;
}

// Function to update COVID-19 data
function updateCOVIDData(country, date, value, lowerCI, upperCI) {
    const index = covidData.data.findIndex(item => 
        item.country === country && item.date === date
    );
    
    if (index === -1) {
        alert('Data point not found. Use insert instead.');
        return false;
    }
    
    covidData.data[index].value = parseFloat(value);
    covidData.data[index].lowerCI = parseFloat(lowerCI);
    covidData.data[index].upperCI = parseFloat(upperCI);
    populateCOVIDTable();
    createCOVIDChart();
    return true;
}

// Function to delete COVID-19 data
function deleteCOVIDData(country, date) {
    const index = covidData.data.findIndex(item => 
        item.country === country && item.date === date
    );
    
    if (index === -1) {
        alert('Data point not found.');
        return false;
    }
    
    covidData.data.splice(index, 1);
    populateCOVIDTable();
    createCOVIDChart();
    return true;
}

// Search functions for HIV data
function searchHIVData(country, year) {
    return hivData.data.filter(item => {
        const countryMatch = !country || item.country.toLowerCase().includes(country.toLowerCase());
        const yearMatch = !year || item.year === parseInt(year);
        return countryMatch && yearMatch;
    });
}

// Search functions for Smallpox data
function searchSmallpoxData(country, year) {
    return smallpoxData.data.filter(item => {
        const countryMatch = !country || item.country.toLowerCase().includes(country.toLowerCase());
        const yearMatch = !year || item.year === parseInt(year);
        return countryMatch && yearMatch;
    });
}

// Search functions for COVID-19 data
function searchCOVIDData(country, date) {
    return covidData.data.filter(item => {
        const countryMatch = !country || item.country.toLowerCase().includes(country.toLowerCase());
        const dateMatch = !date || item.date === date;
        return countryMatch && dateMatch;
    });
}

// Initialize charts and event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize HIV chart and event listeners
    const hivCtx = document.getElementById('hivChart');
    if (hivCtx) {
        window.hivChart = new Chart(hivCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'HIV Prevalence (%)',
                    data: [],
                    borderColor: '#28a745',
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Prevalence (%)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                }
            }
        });
        updateHIVDisplay(hivData.data);

        // Add HIV event listeners
        document.getElementById('hivSearchBtn').addEventListener('click', function() {
            const country = document.getElementById('hivSearchCountry').value;
            const year = document.getElementById('hivSearchYear').value;
            const results = searchHIVData(country, year);
            updateHIVDisplay(results);
        });

        document.getElementById('hivResetBtn').addEventListener('click', function() {
            document.getElementById('hivSearchCountry').value = '';
            document.getElementById('hivSearchYear').value = '';
            updateHIVDisplay(hivData.data);
        });

        document.getElementById('insertHIVBtn').addEventListener('click', function() {
            const country = document.getElementById('hivCountry').value;
            const year = document.getElementById('hivYear').value;
            const value = document.getElementById('hivValue').value;
            
            if (!country || !year || !value) {
                alert('Please fill in all fields');
                return;
            }
            
            if (insertHIVData(country, year, value)) {
                document.getElementById('hivCountry').value = '';
                document.getElementById('hivYear').value = '';
                document.getElementById('hivValue').value = '';
            }
        });

        document.getElementById('updateHIVBtn').addEventListener('click', function() {
            const country = document.getElementById('hivCountry').value;
            const year = document.getElementById('hivYear').value;
            const value = document.getElementById('hivValue').value;
            
            if (!country || !year || !value) {
                alert('Please fill in all fields');
                return;
            }
            
            if (updateHIVData(country, year, value)) {
                document.getElementById('hivCountry').value = '';
                document.getElementById('hivYear').value = '';
                document.getElementById('hivValue').value = '';
            }
        });

        document.getElementById('deleteHIVBtn').addEventListener('click', function() {
            const country = document.getElementById('hivCountry').value;
            const year = document.getElementById('hivYear').value;
            
            if (!country || !year) {
                alert('Please fill in country and year');
                return;
            }
            
            if (deleteHIVData(country, year)) {
                document.getElementById('hivCountry').value = '';
                document.getElementById('hivYear').value = '';
                document.getElementById('hivValue').value = '';
            }
        });
    }

    // Initialize Smallpox chart and event listeners
    const smallpoxCtx = document.getElementById('smallpoxChart');
    if (smallpoxCtx) {
        window.smallpoxChart = new Chart(smallpoxCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Smallpox Deaths (per 1,000)',
                    data: [],
                    borderColor: '#dc3545',
                    backgroundColor: 'rgba(220, 53, 69, 0.1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Deaths (per 1,000)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                }
            }
        });
        updateSmallpoxDisplay(smallpoxData.data);

        // Add Smallpox event listeners
        document.getElementById('smallpoxSearchBtn').addEventListener('click', function() {
            const country = document.getElementById('smallpoxSearchCountry').value;
            const year = document.getElementById('smallpoxSearchYear').value;
            const results = searchSmallpoxData(country, year);
            updateSmallpoxDisplay(results);
        });

        document.getElementById('smallpoxResetBtn').addEventListener('click', function() {
            document.getElementById('smallpoxSearchCountry').value = '';
            document.getElementById('smallpoxSearchYear').value = '';
            updateSmallpoxDisplay(smallpoxData.data);
        });

        document.getElementById('insertSmallpoxBtn').addEventListener('click', function() {
            const country = document.getElementById('smallpoxCountry').value;
            const year = document.getElementById('smallpoxYear').value;
            const value = document.getElementById('smallpoxValue').value;
            
            if (!country || !year || !value) {
                alert('Please fill in all fields');
                return;
            }
            
            if (insertSmallpoxData(country, year, value)) {
                document.getElementById('smallpoxCountry').value = '';
                document.getElementById('smallpoxYear').value = '';
                document.getElementById('smallpoxValue').value = '';
            }
        });

        document.getElementById('updateSmallpoxBtn').addEventListener('click', function() {
            const country = document.getElementById('smallpoxCountry').value;
            const year = document.getElementById('smallpoxYear').value;
            const value = document.getElementById('smallpoxValue').value;
            
            if (!country || !year || !value) {
                alert('Please fill in all fields');
                return;
            }
            
            if (updateSmallpoxData(country, year, value)) {
                document.getElementById('smallpoxCountry').value = '';
                document.getElementById('smallpoxYear').value = '';
                document.getElementById('smallpoxValue').value = '';
            }
        });

        document.getElementById('deleteSmallpoxBtn').addEventListener('click', function() {
            const country = document.getElementById('smallpoxCountry').value;
            const year = document.getElementById('smallpoxYear').value;
            
            if (!country || !year) {
                alert('Please fill in country and year');
                return;
            }
            
            if (deleteSmallpoxData(country, year)) {
                document.getElementById('smallpoxCountry').value = '';
                document.getElementById('smallpoxYear').value = '';
                document.getElementById('smallpoxValue').value = '';
            }
        });
    }

    // Initialize COVID-19 chart and event listeners
    const covidCtx = document.getElementById('covidChart');
    if (covidCtx) {
        window.covidChart = new Chart(covidCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'COVID-19 Deaths (per 100,000)',
                    data: [],
                    borderColor: '#17a2b8',
                    backgroundColor: 'rgba(23, 162, 184, 0.1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Deaths (per 100,000)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    }
                }
            }
        });
        updateCOVIDDisplay(covidData.data);

        // Add COVID-19 event listeners
        document.getElementById('covidSearchBtn').addEventListener('click', function() {
            const country = document.getElementById('covidSearchCountry').value;
            const date = document.getElementById('covidSearchDate').value;
            const results = searchCOVIDData(country, date);
            updateCOVIDDisplay(results);
        });

        document.getElementById('covidResetBtn').addEventListener('click', function() {
            document.getElementById('covidSearchCountry').value = '';
            document.getElementById('covidSearchDate').value = '';
            updateCOVIDDisplay(covidData.data);
        });

        document.getElementById('insertCOVIDBtn').addEventListener('click', function() {
            const country = document.getElementById('covidCountry').value;
            const date = document.getElementById('covidDate').value;
            const value = document.getElementById('covidValue').value;
            const lowerCI = document.getElementById('covidLowerCI').value;
            const upperCI = document.getElementById('covidUpperCI').value;
            
            if (!country || !date || !value || !lowerCI || !upperCI) {
                alert('Please fill in all fields');
                return;
            }
            
            if (insertCOVIDData(country, date, value, lowerCI, upperCI)) {
                document.getElementById('covidCountry').value = '';
                document.getElementById('covidDate').value = '';
                document.getElementById('covidValue').value = '';
                document.getElementById('covidLowerCI').value = '';
                document.getElementById('covidUpperCI').value = '';
            }
        });

        document.getElementById('updateCOVIDBtn').addEventListener('click', function() {
            const country = document.getElementById('covidCountry').value;
            const date = document.getElementById('covidDate').value;
            const value = document.getElementById('covidValue').value;
            const lowerCI = document.getElementById('covidLowerCI').value;
            const upperCI = document.getElementById('covidUpperCI').value;
            
            if (!country || !date || !value || !lowerCI || !upperCI) {
                alert('Please fill in all fields');
                return;
            }
            
            if (updateCOVIDData(country, date, value, lowerCI, upperCI)) {
                document.getElementById('covidCountry').value = '';
                document.getElementById('covidDate').value = '';
                document.getElementById('covidValue').value = '';
                document.getElementById('covidLowerCI').value = '';
                document.getElementById('covidUpperCI').value = '';
            }
        });

        document.getElementById('deleteCOVIDBtn').addEventListener('click', function() {
            const country = document.getElementById('covidCountry').value;
            const date = document.getElementById('covidDate').value;
            
            if (!country || !date) {
                alert('Please fill in country and date');
                return;
            }
            
            if (deleteCOVIDData(country, date)) {
                document.getElementById('covidCountry').value = '';
                document.getElementById('covidDate').value = '';
                document.getElementById('covidValue').value = '';
                document.getElementById('covidLowerCI').value = '';
                document.getElementById('covidUpperCI').value = '';
            }
        });
    }
});

// Update HIV display
function updateHIVDisplay(data) {
    const tableBody = document.getElementById('hivTableBody');
    if (!tableBody) return;

    // Clear existing table data
    tableBody.innerHTML = '';

    // Update table
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.country}</td>
            <td>${item.year}</td>
            <td>${item.value.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    // Update chart
    const ctx = document.getElementById('hivChart');
    if (!ctx) return;

    // Only destroy and recreate if the chart exists
    if (window.hivChart && typeof window.hivChart.destroy === 'function') {
        window.hivChart.destroy();
    }

    window.hivChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.year),
            datasets: [{
                label: 'HIV Prevalence (%)',
                data: data.map(item => item.value),
                borderColor: '#28a745',
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Prevalence (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            }
        }
    });
}

// Update Smallpox display
function updateSmallpoxDisplay(data) {
    const tableBody = document.getElementById('smallpoxTableBody');
    if (!tableBody) return;

    // Clear existing table data
    tableBody.innerHTML = '';

    // Update table
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.country}</td>
            <td>${item.year}</td>
            <td>${item.value.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    // Update chart
    const ctx = document.getElementById('smallpoxChart');
    if (!ctx) return;

    // Only destroy and recreate if the chart exists
    if (window.smallpoxChart && typeof window.smallpoxChart.destroy === 'function') {
        window.smallpoxChart.destroy();
    }

    window.smallpoxChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.year),
            datasets: [{
                label: 'Smallpox Deaths (per 1,000)',
                data: data.map(item => item.value),
                borderColor: '#dc3545',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Deaths (per 1,000)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            }
        }
    });
}

// Update COVID-19 display
function updateCOVIDDisplay(data) {
    const tableBody = document.getElementById('covidTableBody');
    if (!tableBody) return;

    // Clear existing table data
    tableBody.innerHTML = '';

    // Update table
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.country}</td>
            <td>${item.date}</td>
            <td>${item.value.toFixed(2)}</td>
            <td>${item.lowerCI.toFixed(2)}</td>
            <td>${item.upperCI.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    // Update chart
    const ctx = document.getElementById('covidChart');
    if (!ctx) return;

    // Only destroy and recreate if the chart exists
    if (window.covidChart && typeof window.covidChart.destroy === 'function') {
        window.covidChart.destroy();
    }

    window.covidChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.date),
            datasets: [{
                label: 'COVID-19 Deaths (per 100,000)',
                data: data.map(item => item.value),
                borderColor: '#17a2b8',
                backgroundColor: 'rgba(23, 162, 184, 0.1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Deaths (per 100,000)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                }
            }
        }
    });
}

// Update the comparison chart creation function
function createComparisonChart(data1, data2, disease1, disease2) {
    const ctx = document.getElementById('comparisonChart');
    if (!ctx) return; // Return if canvas element doesn't exist

    // Destroy existing chart if it exists
    if (window.comparisonChart && typeof window.comparisonChart.destroy === 'function') {
        window.comparisonChart.destroy();
    }

    const labels = [...new Set([
        ...data1.map(item => disease1 === 'covid' ? item.date : item.year),
        ...data2.map(item => disease2 === 'covid' ? item.date : item.year)
    ])].sort();

    const dataset1 = {
        label: disease1 === 'hiv' ? 'HIV Prevalence (%)' : 
              disease1 === 'smallpox' ? 'Smallpox Deaths (per 1,000)' : 
              'COVID-19 Deaths (per 100,000)',
        data: labels.map(label => {
            const item = data1.find(d => 
                disease1 === 'covid' ? d.date === label : d.year === label
            );
            return item ? (disease1 === 'hiv' ? item.value * 100 : 
                         disease1 === 'smallpox' ? item.value * 1000 : 
                         item.value) : null;
        }),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1
    };

    const dataset2 = {
        label: disease2 === 'hiv' ? 'HIV Prevalence (%)' : 
              disease2 === 'smallpox' ? 'Smallpox Deaths (per 1,000)' : 
              'COVID-19 Deaths (per 100,000)',
        data: labels.map(label => {
            const item = data2.find(d => 
                disease2 === 'covid' ? d.date === label : d.year === label
            );
            return item ? (disease2 === 'hiv' ? item.value * 100 : 
                         disease2 === 'smallpox' ? item.value * 1000 : 
                         item.value) : null;
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1
    };

    window.comparisonChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [dataset1, dataset2]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Disease Comparison'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
} 