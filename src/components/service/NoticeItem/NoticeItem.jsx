import { noticeData } from 'components/service/NoticeList/NoticeList';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

const NoticeItem = ({ params }) => {
  useEffect(() => {
    console.log(noticeData.data[0].title);
  });

  const data = noticeData.data;
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

  return (
    <div className="TableItem">
      <Link className="back" to={'/service/notice'}>
        ⇤ 뒤로 가기
      </Link>
      <div className="TableItem-info">
        <div className="text-group">
          <div className="TableItem-title">
            <h1>{caseItem.title}</h1>
            <span className="date">{caseItem.date}</span>
          </div>
          <p className="TableItem-desc">{caseItem.description}</p>
        </div>
      </div>
      <div className="TableItem-pagination">
        <div className="pagination prev">
          <span>이전</span>
          {prevItem ? (
            <Link to={`/service/notice/${parseInt(params) - 1}`}>
              {prevItem.title}
            </Link>
          ) : (
            <Link to={'/service/notice'}>없음</Link>
          )}
        </div>
        <div className="pagination next">
          <span>다음</span>
          {nextItem ? (
            <Link to={`/service/notice/${parseInt(params) + 1}`}>
              {nextItem.title}
            </Link>
          ) : (
            <Link to={'/service/notice'}>없음</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticeItem;
