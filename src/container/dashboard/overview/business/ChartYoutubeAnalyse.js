import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts";
import { numberWithCommas } from '../../../../utility/utility';

const ChartYoutubeAnalyse = ({
    chartData,
    loadingChart
}) => {
    const chartDataGeneral = {
        chart: {
            height: 250,
            width: '100%',
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 5,
                left: 2,
                blur: 5,
                opacity: 0.0
            },
            toolbar: {
                show: true,
                tools: {
                    download: false,
                    selection: false,
                    zoom: false,
                    zoomin: true,
                    zoomout: true,
                    pan: false,
                    reset: false
                }
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        },
        colors: ["#005473", "#ff8800"],
        stroke: {
            curve: 'smooth'
        },
        // title: {
        //     text: `Thống kê Subscribe`,
        //     align: 'left',
        //     style: {
        //         fontFamily: 'Be Vietnam Pro',
        //         fontWeight: 700,
        //         fontSize: '15px'
        //     },
        // },
        // subtitle: {
        //     text: `Lần cập nhật tiếp theo 21:00 ${(today.getHours()) >= 21 ? (`${today.getDate() + 1  }/${  today.getMonth()  }${1  }/${  today.getFullYear()}`)
        //         : (`${today.getDate()  }/${  today.getMonth()  }${1  }/${  today.getFullYear()}`)
        //         }`,
        //     align: 'left',
        //     style: {
        //         fontFamily: 'Be Vietnam Pro'
        //     },
        // },
        grid: {
            borderColor: '#68550046',
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.3
            },
        },
        markers: {
            size: [4, 7]
        },
        xaxis: {
            categories: chartData?.wave_date || [],
        },
        yaxis: {
            title: {
                text: 'Tỉ lệ / Tổng Sub'
            },
            labels: {
                formatter (value) {
                    return numberWithCommas(value || 0);
                }
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        tooltip: {
            x: {
                show: true,
                format: 'DD-MM-YYYY'
            },
            y: {
                formatter (value) {
                    return numberWithCommas(value || 0);
                }
            }
        },
        noData: {
            text: loadingChart ? "" : "Không có dữ liệu phù hợp",
            align: "center",
            verticalAlign: "middle",
            style: {
                color: 'black',
                fontSize: '17px',
                fontFamily: 'Be Vietnam Pro'
            },
            offsetY: 4
        },
        dataLabels: {
            enabled: true,
            formatter (val) {
                const valueFormatted = numberWithCommas(val || 0);
                return valueFormatted;
            }
        },
        series: chartData?.wave_timeline || [],
    }

    return (
        <ReactApexChart options={chartDataGeneral} series={chartDataGeneral?.series} type="line" height={180}/>
    )
}

ChartYoutubeAnalyse.propTypes = {
    chartData: PropTypes.object,
    loadingChart: PropTypes.bool
};
  

export default ChartYoutubeAnalyse;
