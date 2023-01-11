import React from 'react';

const NoticeList = () => {
  const noticeData = {
    header: ['번호', '제목', '작성일'],
    data: [
      {
        no: '1',
        title: 'iure sunt soluta labore debitis dignissimos explicabo!',
        date: '2023-01-06',
      },
      {
        no: '2',
        title:
          'Laboriosam quam, et voluptate possimus enim quis repellat quia, magnam deleniti iste eum, minima eaque veritatis?',
        date: '2023-01-06',
      },
      {
        no: '3',
        title:
          'Facilis magni suscipit nobis quam exercitationem mollitia hic cum ratione labore non nemo, commodi atque alias est accusamus explicabo placeat totam?',
        date: '2023-01-06',
      },
      {
        no: '4',
        title:
          'Reiciendis minima voluptate saepe rerum hic eveniet blanditiis dignissimos, earum magnam illum vero molestiae!',
        date: '2023-01-06',
      },
      {
        no: '5',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: '2023-01-06',
      },
      {
        no: '6',
        title: '추가 비용 발생 시 결제는 어떻게 해야 되나요?',
        date: '2023-01-06',
      },
    ],
  };

  return (
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
              <td className="noticeTitle">{item.title}</td>
              <td>{item.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default NoticeList;
