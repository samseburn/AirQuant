import { noticeData } from 'components/service/NoticeList/NoticeList';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="NoticeItem">
      <Link className="back" to={'/service/notice'}>
        목록으로
      </Link>
      <section className="NoticeItem-contents">
        <header className="title">
          <h1>{caseItem.title}</h1>
          <span className="date">{caseItem.date}</span>
        </header>
        <p className="NoticeItem-desc">{caseItem.description}</p>
      </section>
      <div className="NoticeItem-pagination">
        <div className="pagination prev">
          {prevItem ? (
            <>
              <span>이전</span>
              <Link to={`/service/notice/${parseInt(params) - 1}`}>
                {prevItem.title}
              </Link>
            </>
          ) : (
            <>
              <span className="disabled">이전</span>
              <Link to={'/service/notice'} className={'disabled'}>
                이전 글이 존재하지 않습니다
              </Link>
            </>
          )}
        </div>
        <div className="pagination next">
          {nextItem ? (
            <>
              <span>다음</span>
              <Link to={`/service/notice/${parseInt(params) + 1}`}>
                {nextItem.title}
              </Link>
            </>
          ) : (
            <>
              <span className="disabled">다음</span>
              <Link to={'/service/notice'}>다음 글이 존재하지 않습니다</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticeItem;
