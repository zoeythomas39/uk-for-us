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
        text: 'House of Windsor monarchs'
    },
    subtitle: {
        text: 'Five monarchs have taken the throne since the House of Windsor was founded in 1917. From <a href="https://www.royal.uk/kings-and-queens-1066">royal.uk</a>.'
    },
    colors: [
        'red',
        'blue',
        'yellow',
        'purple',
        'orange'
    ],
    series: [{
        data: [{
            name: '<strong>George V</strong>'+'<br>'+'1910 to 1936',
            description: 'Reign: 26 years'
        }, {
            name: '<strong>Edward VIII</strong><br>'+'1936 to 1936',
            description: 'Reign: Six months (abdicated throne)'
        }, {
            name: '<strong>George VI</strong><br>'+'1936 to 1952',
            description: 'Reign: 16 years'
        }, {
            name: '<strong>Elizabeth II</strong><br>'+'1952 to 2022',
            description: 'Reign: 70 years'
        }, {
            name: '<strong>King Charles III</strong><br>'+'2022 to present',
            description: 'Reign: ongoing'
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
        text: 'House of Windsor monarchs'
    },
    subtitle: {
        text: 'Five monarchs have taken the throne since the House of Windsor was founded in 1917. From <a href="https://www.royal.uk/kings-and-queens-1066">royal.uk</a>.'
    },
    colors: [
        'red',
        'blue',
        'yellow',
        'purple',
        'orange'
    ],
    series: [{
        data: [{
            name: 'George V',
            description: '1910 to 1936'
        }, {
            name: 'Edward VIII',
            description: '1936 to 1936'
        }, {
            name: 'George VI',
            description: '1936 to 1952'
        }, {
            name: 'Elizabeth II',
            description: '1952 to 2022'
        }, {
            name: 'King Charles III',
            description: '2022 to present'
        }]
    }]
});

