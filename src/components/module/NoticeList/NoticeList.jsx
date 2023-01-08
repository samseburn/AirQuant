import React from 'react';

const NoticeList = () => {
  const noticeData = {
    header: ['번호', '제목', '작성일'],
    data: [
      {
        no: '1',
        title: '추가 비용 발생 시 결제는 어떻게 해야 되나요?',
        date: '2023-01-06',
      },
      {
        no: '1',
        title: '추가 비용 발생 시 결제는 어떻게 해야 되나요?',
        date: '2023-01-06',
      },
      {
        no: '1',
        title: '추가 비용 발생 시 결제는 어떻게 해야 되나요?',
        date: '2023-01-06',
      },
      {
        no: '1',
        title: '추가 비용 발생 시 결제는 어떻게 해야 되나요?',
        date: '2023-01-06',
      },
      {
        no: '1',
        title: '추가 비용 발생 시 결제는 어떻게 해야 되나요?',
        date: '2023-01-06',
      },
      {
        no: '1',
        title: '추가 비용 발생 시 결제는 어떻게 해야 되나요?',
        date: '2023-01-06',
      },
    ],
  };

  return (
    <div>
      <table className="noticeList">
        <thead>
          <tr className="noticeHeader">
            {noticeData.header.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {noticeData.data.map((item) => {
            return (
              <tr className="noticeData">
                <td>{item.no}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeList;
