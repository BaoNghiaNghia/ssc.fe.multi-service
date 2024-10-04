import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts";
import { useSelector } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay-ts';
import { useEffect, useState } from 'react';
import { numberWithCommas, numberWithCommasCurrency } from '../../../utility/utility';
import { FORMAT_DATESTRING, VIETNAMES_CURRENCY } from '../../../variables/index';

const ChartSubscribePoint = ({
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
            },
            events: {
                rendered: () => {
                    setLoadingF(false);
                }
            }
        },
        colors: ['chocolate', "#008000"],
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
        fill: {
            gradient: {
                enabled: true,
                opacityFrom: 0.65,
                opacityTo: 0
            }
        },
        yaxis: {
            title: {
                text: `${typeService} / ${VIETNAMES_CURRENCY}`
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
                format: FORMAT_DATESTRING
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
                fontSize: '16px',
                fontFamily: 'Be Vietnam Pro, sans-serif',
            },
            offsetY: 4
        },
        dataLabels: {
            enabled: true,
            formatter (val, { seriesIndex }) {
                if (seriesIndex === 1) {
                    const valueFormattedCurrency = numberWithCommasCurrency(val || 0);
                    return `${valueFormattedCurrency} ${VIETNAMES_CURRENCY}`;
                }
                const valueFormatted = numberWithCommas(val || 0);
                return `${valueFormatted}`;
            },
            position: "top"
        },
        series: Array.isArray(chartData?.wave_timeline) ? chartData.wave_timeline : [], // Ensure wave_timeline is an array
    }

    return (
        <LoadingOverlay
            active={loadingF}
            spinner
            text='Đang cập nhật...'
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

ChartSubscribePoint.propTypes = {
    chartData: PropTypes.object,
    loadingChart: PropTypes.bool
};

export default ChartSubscribePoint;
