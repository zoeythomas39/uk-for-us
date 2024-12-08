Highcharts.chart('genderchart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'House of Commons Members by Gender',
        align: 'left'
    },
    subtitle: {
        text: 'Following 2024 election. Source: <a href="https://members.parliament.uk/parties/commons">UK Parliament</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Men','Women'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of representatives',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1,
            color: '#d40000'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'MPs',
        data: [387,263],
        showInLegend: false,
    }]
});

Highcharts.chart('experiencechart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'House of Commons Members by Experience',
        align: 'left'
    },
    subtitle: {
        text: 'Representatives entering the House of Commons for the first time following the 2024 election. Source: <a href="https://members.parliament.uk/parties/commons">UK Parliament</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['New','Returning'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of representatives',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1,
            color: '#d40000'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'MPs',
        data: [335,315],
        showInLegend: false,
    }]
});

Highcharts.chart('ethnicitychart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'House of Commons Members by Ethnicity',
        align: 'left'
    },
    subtitle: {
        text: 'Members belonging to ethnic minority groups following the 2024 election. Source: <a href="https://members.parliament.uk/parties/commons">UK Parliament</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['White','Ethnic Minority'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of representatives',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1,
            color: '#d40000'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'MPs',
        data: [559,91],
        showInLegend: false,
    }]
});

Highcharts.chart('lgbtqchart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'House of Commons Members by Political Party',
        align: 'left'
    },
    subtitle: {
        text: 'As of 2024. Source: <a href="https://members.parliament.uk/parties/commons">UK Parliament</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Labour','Conservative','Liberal Democrat','Other'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of representatives',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1,
            color: '#d40000'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'MPs',
        data: [402,121,72,55],
        showInLegend: false,
    }]
});

Highcharts.chart('genderchart2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'House of Lords Members by Gender',
        align: 'left'
    },
    subtitle: {
        text: 'As of 2024. Source: <a href="https://members.parliament.uk/parties/lords/by-gender">UK Parliament</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Men','Women'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Lords',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1,
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Lords',
        data: [561,244],
        showInLegend: false,
    }]
});

Highcharts.chart('experiencechart2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'House of Lords Members by Peerage',
        align: 'left'
    },
    subtitle: {
        text: 'As of 2024. Source: <a href="https://members.parliament.uk/parties/lords/by-peerage">UK Parliament</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Life Peers','Hereditary Peers','Bishops'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Lords',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Lords',
        data: [692,88,25],
        showInLegend: false,
    }]
});

Highcharts.chart('ethnicitychart2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'House of Lords Members by Ethnicity',
        align: 'left'
    },
    subtitle: {
        text: 'Lords belonging to ethnic minority groups in 2019 (latest report available). Source: <a href="https://researchbriefings.files.parliament.uk/documents/LLN-2019-0150/LLN-2019-0150.pdf">House of Lords Library Briefing</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['White','Ethnic Minority'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Lords',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Lords',
        data: [754,46],
        showInLegend: false,
    }]
});

Highcharts.chart('lgbtqchart2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'House of Lords Members by Political Party',
        align: 'left'
    },
    subtitle: {
        text: 'As of 2024. Crossbench members are politically independent. Source: <a href="https://members.parliament.uk/parties/lords">UK Parliament</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Conservative','Labour','Crossbench','Liberal Democrat','Other'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Lords',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Lords',
        data: [273,187,184,78,58],
        showInLegend: false,
    }]
});

// chart arrows

let charts = document.querySelectorAll('.firstchart');
let charts2 = document.querySelectorAll('.secondchart');

let button = document.querySelector('#button');
let button2 = document.querySelector('#button2');

let currentChartIndex = 0;
let currentChartIndex2 = 0;

button.onclick = () => {
    charts[currentChartIndex].style.display = 'none';
    currentChartIndex = (currentChartIndex + 1) % charts.length;
    charts[currentChartIndex].style.display = 'flex';
};
button2.onclick = () => {
    charts2[currentChartIndex2].style.display = 'none';
    currentChartIndex2 = (currentChartIndex2 + 1) % charts2.length;
    charts2[currentChartIndex2].style.display = 'flex';
};
button3.onclick = () => {
    charts[currentChartIndex].style.display = 'none';
    currentChartIndex = (currentChartIndex + 3) % charts.length;
    charts[currentChartIndex].style.display = 'flex';
};
button4.onclick = () => {
    charts2[currentChartIndex2].style.display = 'none';
    currentChartIndex2 = (currentChartIndex2 + 3) % charts2.length;
    charts2[currentChartIndex2].style.display = 'flex';
};

// flags

let swapCells = document.querySelectorAll('.swap-cell');

swapCells.forEach(cell => {
  let flag = cell.querySelector('.flagpic');
  let text = cell.querySelector('.hidden-text');

  flag.onclick = () => {
    flag.style.display = 'none';
    text.style.display = 'block';
  };

  text.onclick = () => {
    flag.style.display = 'block';
    text.style.display = 'none';
  };
});
