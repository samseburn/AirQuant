import { TechExplanation } from 'components';
import React from 'react';

const Tech = () => {
  const TechConList = [
    {
      id: 1,
      title: '실시간 실내 공기질 측정 정보 조회',
      leftChild: '설치 구역별 측정 이력 조회 ',
      leftChildImg:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MjdfMjYz%2FMDAxNjU2MzEyMzMzMDEy.zLRJF3YOwros2Y9XL-_LDZTSMMA6yWBrCyoKjt3aFqMg.57cwb__Z7JyK321t9Zmvv8dKFCemjfKxfabEAdnApQ0g.JPEG.minji2306%2Foutput_1963796824.jpg&type=ofullfill340_600_png',
      rightChild: '측정항목별 이상징후 이력 조회 ',
      rightChildImg:
        'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.theqoo.net%2Fimg%2FoBmgk.jpg&type=a340',
    },
    {
      id: 2,
      title: '일간/주간/월간 실내 공기질 분석 리포트 제공',
      leftChild: '주기별 실내 공기질 분석 리포트 ',
      leftChildImg:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MjdfMjYz%2FMDAxNjU2MzEyMzMzMDEy.zLRJF3YOwros2Y9XL-_LDZTSMMA6yWBrCyoKjt3aFqMg.57cwb__Z7JyK321t9Zmvv8dKFCemjfKxfabEAdnApQ0g.JPEG.minji2306%2Foutput_1963796824.jpg&type=ofullfill340_600_png',
      rightChild: '웹 페이지 내 실내 공기질 트렌드 확인',
      rightChildImg:
        'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.theqoo.net%2Fimg%2FoBmgk.jpg&type=a340',
    },
    {
      id: 3,
      title: '웹/모바일 어플리케이션을 통한 모니터링',
      leftChild: '모바일 어플리케이션',
      leftChildImg:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MjdfMjYz%2FMDAxNjU2MzEyMzMzMDEy.zLRJF3YOwros2Y9XL-_LDZTSMMA6yWBrCyoKjt3aFqMg.57cwb__Z7JyK321t9Zmvv8dKFCemjfKxfabEAdnApQ0g.JPEG.minji2306%2Foutput_1963796824.jpg&type=ofullfill340_600_png',
      rightChild: '설치구역별, 측정항목별\n모니터링 가능',
      rightChildImg:
        'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.theqoo.net%2Fimg%2FoBmgk.jpg&type=a340',
    },
    {
      id: 4,
      title: '각종 디지털 디스플레이와 연동',
      leftChild: '코엑스 아쿠아리움 내\n디스플레이 연동 사례',
      leftChildImg:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MjdfMjYz%2FMDAxNjU2MzEyMzMzMDEy.zLRJF3YOwros2Y9XL-_LDZTSMMA6yWBrCyoKjt3aFqMg.57cwb__Z7JyK321t9Zmvv8dKFCemjfKxfabEAdnApQ0g.JPEG.minji2306%2Foutput_1963796824.jpg&type=ofullfill340_600_png',
      rightChild: '모니터링 디스플레이',
      rightChildImg:
        'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.theqoo.net%2Fimg%2FoBmgk.jpg&type=a340',
    },
  ];
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* {TechConList.map((tech) => (
        <TechConvenience
          key={tech.id}
          title={tech.title}
          leftChild={tech.leftChild}
          leftChildImg={tech.leftChildImg}
          rightChild={tech.rightChild}
          rightChildImg={tech.rightChildImg}
        />
      ))} */}
    </div>
  );
};

export default Tech;
