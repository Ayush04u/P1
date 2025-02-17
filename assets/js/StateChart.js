function generateData(count, yrange) {
    let i = 0;
    let series = [];
    while (i < count) {
      series.push({
        x: 'Label ' + (i + 1),
        y: i % (yrange.max - yrange.min + 1) + yrange.min // Ensure all values are covered
      });
      i++;
    }
    return series;
  }
  // Options object for configuring the heatmap chart
  let options = {
    series: [{
      name: 'Metric1',
      data: generateData(18, { min: 0, max: 3 })
    }],
    chart: {
      height: 100,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FF0000", "#00FF00"],
    xaxis: {
      type: 'category',
      labels: {
        style: {
          colors: '#FFFFFF'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Value',
        style: {
          color: '#FFFFFF'
        }
      },
      labels: {
        style: {
          colors: '#FFFFFF'
        }
      }
    },
    plotOptions: {
        heatmap: {
          colorScale: {
            inverse: false,
            min: 0,
            max: 3,
            ranges: [{
              from: 0,
              to: 0,
              color: '#FF0000',
              name: 'Stop',
            }, {
              from: 1,
              to: 1,
              color: '#00FF00',
              name: 'Start',
            }, {
              from: 2,
              to: 2,
              color: '#0000FF',
              name: 'Emergency',
            }, {
              from: 3,
              to: 3,
              color: '#FFFF00',
              name: 'idle',
            }]
          }
        }
      }
  };
  
  let chart = new ApexCharts(document.querySelector("#chart10"), options);
  chart.render();
  