Highcharts.chart('container', {
    chart: {
        type: 'timeline'
    },
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{typeDescription}</div>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        },
        point: {
            valueDescriptionFormat: '{index}. {point.label}. ' +
                '{point.description}.'
        }
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    title: {
        text: 'Timeline of 21st Century PMs'
    },
    subtitle: {
        text: 'Labour Party members are in red; Conservative in blue. Info source: <a href="https://www.gov.uk/government/history/past-prime-ministers">gov.uk</a>'
    },
    colors: [
        'red',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'red'
    ],
    series: [{
        data: [{
            name: '<strong>Gordon Brown</strong>'+'<br>'+'2007 to 2010',
            description: 'Labour'
        }, {
            name: '<strong>David Cameron</strong><br>'+'2010 to 2016',
            description: 'Conservative'
        }, {
            name: '<strong>Theresa May</strong><br>'+'2016 to 2019',
            description: 'Conservative'
        }, {
            name: '<strong>Boris Johnson</strong><br>'+'2019 to 2022',
            description: 'Conservative'
        }, {
            name: '<strong>Liz Truss</strong><br>'+'2022 to 2022',
            description: 'Conservative'
        }, {
            name: '<strong>Rishi Sunak</strong><br>'+'2022 to 2024',
            description: 'Conservative'
        }, {
            name: '<strong>Keir Starmer</strong><br>'+'2024 to present',
            description: 'Labour'
        }]
    }]
});
// Data retrieved from: https://ferjedatabanken.no/statistikk



Highcharts.chart('container3', {
    chart: {
        type: 'timeline'
    },
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{typeDescription}</div>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        },
        point: {
            valueDescriptionFormat: '{index}. {point.label}. ' +
                '{point.description}.'
        }
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    title: {
        text: 'Timeline of 21st Century PMs'
    },
    subtitle: {
        text: 'Labour Party members are in red; Conservative in blue. Info source: <a href="https://www.gov.uk/government/history/past-prime-ministers">gov.uk</a>'
    },
    colors: [
        'red',
        'blue',
        'blue',
        'blue',
        'blue',
        'blue',
        'red'
    ],
    series: [{
        data: [{
            name: 'Gordon Brown',
            description: '2007-2010'
        }, {
            name: 'David Cameron',
            description: '2010-2016'
        }, {
            name: 'Theresa May',
            description: '2016-2019'
        }, {
            name: 'Boris Johnson',
            description: '2019-2022'
        }, {
            name: 'Liz Truss',
            description: '2022-2022'
        }, {
            name: 'Rishi Sunak',
            description: '2022-2024'
        }, {
            name: 'Keir Starmer',
            description: '2024-present'
        }]
    }]
});

