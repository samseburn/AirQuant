//  - Graph type : 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function... DEFAULT: 'linear'
import React from 'react';
import {
  LineChart,
  Line,
  // X축
  XAxis,
  // Y축
  YAxis,
  // 그래프 보조선
  CartesianGrid,
  Tooltip,
  // 선의 설명을 나타내는 지표
  Legend,
  Label,
} from 'recharts';

const data = [
  {
    name: '100mM',
    'Algorithm applied': 40,
    'Algorithm not applied': 7,
    amt: 2400,
  },
  {
    name: '10mM',
    'Algorithm applied': 19,
    'Algorithm not applied': 5,
    amt: 2210,
  },
  {
    name: '1mM',
    'Algorithm applied': 10,
    'Algorithm not applied': 4,
    amt: 2290,
  },
  {
    name: '100µM',
    'Algorithm applied': 5,
    'Algorithm not applied': 2,
    amt: 2000,
  },
  {
    name: '10µM',
    'Algorithm applied': 4,
    'Algorithm not applied': 1,
    amt: 2181,
  },
  {
    name: '1µM',
    'Algorithm applied': 3,
    'Algorithm not applied': 0.8,
    amt: 2500,
  },
  {
    name: '100nM',
    'Algorithm applied': 2,
    'Algorithm not applied': 0.7,
    amt: 2100,
  },
];

const CompanyAlgoChart = () => {
  return (
    <LineChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 40,
        right: 30,
        left: 10,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name">
        <Label value="Time" position="bottom" />
      </XAxis>
      <YAxis>
        <Label value="Intensity" angle={-90} position="left" />
      </YAxis>

      {/* mouse h:over 시 그래프 상세 정보 */}
      <Tooltip />
      <Legend verticalAlign="top" height={40} />
      {/* dataKey: 표시할 value의 data map key */}
      <Line
        type="monotone"
        dataKey="Algorithm applied"
        stroke="#1b76ff"
        activeDot={{ r: 7 }}
      />
      <Line
        type="monotone"
        dataKey="Algorithm not applied"
        // 선의 색상
        stroke="#FB2576"
        // 그래프에 마우스를 올릴 시 원의 스타일 설정
        activeDot={{ r: 7 }}
      />
    </LineChart>
  );
};

export default CompanyAlgoChart;
