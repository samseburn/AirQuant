import { useNavigate } from 'react-router-dom';

export const noticeData = Object.freeze({
  header: ['번호', '제목', '작성일'],
  data: [
    {
      id: 1,
      title: '홍보관 예약시 주의사항',
      description: `
      * 홍보관 예약&관람시 주의 사항 전달 드립니다.
        1. 홍보관 예약 후 불참사유 발생시  "예약취소"를 통해  취소해주시기 바랍니다
        2. 홍보관은 30명을 기준으로 운영하고 있으나  30명이상 관람을 희망하실경우  담당자에게 사전요청 하시면 추가인원도 관람 가능합니다
        3. 예약은 1일 3회를 원칙으로 진행하고 있으며 오전10시,오후2시,오후4시 이외 시간을 원하시면 별도로 담당자에게 문의해 주시기 바랍니다
        자세한 사항은  담당자 (064-729-9913) 으로  연락주시기 바랍니다`,
      date: '2023-01-26',
      image: '',
    },
    {
      id: 2,
      title: '파이퀀트 펌웨어 개발자 모집',
      description: `
      분광학기반 성분 분석 솔루션 개발
      파이퀀트는 빛을 이용하여 성분 분석 솔루션을 개발하는 회사입니다.
      휴대용 분광기를 개발하여 언제 어디서든 누구나 원하는 성분을 분석할 수 있도록 도와줍니다.
      파이퀀트는 세계 최고 수준의 휴대용 분광기 기술력을 인정받아 한국 최초로 빌게이츠가 설립한 Bill%26Melinda Gates Foundation의 GCE파트너로 선정되었습니다.
      LOREAL를 포함하여 다양한 글로벌 뷰티 회사들과 협업하고 있으며, UNICEF, ARM, WFP, K-WATER, NAMAMI GANGE, LG상사, SK INFOSEC, 더본코리아 등 파트너들과 함께합니다.`,
      date: '2023-01-16',
      image: '',
    },
    {
      id: 3,
      title: 'record MWC 2022 리뷰',
      description: `
      27 February – 2 March 2022
        바르셀로나 / 스페인`,
      date: '2023-01-08',
      image: '',
    },
    {
      id: 4,
      title: '에어퀀트, 2022 디자인 어워드 8관왕 달성',
      description: `
      - 에어퀀트, ‘굿디자인 · 핀업 디자인 어워드’ 최고상 등 수상
        - 우수디자인 (GD) 상품 선정에서 4개 제품 우수 디자인 선정
        - 스마트 탑볼 세면기 CL-1600 핀업 디자인 최고상인 베스트 오브 베스트 수상
        - 에어퀀트, 우수한 제품으로 업계 선도해 나갈 것`,
      date: '2023-01-03',
      image: '',
    },
    {
      id: 5,
      title: '에어퀀트 공식 홈페이지 리뉴얼 오픈',
      description: `
        에어퀀트의 높은 기술적 완성도와 적용성을 인정받아 코로나 백신 접종 센터 내 실내 공기질을 모니터링 하고 있다.
        접종 센터 방문객은 실내 공기질 현황을 직접 확인할 수 있다.`,
      date: '2023-01-02',
      image: '',
    },
    {
      id: 6,
      title: '이용약관, 개인정보 처리방침 변경 안내',
      description: `
      개인정보 처리방침
        [변경전]
        1) 수집하는 개인정보의 항목
        가) 필수항목성명, 휴대폰번호, 단말기 정보
        나) 서비스 이용 또는 사업처리 과정에서 생성/ 수집되는 정보서비스 이용기록(이용시간 또는 서비스 구매내역), 홈페이지/ 모바일 어플리케이션 접속일시, 디바이스 종류, OS종류 및 버전, PUSH용 토큰

        [변경후]
        1) 수집하는 개인정보의 항목
        가) 필수항목성명, 휴대폰번호, 단말기 정보
        나) 서비스 이용 또는 사업처리 과정에서 생성/ 수집되는 정보서비스 이용기록(이용시간 또는 서비스 구매내역), 홈페이지/ 모바일 어플리케이션 접속일시/로그, 쿠키, 접속 IP정보, 디바이스 종류, OS종류 및 버전, PUSH용 토큰`,
      date: '2023-01-01',
      image: '',
    },
    {
      id: 7,
      title: '이달의 프리미엄 사은품 이벤트',
      description: `
      * 홍보관 예약&관람시 주의 사항 전달 드립니다.
        1. 홍보관 예약 후 불참사유 발생시  "예약취소"를 통해  취소해주시기 바랍니다
        2. 홍보관은 30명을 기준으로 운영하고 있으나  30명이상 관람을 희망하실경우  담당자에게 사전요청 하시면 추가인원도 관람 가능합니다
        3. 예약은 1일 3회를 원칙으로 진행하고 있으며 오전10시,오후2시,오후4시 이외 시간을 원하시면 별도로 담당자에게 문의해 주시기 바랍니다
        자세한 사항은  담당자 (064-729-9913) 으로  연락주시기 바랍니다`,
      date: '2023-01-26',
      image: '',
    },
    {
      id: 8,
      title: `태풍 '솔릭'으로 인한 임시휴업 안내`,
      description: `
      분광학기반 성분 분석 솔루션 개발
      파이퀀트는 빛을 이용하여 성분 분석 솔루션을 개발하는 회사입니다.
      휴대용 분광기를 개발하여 언제 어디서든 누구나 원하는 성분을 분석할 수 있도록 도와줍니다.
      파이퀀트는 세계 최고 수준의 휴대용 분광기 기술력을 인정받아 한국 최초로 빌게이츠가 설립한 Bill%26Melinda Gates Foundation의 GCE파트너로 선정되었습니다.
      LOREAL를 포함하여 다양한 글로벌 뷰티 회사들과 협업하고 있으며, UNICEF, ARM, WFP, K-WATER, NAMAMI GANGE, LG상사, SK INFOSEC, 더본코리아 등 파트너들과 함께합니다.`,
      date: '2023-01-16',
      image: '',
    },
    {
      id: 9,
      title: '파이퀀트 프론트엔드 개발자 모집',
      description: `
      27 February – 2 March 2022
        바르셀로나 / 스페인`,
      date: '2023-01-08',
      image: '',
    },
    {
      id: 10,
      title: '홈페이지 개편에 따른 로그인 비밀번호 안내',
      description: `
      - 에어퀀트, ‘굿디자인 · 핀업 디자인 어워드’ 최고상 등 수상
        - 우수디자인 (GD) 상품 선정에서 4개 제품 우수 디자인 선정
        - 스마트 탑볼 세면기 CL-1600 핀업 디자인 최고상인 베스트 오브 베스트 수상
        - 에어퀀트, 우수한 제품으로 업계 선도해 나갈 것`,
      date: '2023-01-03',
      image: '',
    },
    {
      id: 11,
      title: '에어퀀트 공식 홈페이지 리뉴얼 오픈',
      description: `
      에어퀀트의 높은 기술적 완성도와 적용성을 인정받아 코로나 백신 접종 센터 내 실내 공기질을 모니터링 하고 있다. 접종 센터 방문객은 실내 공기질 현황을 직접 확인할 수 있다.`,
      date: '2023-01-02',
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
