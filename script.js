document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the CSV file
    Plotly.d3.csv('311_boston_data.csv', function (data) {
        // Sort data by Count in descending order
        data.sort((a, b) => b.Count - a.Count);
        // Take top 10 reasons
        var top10Reasons = data.slice(0, 10);
        // Extract reason names and counts
        var reasons = top10Reasons.map(entry => entry.reason);
        var counts = top10Reasons.map(entry => entry.Count);
        // Create a bar chart
        var trace = {
            x: counts,
            y: reasons,
            type: 'bar',
            orientation: 'h',
            marker: {
                color: 'rgba(255, 87, 34, 0.7)'  // Set the color of the bars with The Economist color
            }
        };
        var layout = {
            title: {
                text: 'Sanitation and Enforcement Bothered Bostonians the Most',
                font: {
                    size: 24,
                    color: 'rgba(0, 0, 0, 0.9)',
                    family: 'Arial, sans-serif',  // Use a sans-serif font for the main title
                    bold: 'bold'
                },
                xref: 'paper',
                x: 0.00,
                yref: 'paper',
                y: 1.2,  // Adjusted y-coordinate for the title to create space
                yanchor: 'bottom',
                xanchor: 'left'  // Align title to the left
            },
            annotations: [
                {
                    text: 'Top 10 Reasons for Boston 311 Calls (2023)',
                    showarrow: false,
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.00,  // Adjusted x-coordinate for the subtitle to align left
                    y: 1.15,  // Adjusted y-coordinate for the subtitle
                    font: {
                        size: 20,
                        color: 'rgba(0, 0, 0, 0.9)',
                        family: 'Arial, serif',  // Use a serif font for the title
                        bold: 'bold'
                    }
                },
                {
                    text: 'Data Source: City of Boston 311 Service Requests',
                    showarrow: false,
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.00,  // Adjusted x-coordinate for the data source citation
                    y: -0.3,  // Adjusted y-coordinate for the data source citation
                    font: {
                        size: 10,
                        color: 'rgba(0, 0, 0, 0.7)',
                        family: 'Arial, sans-serif',  // Use a sans-serif font for the data source citation
                        italic: 'italic'
                    }
                },
                {
                    text: 'Chart by: Alina Beskrovna',
                    showarrow: false,
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.00,  // Adjusted x-coordinate for the authorship credit
                    y: -0.35,  // Adjusted y-coordinate for the authorship credit
                    font: {
                        size: 10,
                        color: 'rgba(0, 0, 0, 0.7)',
                        family: 'Arial, sans-serif',  // Use a sans-serif font for the authorship credit
                        italic: 'italic'
                    }
                }
            ],
            xaxis: {
                title: {
                    text: 'Number of Calls',
                    font: {
                        size: 14,
                        color: 'rgba(0, 0, 0, 0.9)',
                        family: 'Arial, sans-serif',  // Use a sans-serif font for the x-axis title
                        bold: 'bold'
                    }
                },
                tickfont: {
                    size: 12,  // Adjust the font size of the ticks on the x-axis
                    family: 'Arial, sans-serif'  // Use a sans-serif font for the ticks on the x-axis
                }
            },
            yaxis: {
                title: {
                    text: ' ',
                    font: {
                        size: 14,
                        color: 'rgba(0, 0, 0, 0.9)',
                        family: 'Arial, sans-serif',  // Use a sans-serif font for the y-axis title
                        bold: 'bold'
                    }
                },
                automargin: true,
                ticklen: 10,
                tickfont: {
                    size: 12,  // Adjust the font size of the ticks on the y-axis
                    family: 'Arial, sans-serif'  // Use a sans-serif font for the ticks on the y-axis
                },
                standoff: 50  // Increase the standoff to move the label further to the left
            },
            margin: {
                l: 150,
                r: 50,
                b: 120,  // Increase the bottom margin to provide space for the title and labels
                t: 80,
                pad: 10
            },
            paper_bgcolor: 'rgba(255, 255, 255, 0.95)',  // Set a light background color for the entire chart
            plot_bgcolor: 'rgba(255, 255, 255, 0.95)'  // Set a light background color for the plot area
        };
        Plotly.newPlot('chartContainer', [trace], layout);
    });
});
