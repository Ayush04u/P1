!(function () {
    let e, o, s, r, a;
    a = isDarkStyle
        ? ((e = config.colors_dark.cardColor), (o = config.colors_dark.headingColor), (s = config.colors_dark.axisColor), (r = config.colors_dark.borderColor), "#36435C")
        : ((e = config.colors.white), (o = config.colors.headingColor), (s = config.colors.axisColor), (r = config.colors.borderColor), config.colors_label.secondary);
    const t = { series1: "#826af9", series2: "#d2b0ff", bg: "#f8d3ff" },
        l = { series1: "#fee802", series2: "#3fd0bd", series3: "#826bf8", series4: "#2b9bf4" },
        i = { series1: "#29dac7", series2: "#60f2ca", series3: "#a5f8cd" };
    function n(e, o) {
        let s = 0,
            r = [];
        for (; s < e; ) {
            var a = "w" + (s + 1).toString(),
                t = Math.floor(Math.random() * (o.max - o.min + 1)) + o.min;
            r.push({ x: a, y: t }), s++;
        }
        return r;
    }
    var c = document.querySelector("#lineAreaChart"),
        d = {
            chart: { height: 257, fontFamily: "IBM Plex Sans", type: "area", parentHeightOffset: 0, zoom: { enabled: !1 }, toolbar: { show: !1 } },
            series: [
                {
                    name: "line Area Chart",
                    data: [
                        [7, 150],
                        [8, 120],
                        [8.5, 220],
                        [9, 170],
                        [9.2, 270],
                        [9.8, 150],
                        [10, 190],
                        [11, 220],
                        [12, 170],
                        [13, 230],
                    ],
                }
            ],
            markers: { strokeWidth: 2, strokeOpacity: 1, strokeColors: "#ffffff", colors: "#7DD420" },
            dataLabels: { enabled: !1 },
            stroke: { curve: "straight" },
            colors: ['#7DD420'],
            grid: { borderColor: r, xaxis: { lines: { show: !0 } }, padding: { top: -20 } },
            tooltip: {
                custom: function ({ series: e, seriesIndex: o, dataPointIndex: s, w }) {
                    return '<div class="px-3 py-2"><span>' + parseFloat(w.globals.labels[s]).toFixed(1) + ": <b>" + e[o][s] + "m/m</b></span></div>";
                },
            },
            xaxis: {
                axisBorder: { show: !1 },
                axisTicks: { show: !1 },
                labels: {
                    formatter: function (e) {
                        return parseFloat(e).toFixed(1);
                    },
                    style: { colors: s, fontSize: "13px" },
                },
            },
            yaxis: { labels: { style: { colors: s, fontSize: "13px" } } },
        };
    if (null !== c) {
        const h = new ApexCharts(c, d);
        h.render();
    }

    (c = document.querySelector("#energyChart")),
        (d = {
            chart: { height: 300, fontFamily: "IBM Plex Sans", type: "area", parentHeightOffset: 0, zoom: { enabled: !1 }, toolbar: { show: !1 } },
            series: [{ data: [280, 200, 220, 180, 270, 250, 70] }],
            markers: { strokeWidth: 2, strokeOpacity: 1, strokeColors: "#ffffff", colors: "#FF8600" },
            dataLabels: { enabled: !1 },
            stroke: { curve: "smooth" },
            colors: ['#FF8600'],
            plotOptions: { bar: { horizontal: !0, barHeight: "30%", startingShape: "rounded", borderRadius: 8 } },
            grid: { borderColor: r, xaxis: { lines: { show: !0 } }, padding: { top: -20 } },
            // tooltip: {
            //     custom: function ({ series: e, seriesIndex: o, dataPointIndex: s }) {
            //         return '<div class="px-3 py-2"><span>' + e[o][s] + "%</span></div>";
            //     },
            // },
            xaxis: {
                categories: ["7", "8", "9", "10", "11", "12", "13"],
                axisBorder: { show: !1 },
                axisTicks: { show: !1 },
                labels: { style: { colors: s, fontSize: "13px" } },
            },
            yaxis: { labels: { style: { colors: s, fontSize: "13px" } } },
        });
    if (null !== c) {
        const f = new ApexCharts(c, d);
        f.render();
    }

    (c = document.querySelector("#horizontalBarChart")),
        (d = {
            chart: { height: 300, fontFamily: "IBM Plex Sans", type: "bar", toolbar: { show: !1 } },
            plotOptions: { bar: { horizontal: !0, barHeight: "30%", startingShape: "rounded", borderRadius: 8 } },
            grid: { borderColor: r, xaxis: { lines: { show: !1 } }, padding: { top: -20, bottom: -12 } },
            colors: config.colors.info,
            dataLabels: { enabled: !1 },
            series: [{ data: [700, 350, 480, 600, 210] }],
            xaxis: { categories: ["RCO", "JCO", "IDLE", "STOP", "START"], axisBorder: { show: !1 }, axisTicks: { show: !1 }, labels: { style: { colors: s, fontSize: "13px" } } },
            yaxis: { labels: { style: { colors: s, fontSize: "13px" } } },
        });
    if (null !== c) {
        const f = new ApexCharts(c, d);
        f.render();
    }

    (c = document.querySelector("#plannedStopDonutChart")),
        (d = {
            chart: { height: 250, fontFamily: "IBM Plex Sans", type: "donut" },
            labels: ["Stop", "Emergency", "Breakdown", "Powergone"],
            series: [85, 15, 50, 50],
            colors: [l.series1, l.series4, l.series3, l.series2],
            stroke: { show: !1, curve: "straight" },
            dataLabels: {
                enabled: false,
            },
            legend: { show: !0, position: "bottom", labels: { colors: s, useSeriesColors: !1 } },
        });
    if (null !== c) {
        const u = new ApexCharts(c, d);
        u.render();
    }

    (c = document.querySelector("#unplannedStopDonutChart")),
        (d = {
            chart: { height: 390, fontFamily: "IBM Plex Sans", type: "donut" },
            labels: ["Stop", "Emergency", "Breakdown", "Powergone"],
            series: [20, 15, 40, 50],
            colors: [l.series1, l.series4, l.series3, l.series2],
            stroke: { show: !1, curve: "straight" },
            dataLabels: {
                enabled: false,
            },
            legend: { show: !0, position: "bottom", labels: { colors: s, useSeriesColors: !1 } },
        });
    if (null !== c) {
        const u = new ApexCharts(c, d);
        u.render();
    }

    (c = document.querySelector("#scatterChart")),
        (d = {
            chart: { type: 'bar',
                height: 150,
                stacked: true,
                stackType: '100%',
                toolbar: { show: !1 } },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            series: [{
                data: [44]
              }, {
                data: [53]
              }],
            xaxis: { categories: [2008], axisBorder: { show: !1 }, axisTicks: { show: !1 }, labels: { style: { colors: s, fontSize: "13px" } } },
            yaxis: { labels: { style: { colors: s, fontSize: "13px" } } }
        });
    if (null !== c) {
        const f = new ApexCharts(c, d);
        f.render();
    }
})();
