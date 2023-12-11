import { LineChart, Line, XAxis, YAxis } from 'recharts';
import graphData from '../graph.json'

const data = graphData;

const Graph = () => {
  return (
    <div className="h-60 w-full float-left flex flex-col gap-2">
      <h2 className="text-lg font-semibold text-blue-500">Today</h2>
      <LineChart
          width={1100}
          height={220}
          data={data}
          margin={{
            top: 5,
            right: 100,
            left: 10,
            bottom: 5,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis dataKey="value" label={{ value: 'Sales ($)', angle: -90, position: 'insideLeft' , style: { fontWeight: 'bold' } }} />
          <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
        </LineChart>
    </div>
  )
}
export default Graph