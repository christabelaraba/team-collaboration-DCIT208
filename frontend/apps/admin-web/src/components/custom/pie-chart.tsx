/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register necessary components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChartComponent = ({ approved, pending, rejected }: { approved: number | undefined; pending: number | undefined; rejected: number | undefined }) => {
  const data = {
    labels: ['Approved', 'Pending', 'Rejected'],
    datasets: [
      {
        data: [approved, pending, rejected],
        backgroundColor: [
          'rgba(231, 98, 5)',
          'rgba(11, 7, 132)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full"  style={{ height: '300px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartComponent;