import './chart.scss'

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartType {
  title: string;
  data: {
    name: string;
    'Active User': number;
  }[]
  dataKey: string;
  grid: boolean;
}

const Chart = ({title, data, dataKey, grid}: ChartType) => {

  return (
    <div className='chartComponent'>
      <h3>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#5550bd'/>
          <Line type='monotone' dataKey={dataKey} stroke='#5550bd'/>
          <Tooltip />
          {grid && <CartesianGrid stroke='#d4d4d4' strokeDasharray={'5 5'}/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart