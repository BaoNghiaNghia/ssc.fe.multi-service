import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts";
import LoadingOverlay from 'react-loading-overlay-ts';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { numberWithCommas } from '../../../utility/utility';
import { FORMAT_DATESTRING } from '../../../variables/index';

const ChartYoutubeAnalyse = ({
    chartData,
    loadingChart
}) => {
    const [loadingF, setLoadingF] = useState(true);
    const [error, setError] = useState(null); // State for error handling

    const { typeService } = useSelector(state => {
        return {
            typeService: state?.reports?.typeService,
        };
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoadingF(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    // Validate chartData and handle errors
    useEffect(() => {
        if (!chartData || !Array.isArray(chartData.wave_timeline) || !Array.isArray(chartData.wave_date)) {
            setError("Invalid chart data. Please check your input.");
        } else {
            setError(null); // Clear error if data is valid
        }
    }, [chartData]);

    const chartDataGeneral = {
        chart: {
            height: 250,
            width: '100%',
            type: 'area',
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
            categories: Array.isArray(chartData?.wave_date) ? chartData.wave_date : [], // Ensure wave_date is an array
        },
        yaxis: {
            title: {
                text: `% / ${typeService}`
            },
            labels: {
                formatter(value) {
                    return numberWithCommas(value || 0);
                }
            },
        },
        fill: {
            gradient: {
                enabled: true,
                opacityFrom: 0.65,
                opacityTo: 0
            }
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
                format: FORMAT_DATESTRING
            },
            y: {
                formatter(value) {
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
                fontSize: '16px',
                fontFamily: 'Be Vietnam Pro, sans-serif',
            },
            offsetY: 4
        },
        dataLabels: {
            enabled: true,
            formatter(val, { seriesIndex }) {
                const valueFormatted = numberWithCommas(val || 0);
                if (seriesIndex === 1) {
                    return `${valueFormatted}`;
                }
                return `${valueFormatted} %`;
            },
            position: "top"
        },
        series: Array.isArray(chartData?.wave_timeline) ? chartData.wave_timeline : [], // Ensure wave_timeline is an array
    }

    const loadingOverlayStyles = {
        text: {
            color: 'white', // Adjust text color for better readability against the gradient
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            fontWeight: 'bold',
        }
    };

    return (
        <LoadingOverlay
            active={loadingF}
            spinner
            text='Đang cập nhật...'
            styles={loadingOverlayStyles}
        >
            {error ? (
                <div style={{ textAlign: 'center', color: 'red' }}>
                    {error}
                </div>
            ) : (
                <ReactApexChart options={chartDataGeneral} series={chartDataGeneral?.series} type="area" height={180} />
            )}
        </LoadingOverlay>
    )
}

ChartYoutubeAnalyse.propTypes = {
    chartData: PropTypes.object,
    loadingChart: PropTypes.bool
};

export default ChartYoutubeAnalyse;
