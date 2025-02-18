var myChart = echarts.init(document.getElementById('main1'));

// Sample data: Days of the month and corresponding production values
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const production = [120, 200, 150, 80, 70, 110, 130, 170, 190, 220, 250, 300, 280, 260, 240, 230, 210, 200, 180, 160, 140, 120, 100, 90, 80, 70, 60, 50, 40, 30];

// Define the chart options
var option = {
    title: {
        text: 'Daily Production',
        left: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: days.map(day => `Day ${day}`), // Display as "Day 1", "Day 2", etc.
        axisLabel: {
            rotate: 45, // Rotate labels for better readability
            fontSize: 12
        }
    },
    yAxis: {
        type: 'value',
        name: 'Production (Units)',
        nameLocation: 'middle',
        nameGap: 30,
        axisLabel: {
            fontSize: 12
        }
    },
    series: [
        {
            name: 'Production',
            type: 'bar',
            data: production,
            itemStyle: {
                color: '#5470C6' // Bar color
            },
            label: {
                show: true,
                position: 'top',
                formatter: '{c} Units', // Display value on top of bars
                fontSize: 12
            }
        }
    ]
};

// Set the chart options
myChart.setOption(option);