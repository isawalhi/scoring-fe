import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="60%" height="60%" debounce={100}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="createdAt" axisLine tickLine />
        <YAxis
          domain={[0, 100]}
          axisLine
          tickMargin={25}
          tickLine
          height={50}
        />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="score" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
