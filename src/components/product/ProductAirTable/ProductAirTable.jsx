import React from 'react';

const ProductAirTable = () => {
    return (
        <>
        <div className='AirTable__container'>
            <p className='AirTable__Contents'>다중이용시설 실내공기질 유지기준</p>
            <div className='AirTable__Table'>
            <table className='AirTable__Table_In'>
                <thead>
                    <tr className='AirTable__Thead__tr'>
                        <th>다중이용시설</th>
                        <th colSpan={2}>기존</th>
                        <th>개정</th>
                    </tr>
                </thead>
                <tbody className='AirTable__Tbody'>
                    <tr>
                        <td rowSpan={2}>지하역사, 지하도상가, 도서관, 박물관, 대규모점포, 영화관, 학원 등</td>
                        <td>PM10</td>
                        <td>150 ug/m3 이하</td>
                        <td>100 ug/m3 이하 (강화)</td>
                    </tr>
                    <tr>
                        <td>PM2.5</td>
                        <td> - </td>
                        <td>50 ug/m3 이하 (신설)</td>
                    </tr>

                    <tr className='AirTable__Tbody_tr'>
                        <td rowSpan={2}>의료기관, 산후조리원, 노인요양시설, 어린이집, 실내 어린이놀이시설</td>
                        <td>PM10</td>
                        <td>100 ug/m3 이하</td>
                        <td>75 ug/m3 이하 (강화)</td>
                    </tr>
                    <tr className='AirTable__Tbody_tr'>
                        <td>PM2.5</td>
                        <td>70 ug/m3 이하</td>
                        <td>35 ug/m3 이하 (강화)</td>
                    </tr>

                    <tr>
                        <td rowSpan={3}>학교</td>
                        <td rowSpan={2}>PM10</td>
                        <td rowSpan={2}>모든 교실: 100ug/m3 이하</td>
                        <td>교사 및 급식실 : 75ug/m3 이하 (강화)</td>
                    </tr>
                    <tr>
                        <td>체육관 및 강당 : 150ug/m3 이하 (신설)</td>
                    </tr>
                    <tr>
                        <td>PM2.5</td>
                        <td>35ug/m3 이하</td>
                        <td>35ug/m3 이하</td>
                    </tr>

                    <tr className='AirTable__Tbody_tr'>
                        <td>대중교통차량</td>
                        <td>PM2.5</td>
                        <td> - </td>
                        <td>50ug/m3 이하 (신설)</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </>
    );
};

export default ProductAirTable;