import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js'; 
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

const data = {
  // x 軸のラベル
  labels: ['super fast', 'fast', 'normal', 'slow', 'super slow'],
  datasets: [
    {
      label: 'Dataset',
      // データの値
      data: [5, 9, 8, 1, 6],
      // グラフの背景色
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      // グラフの枠線の色
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      // グラフの枠線の太さ
      borderWidth: 1,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    }
  ],
};

// レンダリング
export default function SingleTargetGraph(): JSX.Element {
  return <Bar data={data} />;
}