import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

const data = {
  // x 軸のラベル
  labels: ['super fast', 'fast', 'normal', 'slow', 'super slow'],
  datasets: [
    {
      label: 'red',
      data: [2, 3, 4, 5, 6, 8],
      backgroundColor: 'red',
      stack: 'Reaction',
    },
    {
      label: 'blue',
      data: [1, 3, 7, 7, 3, 8],
      backgroundColor: 'blue',
      stack: 'Reaction',
    },
    {
      label: 'green',
      data: [1, 3, 7, 8, 9, 8],
      backgroundColor: 'green',
      stack: 'Reaction',
    },
    {
      label: 'yellow',
      data: [1, 0, 0, 8, 6, 8],
      backgroundColor: 'yellow',
      stack: 'No Reaction',
    },
  ]

};

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Color - Depth'
    }
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true
    }
  },
}

// レンダリング
export default function SingleTargetGraph(): JSX.Element {
  return <Bar data={data} options={options} />;
}