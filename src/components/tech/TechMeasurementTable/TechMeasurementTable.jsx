import React from 'react';

const TechMeasurementTable = () => {
  return (
    <div className="TechMeasurementTable">
      <p className="TechMeasurementTable_title">측정 항목</p>
      <table className="TechMeasurementTable_table">
        <tr className="TechMeasurementTable_table_title">
          <td></td>
          <td>미세먼지</td>
          <td>TVOC</td>
          <td>CO2</td>
          <td>SO2</td>
          <td>CO</td>
          <td>NO2</td>
          <td>온도</td>
          <td>습도</td>
        </tr>

        <tr>
          <td>
            측정결과
            <br />
            범위
          </td>
          <td>0 ~ 1000</td>
          <td>0 ~ 60</td>
          <td>0 ~ 10,000</td>
          <td>0 ~ 20</td>
          <td>0 ~ 1,000</td>
          <td>0 ~ 5</td>
          <td>-40 ~ 90</td>
          <td>0 ~ 100</td>
        </tr>
        <tr>
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
      </table>
      <p className="TechMeasurementTable_explain">
        SO2, CO, NO2는 각각 H2S(황화수소), O3(오존), 에탄올과 대체가능합니다.
      </p>
      <hr className="TechMeasurementTable_line" />
      <div className="TechMeasurementTable_spec">
        <p className="TechMeasurementTable_spec_title">기술스펙</p>
        <div className="TechMeasurementTable_spec_content">
          <p>크기 : 153mm(L) x 153mm(W) x 60mm(H)</p>
          <p>무게 : 550g</p>
          <p>통신방법: Wi-Fi, 블루투스, 이더넷 </p>
          <p>전원 인가 방법: PoE (Power over Ethernet) | DC 5V 2A</p>
        </div>
      </div>
    </div>
  );
};

export default TechMeasurementTable;
