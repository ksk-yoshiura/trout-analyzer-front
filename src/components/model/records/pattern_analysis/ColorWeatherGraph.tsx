import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import Loading from '../../../shared/Loading'
import useSWR, { mutate } from 'swr'
import { ColorWeatherAnalysisApiResponse } from "../../../../pages/api/patterns/analysis/color_weather/[record_id]/[result]"

Chart.register(CategoryScale);

const dataFrame = {
  // x 軸のラベル
  labels: ['sunny', 'rainy', 'cloudy'],
  datasets: [
    {
      label: '',
      data: [0,0,0], // 初期値は0
      backgroundColor: '',
      stack: '',
    }
  ]
};

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Color - Weather'
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

type GraphData = {
  label: string
  data: Array<number>
  backgroundColor: string
  stack: string
}

type ParamProps = {
  recordId: string | string[]
  targetParam: string
}

// レンダリング
export default function ColorWeatherGraph(props: ParamProps): JSX.Element {
  const { recordId, targetParam } = props
  // 雛形
  const dataForm = {
    label: '',
    data: [0,0,0], // 初期値は0
    backgroundColor: '',
    stack: '',
  }

  let tempDataForm = {
    label: '',
    data: [0,0,0], // 初期値は0
    backgroundColor: '',
    stack: '',
  }
  // グラフで表示するデータセット
  let tempListForGraph: Array<GraphData> = []
  const weatherTypeList = ['sunny', 'rainy', 'cloudy'] // 条件リスト
  // APIからデータ取得
  const { data, error } = useSWR<ColorWeatherAnalysisApiResponse, Error>('pattern/analysis/color_weather/' + recordId + '/' + targetParam)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  console.log(data)

  const listDataForGraph = data.result ? data.result : []
  listDataForGraph.map((val, index) => { // APIから取得したデータ

    const paraentVal = val
    if (index === 0) { // 最初のデータを格納
      tempDataForm.label = paraentVal.ColorName + '-' + paraentVal.ResultType
      tempDataForm.backgroundColor = paraentVal.ColorCode
      tempDataForm.stack = paraentVal.ResultType
      // 初期化することで参照を切る
      tempDataForm.data = [0,0,0]
      const indexWeatherList = weatherTypeList.indexOf(paraentVal.WeatherType)
      if (indexWeatherList !== -1) tempDataForm.data[indexWeatherList] = paraentVal.Sum
      // データ加工用配列
      tempListForGraph.push(tempDataForm)
      return
    }
    const lastData = tempListForGraph.slice(-1)[0]
    // すでに整形したデータリスト
    // すでにあるデータ
    if (paraentVal.ColorCode === lastData.backgroundColor && paraentVal.ResultType === lastData.stack) { // 色と結果が同じ
      // 条件リストに該当があれば合計値を格納
      const indexWeatherList = weatherTypeList.indexOf(paraentVal.WeatherType)
      if (indexWeatherList !== -1) lastData.data[indexWeatherList] = paraentVal.Sum
    } else {
      // 以下新規
      const newData = { ...dataForm }
      // 条件リストに該当があれば合計値を格納
      const indexWeatherList = weatherTypeList.indexOf(paraentVal.WeatherType)
      // 初期化することで参照を切る
      newData.data = [0,0,0]
      if (indexWeatherList !== -1) newData.data[indexWeatherList] = paraentVal.Sum
      newData.backgroundColor = paraentVal.ColorCode
      newData.label = paraentVal.ColorName + '-' + paraentVal.ResultType
      newData.stack = paraentVal.ResultType
      tempListForGraph.push(newData)
    }
  })
  // 上書き
  dataFrame.datasets = tempListForGraph

  return <Bar data={dataFrame} options={options} />;
}