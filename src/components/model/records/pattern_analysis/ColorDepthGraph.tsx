import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import useSWR from 'swr'

import type { ColorDepthAnalysisApiResponse } from "../../../../pages/api/patterns/analysis/color_depth/[record_id]/[result]"
import Loading from '../../../shared/Loading'

Chart.register(CategoryScale);

const dataFrame = {
  // x 軸のラベル
  labels: ['top', 'shallow', 'midle', 'deep', 'bottom'],
  datasets: [
    {
      label: '',
      data: [0, 0, 0, 0, 0], // 初期値は0
      backgroundColor: '',
      stack: '',
    }
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
export default function ColorDepthGraph(props: ParamProps): JSX.Element {
  const { recordId, targetParam } = props
  // 雛形
  const dataForm = {
    label: '',
    data: [0, 0, 0, 0, 0], // 初期値は0
    backgroundColor: '',
    stack: '',
  }

  const tempDataForm = {
    label: '',
    data: [0, 0, 0, 0, 0], // 初期値は0
    backgroundColor: '',
    stack: '',
  }
  // グラフで表示するデータセット
  const tempListForGraph: Array<GraphData> = []
  const depthTypeList = ['top', 'shallow', 'midle', 'deep', 'bottom'] // 条件リスト
  // APIからデータ取得
  const { data, error } = useSWR<ColorDepthAnalysisApiResponse, Error>('pattern/analysis/color_depth/' + recordId + '/' + targetParam)
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
      tempDataForm.data = [0, 0, 0]
      const indexDepthList = depthTypeList.indexOf(paraentVal.DepthType)
      if (indexDepthList !== -1) tempDataForm.data[indexDepthList] = paraentVal.Sum
      // データ加工用配列
      tempListForGraph.push(tempDataForm)
      return
    }
    const lastData = tempListForGraph.slice(-1)[0]
    // すでに整形したデータリスト
    // すでにあるデータ
    if (paraentVal.ColorCode === lastData.backgroundColor && paraentVal.ResultType === lastData.stack) { // 色と結果が同じ
      // 条件リストに該当があれば合計値を格納
      const indexDepthList = depthTypeList.indexOf(paraentVal.DepthType)
      if (indexDepthList !== -1) lastData.data[indexDepthList] = paraentVal.Sum
    } else {
      // 以下新規
      const newData = { ...dataForm }
      // 条件リストに該当があれば合計値を格納
      const indexDepthList = depthTypeList.indexOf(paraentVal.DepthType)
      // 初期化することで参照を切る
      newData.data = [0, 0, 0]
      if (indexDepthList !== -1) newData.data[indexDepthList] = paraentVal.Sum
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