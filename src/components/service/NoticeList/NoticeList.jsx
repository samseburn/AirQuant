import { useNavigate } from 'react-router-dom';

export const noticeData = Object.freeze({
  header: ['번호', '제목', '작성일'],
  data: [
    {
      id: 1,
      title: 'iure sunt soluta labore debitis dignissimos explicabo!',
      description:
        '에어퀀트의 높은 기술적 완성도와 적용성을 인정받아 코로나 백신 접종 센터 내 실내 공기질을 모니터링 하고 있다. 접종 센터 방문객은 실내 공기질 현황을 직접 확인할 수 있다.',
      date: '2023-01-06',
      image: '',
    },
    {
      id: 2,
      title:
        'Laboriosam quam, et voluptate possimus enim quis repellat quia, magnam deleniti iste eum, minima eaque veritatis?',
      date: '2023-01-06',
      image: '',
    },
    {
      id: 3,
      title:
        'Facilis magni suscipit nobis quam exercitationem mollitia hic cum ratione labore non nemo, commodi atque alias est accusamus explicabo placeat totam?',
      description:
        'Laboriosam quam, et voluptate possimus enim quis repellat quia, magnam deleniti iste eum, minima eaque veritatis?',
      date: '2023-01-06',
      image: '',
    },
    {
      id: 4,
      title:
        'Reiciendis minima voluptate saepe rerum hic eveniet blanditiis dignissimos, earum magnam illum vero molestiae!',
      description:
        '에어퀀트의 높은 기술적 완성도와 적용성을 인정받아 코로나 백신 접종 센터 내 실내 공기질을 모니터링 하고 있다. 접종 센터 방문객은 실내 공기질 현황을 직접 확인할 수 있다.',
      date: '2023-01-06',
      image: '',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description:
        '에어퀀트의 높은 기술적 완성도와 적용성을 인정받아 코로나 백신 접종 센터 내 실내 공기질을 모니터링 하고 있다. 접종 센터 방문객은 실내 공기질 현황을 직접 확인할 수 있다.',
      date: '2023-01-06',
      image: '',
    },
    {
      id: 6,
      title: '추가 비용 발생 시 결제는 어떻게 해야 되나요?',
      description:
        '에어퀀트의 높은 기술적 완성도와 적용성을 인정받아 코로나 백신 접종 센터 내 실내 공기질을 모니터링 하고 있다. 접종 센터 방문객은 실내 공기질 현황을 직접 확인할 수 있다.',
      date: '2023-01-06',
      image: '',
    },
  ],
});

const NoticeList = () => {
  const navigate = useNavigate();

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
            <tr
              className="noticeData"
              onClick={() => navigate(`/service/notice/${item.id}`)}
            >
              <td className="noticeNo">{item.id}</td>
              <td className="noticeTitle">
                <p className="noticeTitleP">{item.title}</p>
              </td>
              <td className="noticeDate">{item.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default NoticeList;
