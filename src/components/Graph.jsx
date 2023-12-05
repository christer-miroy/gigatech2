import { LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [
  {
      "time":"00:00",
      "value":0
  },
  {
      "time":"03:00",
      "value":275.00092883864187
  },
  {
      "time":"06:00",
      "value":624.9997268121642
  },
  {
      "time":"09:00",
      "value":800.0007947282496
  },
  {
      "time":"12:00",
      "value":1462.5004097817537
  },
  {
      "time":"15:00",
      "value":1987.5002756713616
  },
  {
      "time":"18:00",
      "value":2400
  },
  {
    "time":"21:00",
    "value":2400
  },
  {
    "time":"24:00",
    "value":null
  }
];

const Graph = () => {
  return (
    <div className="h-60 w-full float-left flex flex-col gap-2">
      <h2 className="text-lg font-semibold text-blue-500">Today</h2>
      <LineChart
          width={1200}
          height={220}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
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