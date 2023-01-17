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
          <div className="TechMeasurementTable_Contents_small">CHECK</div>
          <span className="TechMeasurementTable_Contents_br">
            에어퀀트가 측정하는{' '}
          </span>
          항목을 확인하세요
        </p>
        <div className="TechMeasurementTable_Table" data-aos="fade-up">
          <table className="TechMeasurementTable_Table_In">
            <thead>
              <tr className="TechMeasurementTable_Thead__tr">
                <th> </th>
                <th>미세먼지</th>
                <th className="TechMTHide">TVOC</th>
                <th className="TechMTHide">CO2</th>
                <th className="TechMTHide">SO2</th>
                <th className="TechMTHide">CO</th>
                <th className="TechMTHide">NO2</th>
                <th>온도</th>
                <th>습도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="TechMTable_br">측정</span>결과
                  <span className="TechMTable_br">범위</span>
                </td>
                <td>0 ~ 1000</td>
                <td className="TechMTHide">
                  <span className="TechMTbr">0 ~ </span>60
                </td>
                <td className="TechMTHide">
                  <span className="TechMTbr">0 ~ </span>10,000
                </td>
                <td className="TechMTHide">
                  <span className="TechMTbr">0 ~ </span>20
                </td>
                <td className="TechMTHide">
                  <span className="TechMTbr">0 ~ </span>1,000
                </td>
                <td className="TechMTHide">
                  <span className="TechMTbr">0 ~ </span>5
                </td>
                <td>
                  <span className="TechMTbr">-40 ~ </span>90
                </td>
                <td>
                  <span className="TechMTbr">0 ~ </span>100
                </td>
              </tr>
              <tr className="TechMeasurementTable_Tbody_tr">
                <td>단위</td>
                <td>㎍/m³</td>
                <td className="TechMTHide">ppm</td>
                <td className="TechMTHide">ppm</td>
                <td className="TechMTHide">ppm</td>
                <td className="TechMTHide">ppm</td>
                <td className="TechMTHide">ppm</td>
                <td>℃</td>
                <td>%RH</td>
              </tr>

              <tr>
                <td className="TechAccurate">정확도</td>
                <td>±10%</td>
                <td className="TechMTHide">±5%</td>
                <td className="TechMTHide">±4%</td>
                <td className="TechMTHide">±3%</td>
                <td className="TechMTHide">±2%</td>
                <td className="TechMTHide">±5%</td>
                <td>±0.3℃</td>
                <td>±2%RH</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="TechMeasurementTable_explain" data-aos="fade-up">
          <span className="TechMeasurementTable_explain_br">
            SO2, CO, NO2는 각각 H2S(황화수소), O3(오존), 에탄올과{' '}
          </span>
          대체가능합니다.
        </p>

        {/* 기술 스펙 */}
        <div className="TechMeasurementTable_spec" data-aos="fade-up">
          <div className="TechMeasurementTable_spec_graybox">
            <div className="TechMeasurementTable_spec_graybox_section1">
              기술{' '}
              <span className="TechMeasurementTable_spec_graybox_section1_br">
                스펙
              </span>
            </div>
            <div className="TechMeasurementTable_spec_graybox_section2">
              크기 : 153mm(L) x 153mm(W) x 60mm(H) <br />
              전원 인가 방법 : PoE (Power over Ethernet) / DC 5V 2A
            </div>
            <div className="TechMeasurementTable_spec_graybox_section3">
              무게 : 550g <br />
              통신방법 : Wi-Fi, 블루투스, 이더넷
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechMeasurementTable;
