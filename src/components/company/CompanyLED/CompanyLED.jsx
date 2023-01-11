import React, { useEffect } from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Label,
} from 'recharts';
import Aos from 'aos';
import 'aos/dist/aos.css';

const data1 = [
  {
    name: 'Case A',
    red: 4000,
    blue: 2400,
    amt: 2400,
  },
  {
    name: 'Case B',
    red: 3000,
    blue: 1398,
    amt: 2210,
  },
  {
    name: 'Case C',
    red: 2000,
    blue: 4800,
    amt: 2290,
  },
  {
    name: 'Case D',
    red: 9080,
    blue: 6008,
    amt: 2000,
  },
];

const data2 = [
  {
    name: 'Case A',
    red: 4000,
    blue: 2400,
    amt: 2400,
  },
  {
    name: 'Case B',
    red: 3000,
    blue: 1398,
    amt: 2210,
  },
  {
    name: 'Case C',
    red: 2000,
    blue: 3000,
    amt: 2290,
  },
  {
    name: 'Case D',
    red: 2780,
    blue: 3908,
    amt: 2000,
  },
  {
    name: 'Case E',
    red: 7090,
    blue: 9000,
    amt: 2181,
  },
];

const CompanyLED = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="CompanyLED">
      <h1 className="CompanyLED-title" data-aos="fade-up">
        단일/다중 LED 사용 신호대잡음비 비교
      </h1>
      <div className="CompanyLED-charts" data-aos="fade-up">
        <div className="CompanyLED-charts-left">
          <BarChart
            width={500}
            height={300}
            data={data1}
            margin={{ top: 5, right: 30, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name">
              <Label value="Code lengh (bit)" position="bottom" />
            </XAxis>
            <YAxis>
              <Label value="SNR(x10)" angle={-90} position="left" />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign="top" height={40} />
            <Bar dataKey="blue" fill="#1b76ff" />
            <Bar dataKey="red" fill="#FB2576" />
          </BarChart>
        </div>
        <div className="CompanyLED-charts-right">
          <BarChart
            width={500}
            height={300}
            data={data2}
            margin={{ top: 5, right: 30, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name">
              <Label value="Modulation frequency (Hz)" position="bottom" />
            </XAxis>
            <YAxis>
              <Label value="SNR(x10)" angle={-90} position="left" />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign="top" height={40} />
            <Bar dataKey="blue" fill="#1b76ff" />
            <Bar dataKey="red" fill="#FB2576" />
          </BarChart>
        </div>
      </div>
      <div className="CompanyLED-content" data-aos="fade-up">
        코드의 길이가 길어지거나 주파수가 낮을수록 신호대잡음비가 개선됨
        <br />두 개의 LED가 켜져있을 경우 신호대잡음비가 개선되지만, 단일 LED
        사용 시와 큰 차이 없음
      </div>
    </div>
  );
};

export default CompanyLED;
