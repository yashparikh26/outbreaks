# Global Disease Tracker

A web application for tracking and analyzing disease data globally.

## Prerequisites

- Python 3.x (built-in HTTP server)
- Modern web browser

## Running the Application

1. Open a terminal/command prompt
2. Navigate to the project directory (diseasw)
3. Run the following command:
   ```
   python -m http.server 8000
   ```
4. Open your web browser and visit:
   - Main page: http://localhost:8000
   - Data Explorer: http://localhost:8000/pages/explorer.html
   - Dashboard: http://localhost:8000/pages/dashboard.html
   - Map: http://localhost:8000/pages/map.html
   - Comparison: http://localhost:8000/pages/comparison.html

## Project Structure

- `/pages` - HTML pages for different features
- `/js` - JavaScript files for functionality
- `/css` - Stylesheets
- `/data` - CSV data files
- `/images` - Image assets

## Features

- Interactive dashboard
- Global disease map
- Data comparison tool
- Data explorer with charts and visualizations

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- ECharts
- CSV Data Processing
- Python HTTP Server (for local development)

## Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. The application will automatically load and process the CSV data

## Data Sources

The application uses data from Our World in Data (https://ourworldindata.org/pandemics) and other reliable sources.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Our World in Data for providing the dataset
- ECharts for the visualization library
- Bootstrap for the UI framework 