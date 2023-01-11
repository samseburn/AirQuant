import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const TechMeasurementTable = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <>
      <div className="TechMeasurementTable">
        <p className="TechMeasurementTable_Contents" data-aos="fade-up">
          측정 항목
        </p>
        <div className="TechMeasurementTable_Table" data-aos="fade-up">
          <table className="TechMeasurementTable_Table_In">
            <thead>
              <tr className="TechMeasurementTable_Thead__tr">
                <th> </th>
                <th>미세먼지</th>
                <th>TVOC</th>
                <th>CO2</th>
                <th>SO2</th>
                <th>CO</th>
                <th>NO2</th>
                <th>온도</th>
                <th>습도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>측정결과범위</td>
                <td>0 ~ 1000</td>
                <td>0 ~ 60</td>
                <td>0 ~ 10,000</td>
                <td>0 ~ 20</td>
                <td>0 ~ 1,000</td>
                <td>0 ~ 5</td>
                <td>-40 ~ 90</td>
                <td>0 ~ 100</td>
              </tr>
              <tr className="TechMeasurementTable_Tbody_tr">
                <td>단위</td>
                <td>㎍/m³</td>
                <td>ppm</td>
                <td>ppm</td>
                <td>ppm</td>
                <td>ppm</td>
                <td>ppm</td>
                <td>℃</td>
                <td>%RH</td>
              </tr>

              <tr>
                <td>정확도</td>
                <td>±10%</td>
                <td>±5%</td>
                <td>±4%</td>
                <td>±3%</td>
                <td>±2%</td>
                <td>±5%</td>
                <td>±0.3℃</td>
                <td>±2%RH</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="TechMeasurementTable_explain">
          SO2, CO, NO2는 각각 H2S(황화수소), O3(오존), 에탄올과 대체가능합니다.
        </p>
        <div className="TechMeasurementTable_spec">
          <p className="TechMeasurementTable_spec_title">기술스펙</p>
          <div className="TechMeasurementTable_spec_content">
            <p>
              <span className="TechMeasurementTable_spec_content_bold">
                크기 :
              </span>{' '}
              153mm(L) x 153mm(W) x 60mm(H)
            </p>
            <p>
              <span className="TechMeasurementTable_spec_content_bold">
                무게 :
              </span>{' '}
              550g
            </p>
            <p>
              <span className="TechMeasurementTable_spec_content_bold">
                통신방법 :
              </span>{' '}
              Wi-Fi, 블루투스, 이더넷{' '}
            </p>
            <p>
              <span className="TechMeasurementTable_spec_content_bold">
                전원 인가 방법 :
              </span>{' '}
              PoE (Power over Ethernet) | DC 5V 2A
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechMeasurementTable;
