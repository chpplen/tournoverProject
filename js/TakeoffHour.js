// JavaScript Document
$(function () {
    $('#TakeoffHour').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                '0.5',
                '1.0',
                '1.5',
                '2.0',
                '2.5',
                '3.0',
				'3.5'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '<span style="font-size:10px; color:#ccc">NUMBER OF EMPLOYEES</span>'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:13px;">{point.key} hr</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0;color:#666"><b>{point.y:.1f} peson</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'DG 01',
            data: [1, 2, 3, 8, 9, 11, 17]

        }, {
            name: 'DG 02',
            data: [1, 2, 5, 6, 9, 13, 14]

        }, {
            name: 'DG 03',
            data: [0, 1, 6, 5, 7, 12, 14]

        }, {
            name: 'DG 04',
            data: [1, 3, 2, 7, 7, 13, 13]

        }]
    });
});