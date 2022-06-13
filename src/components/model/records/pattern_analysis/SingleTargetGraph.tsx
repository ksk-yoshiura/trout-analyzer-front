import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js'; 
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

const data = {
  // x 軸のラベル
  labels: ['super fast', 'fast', 'normal', 'slow', 'super slow'],
  datasets: [
    {
      axis: 'y',
      label: 'Dataset',
      // データの値
      data: [5, 9, 8, 1, 6],
      // グラフの背景色
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      // グラフの枠線の色
      borderColor: [
        'rgb(255, 99, 132)',
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