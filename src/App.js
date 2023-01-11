// import './App.css';
import React, { createContext } from 'react';
import { Container } from 'components';
import { Case, CaseItem, Company, Product, Service, Tech, Root } from 'pages';
import { case_01, case_02, case_03, case_04, case_05, case_06 } from 'images';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/main.scss';

export const CaseDataContext = React.createContext();
const caseData = [
  {
    id: 1,
    title: '서울시 1호\n코로나 백신 접종 센터',
    description:
      '에어퀀트의 높은 기술적 완성도와 적용성을 인정받아 코로나 백신 접종 센터 내 실내 공기질을 모니터링 하고 있다. 접종 센터 방문객은 실내 공기질 현황을 직접 확인할 수 있다.',
    image: case_01,
  },
  {
    id: 2,
    title: '코엑스 별마당 도서관, \n아쿠아리움',
    description:
      '아쿠아리움 내 실내 공기질 관리를 위해 에어퀀트 설치했을 뿐만 아니라 아쿠아리움 입구의 전광판을 통해 실시간 공기질 모니터링 현황을 제공하고 있다.',
    image: case_02,
  },
  {
    id: 3,
    title: '서울 무학초등학교',
    description:
      '학생들을 위한 실내 공기질 개선 프로젝트.학교 내 실내 공기질 관리 규정이 세분화됨에 따라 교사와 강당을 구분하여 모니터링하고 있다.',
    image: case_03,
  },
  {
    id: 4,
    title: '한국과학기술원(KIST) & 한국수자원공사(K-water)',
    description:
      '에어퀀트를 설치하여 실내 공기질을 모니터링하여 민감한 연구장비의 작동환경을 유지하고, 시설 내 연구원의 건강과 생산성을 향상하는 데 기여하고 있다.',
    image: case_04,
  },
  {
    id: 5,
    title: '부산 서면역',
    description:
      '지하역사 내 실내 공기질 규제가 강화되면서 에어퀀트로 미세먼지와 초미세먼지를 모니터링하고 시민들이 직접 실시간 실내 공기질 현황을 확인할 수 있다.',
    image: case_05,
  },
  {
    id: 6,
    title: '창원 스마트시티',
    description:
      '실외 공기청정기에 에어퀀트를 연동하여 대기질 유지 기준에 따라 피드백 제어하여 대기 공기질을 자동으로 개선하고 있다.',
    image: case_06,
  },
];

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <div>Page Not Found</div>,
      children: [
        { index: true, element: <Product /> },
        { path: '/tech', element: <Tech /> },
        { path: '/company', element: <Container content={<Company />} /> },
        { path: '/case', element: <Container content={<Case />} /> },
        {
          path: '/case/:caseId',
          element: <Container content={<CaseItem />} />,
        },
        { path: '/service', element: <Container content={<Service />} /> },
      ],
    },
  ]);

  return (
    <CaseDataContext.Provider value={caseData}>
      <RouterProvider router={router} />
    </CaseDataContext.Provider>
  );
}

export default App;
