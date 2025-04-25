// HIV Dataset
const hivData = {
    title: "HIV Prevalence",
    description: "Share of population infected with HIV",
    unit: "Percentage",
    data: [
        { country: "South Africa", year: 1990, value: 0.7 },
        { country: "South Africa", year: 1995, value: 1.2 },
        { country: "South Africa", year: 2000, value: 17.3 },
        { country: "South Africa", year: 2005, value: 17.8 },
        { country: "South Africa", year: 2010, value: 17.8 },
        { country: "South Africa", year: 2015, value: 18.9 },
        { country: "South Africa", year: 2020, value: 19.1 },
        { country: "Eswatini", year: 1990, value: 0.1 },
        { country: "Eswatini", year: 1995, value: 1.9 },
        { country: "Eswatini", year: 2000, value: 25.9 },
        { country: "Eswatini", year: 2005, value: 27.2 },
        { country: "Eswatini", year: 2010, value: 27.4 },
        { country: "Eswatini", year: 2015, value: 27.3 },
        { country: "Eswatini", year: 2020, value: 26.8 },
        { country: "Lesotho", year: 1990, value: 0.1 },
        { country: "Lesotho", year: 1995, value: 1.2 },
        { country: "Lesotho", year: 2000, value: 23.2 },
        { country: "Lesotho", year: 2005, value: 22.7 },
        { country: "Lesotho", year: 2010, value: 22.9 },
        { country: "Lesotho", year: 2015, value: 24.6 },
        { country: "Lesotho", year: 2020, value: 21.1 }
    ]
};

// Smallpox Dataset
const smallpoxData = {
    title: "Smallpox Deaths",
    description: "Number of deaths from smallpox per 1,000 population",
    unit: "Deaths per 1,000",
    data: [
        { country: "Austria", year: 1847, value: 0.16 },
        { country: "Austria", year: 1872, value: 1.866 },
        { country: "Austria", year: 1873, value: 3.094 },
        { country: "Austria", year: 1897, value: 0.061 },
        { country: "Belgium", year: 1871, value: 4.168 },
        { country: "Belgium", year: 1899, value: 0.038 },
        { country: "England", year: 1838, value: 1.064 },
        { country: "England", year: 1900, value: 0.003 },
        { country: "Netherlands", year: 1871, value: 4.355 },
        { country: "Netherlands", year: 1899, value: 0.001 },
        { country: "Prussia", year: 1872, value: 2.624 },
        { country: "Prussia", year: 1898, value: 0.0004 },
        { country: "Scotland", year: 1872, value: 0.718 },
        { country: "Scotland", year: 1899, value: 0.0002 },
        { country: "Sweden", year: 1779, value: 7.196 },
        { country: "Sweden", year: 1899, value: 0 }
    ]
};

// Export the datasets
export { hivData, smallpoxData }; 