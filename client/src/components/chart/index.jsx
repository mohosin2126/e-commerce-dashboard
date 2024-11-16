import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
} from 'chart.js';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement
);

export default function SimpleChart({ type, data, labels, backgroundColor }) {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Data',
                data: data,
                backgroundColor: backgroundColor || 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2, // Thicker border for a sleek look
                hoverBorderWidth: 3, // More emphasis on hover
                borderRadius: 8, // Smooth, rounded borders for a modern look
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top', // Place legend at the top for better clarity
                labels: {
                    boxWidth: 12, // Make legend items smaller
                    font: { size: 12 }, // Smaller font size for legend
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker background for tooltips
                titleFont: { size: 14 }, // Title font size
                bodyFont: { size: 12 }, // Body font size
            },
        },
        elements: {
            point: { radius: 4 }, // Smaller point radius
        },
        animation: {
            duration: 800, // Smooth animations
            easing: 'easeOutQuart',
        },
    };

    switch (type) {
        case 'bar':
            return <Bar data={chartData} options={options} />;
        case 'line':
            return <Line data={chartData} options={options} />;
        case 'pie':
            return <Pie data={chartData} options={options} />;
        case 'doughnut':
            return <Doughnut data={chartData} options={options} />;
        default:
            return null;
    }
}
