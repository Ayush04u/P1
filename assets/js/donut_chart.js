var myChart = echarts.init(document.getElementById('main'));

// Define the chart options
var option = {
    series: [
        {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            splitNumber: 12,
            itemStyle: {
                color: '#FFAB91'
            },
            progress: {
                show: true,
                width: 15 // Smaller width
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    width: 15 // Smaller width
                }
            },
            axisTick: {
                distance: -25, // Adjusted distance
                splitNumber: 5,
                lineStyle: {
                    width: 1, // Thinner line
                    color: '#999'
                }
            },
            splitLine: {
                distance: -30, // Adjusted distance
                length: 8, // Shorter length
                lineStyle: {
                    width: 2, // Thinner line
                    color: '#999'
                }
            },
            axisLabel: {
                distance: -10, // Adjusted distance
                color: '#999',
                fontSize: 12 // Smaller font size
            },
            anchor: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 20, // Smaller line height
                borderRadius: 4, // Smaller border radius
                offsetCenter: [0, '-15%'],
                fontSize: 24, // Smaller font size
                fontWeight: 'bolder',
                formatter: '{value} KWH',
                color: 'inherit'
            },
            data: [
                {
                    value: 20
                }
            ]
        },
        {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            itemStyle: {
                color: '#FD7347'
            },
            progress: {
                show: true,
                width: 4 // Thinner width
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            },
            data: [
                {
                    value: 20
                }
            ]
        }
    ]
};

// Set the chart options
myChart.setOption(option);

// Update the chart data every 2 seconds
setInterval(function () {
    const random = +(Math.random() * 60).toFixed(2);
    myChart.setOption({
        series: [
            {
                data: [
                    {
                        value: random
                    }
                ]
            },
            {
                data: [
                    {
                        value: random
                    }
                ]
            }
        ]
    });
}, 2000);