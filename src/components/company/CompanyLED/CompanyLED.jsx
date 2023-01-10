import React, { useState, useEffect } from 'react';
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

const data1 = [
  {
    name: 'Case A',
    green: 4000,
    purple: 2400,
    amt: 2400,
  },
  {
    name: 'Case B',
    green: 3000,
    purple: 1398,
    amt: 2210,
  },
  {
    name: 'Case C',
    green: 2000,
    purple: 4800,
    amt: 2290,
  },
  {
    name: 'Case D',
    green: 9080,
    purple: 6008,
    amt: 2000,
  },
];

const data2 = [
  {
    name: 'Case A',
    green: 4000,
    purple: 2400,
    amt: 2400,
  },
  {
    name: 'Case B',
    green: 3000,
    purple: 1398,
    amt: 2210,
  },
  {
    name: 'Case C',
    green: 2000,
    purple: 3000,
    amt: 2290,
  },
  {
    name: 'Case D',
    green: 2780,
    purple: 3908,
    amt: 2000,
  },
  {
    name: 'Case E',
    green: 7090,
    purple: 9000,
    amt: 2181,
  },
];

const CompanyLED = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  console.log(window.scrollY);
  return (
    <div className="CompanyLED">
      <h1
        className={
          scrollPosition > 3000
            ? 'CompanyLED-title-scrolled'
            : 'CompanyLED-title'
        }
      >
        단일/다중 LED 사용 신호대잡음비 비교
      </h1>
      <div
        className={
          scrollPosition > 3100
            ? 'CompanyLED-charts-scrolled'
            : 'CompanyLED-charts'
        }
      >
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
            <Bar dataKey="purple" fill="#8884d8" />
            <Bar dataKey="green" fill="#82ca9d" />
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
            <Bar dataKey="purple" fill="#8884d8" />
            <Bar dataKey="green" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
      <div
        className={
          scrollPosition > 3150
            ? 'CompanyLED-content-scrolled'
            : 'CompanyLED-content'
        }
      >
        코드의 길이가 길어지거나 주파수가 낮을수록 신호대잡음비가 개선됨
        <br />두 개의 LED가 켜져있을 경우 신호대잡음비가 개선되지만, 단일 LED
        사용 시와 큰 차이 없음
      </div>
    </div>
  );
};

export default CompanyLED;
