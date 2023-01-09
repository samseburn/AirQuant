import { TechConvenience, TechCustomers, TechExplanation, TechMain, TechMeasurement, TechMeasurementTable, TechPatent } from 'components';
import React from 'react';

// 편의기능 맵 이미지 경로
import {
  convenience_01,
  convenience_02,
  convenience_03,
  convenience_04,
  convenience_05,
  convenience_06,
  convenience_07,
  convenience_08,
  convenience_09,
} from 'images';

const Tech = () => {
  const TechConList = [
    {
      id: 1,
      title: '실시간 실내 공기질 측정 정보 조회',
      leftChild: '설치 구역별 측정 이력 조회 ',
      leftChildImg: convenience_01,
      rightChild: '측정항목별 이상징후 이력 조회 ',
      rightChildImg: convenience_02,
    },
    {
      id: 2,
      title: '일간/주간/월간 실내 공기질 분석 리포트 제공',
      leftChild: '주기별 실내 공기질 분석 리포트 ',
      leftChildImg: convenience_03,
      rightChild: '웹 페이지 내 실내 공기질 트렌드 확인',
      rightChildImg: convenience_04,
    },
    {
      id: 3,
      title: '웹/모바일 어플리케이션을 통한 모니터링',
      leftChild: '모바일 어플리케이션',
      leftChildImg: convenience_05,
      rightChild: '설치구역별, 측정항목별\n모니터링 가능',
      rightChildImg: convenience_06,
    },
    {
      id: 4,
      title: '각종 디지털 디스플레이와 연동',
      leftChild: '코엑스 아쿠아리움 내\n디스플레이 연동 사례',
      leftChildImg: convenience_07,
      rightChild: '모니터링 디스플레이',
      rightChildImg: convenience_08,
    },
  ];
  return (
    <div>
      <TechMain/>
      <TechMeasurementTable/>
      <TechExplanation/>
      
      {TechConList.map((tech) => (
        <TechConvenience
          key={tech.id}
          title={tech.title}
          leftChild={tech.leftChild}
          leftChildImg={tech.leftChildImg}
          rightChild={tech.rightChild}
          rightChildImg={tech.rightChildImg}
        />
      ))}

      <TechCustomers/>
      <TechPatent/>

    </div>
  );
};

export default Tech;
