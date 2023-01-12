import { CaseDataContext } from 'App';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

const TableItem = ({ params, data }) => {
  const [caseItem, setCaseItem] = useState({});
  const [prevItem, setPrevItem] = useState({});
  const [nextItem, setNextItem] = useState({});

  useEffect(() => {
    if (data.length >= 1) {
      const targetCase = data.find((item) => item.id === parseInt(params));
      const prevCase = data.find((item) => item.id === parseInt(params) - 1);
      const nextCase = data.find((item) => item.id === parseInt(params) + 1);

      setCaseItem(targetCase);
      setPrevItem(prevCase);
      setNextItem(nextCase);
    }
  }, [params]);

  // const handleClickTableItem = () => {
  //   console.log(nextItem);
  //   if (!prevItem || !nextItem) {
  //     alert('요청하신 적용 사례가 없습니다.');
  //     navigate('/case', { reaplace: true });
  //   }
  //   // else if (prevItem) {
  //   //   navigate(`/case/${parseInt(caseId) - 1}`);
  //   // } else if (nextItem) {
  //   //   navigate(`case/${parseInt(caseId) + 1}`);
  //   // }
  // };

  return (
    <div className="TableItem">
      <Link className="back" to={-1}>
        ⇤ 뒤로 가기
      </Link>
      <div className="TableItem-info">
        {caseItem.image && (
          <div className="image-box">
            <img src={caseItem.image} alt="" />
          </div>
        )}
        <div className="text-group">
          <div className="TableItem-title">
            <h1>{caseItem.title}</h1>
            <span className="date">2023-01-01</span>
          </div>
          <p className="TableItem-desc">{caseItem.description}</p>
        </div>
      </div>
      <div className="TableItem-pagination">
        <div className="pagination prev">
          <span>이전</span>
          {prevItem ? (
            <Link to={`/case/${parseInt(params) - 1}`}>{prevItem.title}</Link>
          ) : (
            <Link to={'/case'}>없음</Link>
          )}
        </div>
        <div className="pagination next">
          <span>다음</span>
          {nextItem ? (
            <Link to={`/case/${parseInt(params) + 1}`}>{nextItem.title}</Link>
          ) : (
            <Link to={'/case'}>없음</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableItem;
