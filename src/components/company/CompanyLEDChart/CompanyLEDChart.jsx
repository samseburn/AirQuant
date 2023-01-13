import React from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Label,
  ResponsiveContainer,
} from 'recharts';

const data1 = [
  {
    name: 64,
    red: 2,
    blue: 2,
  },
  {
    name: 128,
    red: 3.5,
    blue: 3,
  },
  {
    name: 256,
    red: 4.5,
    blue: 4,
  },
  {
    name: 512,
    red: 8,
    blue: 7,
  },
];

const data2 = [
  {
    name: 20,
    red: 1,
    blue: 1,
  },
  {
    name: 10,
    red: 3,
    blue: 3,
  },
  {
    name: 5,
    red: 6,
    blue: 5,
  },
  {
    name: 2,
    red: 10,
    blue: 10,
  },
  {
    name: 1,
    red: 23,
    blue: 20,
  },
];

const CompanyLEDChart = () => {
  return (
    <div className="CompanyLEDChart">
      <div className="CompanyLEDChart-left">
        <ResponsiveContainer width="100%">
          <BarChart
            data={data1}
            margin={{ top: 5, right: 10, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name">
              <Label value="Code lengh (bit)" position="bottom" />
            </XAxis>
            <YAxis>
              <Label value="SNR(x10)" angle={-90} position="insideLeft" />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign="top" height={30} />
            <Bar dataKey="blue" fill="#1b76ff" />
            <Bar dataKey="red" fill="#FB2576" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="CompanyLEDChart-right">
        <ResponsiveContainer width="100%">
          <BarChart
            data={data2}
            margin={{ top: 5, right: 10, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name">
              <Label value="Modulation frequency (Hz)" position="bottom" />
            </XAxis>
            <YAxis>
              <Label value="SNR(x10)" angle={-90} position="insideLeft" />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign="top" height={30} />
            <Bar dataKey="blue" fill="#1b76ff" />
            <Bar dataKey="red" fill="#FB2576" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CompanyLEDChart;
