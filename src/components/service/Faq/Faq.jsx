import React from 'react';
import { FaqBox } from 'components';

const faqData = [
  {
    idx: 1,
    question: `명의변경을 하려면 어떻게 해야하나요?`,
    answer: `고객센터(1588-6666)로 문의 주시기 바랍니다.`,
  },
  {
    idx: 2,
    question: `ACL-140MA의 모션센서 감지 시 2명 이상이 각각 다른 방향으로 이동 시 센서 반응은 어떻게 되나요?`,
    answer: `자가설치가 어려운 경우 설치 서비스 신청하실수 있습니다. 
      당사 서비스엔지니어가 방문하여 설치 및 점검 후 사용방법까지 설명해 드립니다.
      서비스 신청은 당사 홈페이지 및 고객상담실에서 신청하실 수 있습니다.​`,
  },
  {
    idx: 3,
    question: `렌탈료를 할인 받을 수 있는 제휴카드가 있나요?`,
    answer: `SK매직 우리카드, SK매직 하나카드, SK매직 스페셜 롯데카드 등이 있습니다.
      전월 실적 30만원 이상일 경우 청구 할인 됩니다.`,
  },
  {
    idx: 4,
    question: `추가 비용 발생 시 결제는 어떻게 해야 되나요?`,
    answer: `고객센터(1588-6666)로 문의 주시기 바랍니다.`,
  },
  {
    idx: 5,
    question: `전원이 안들어와요`,
    answer: `고객센터(1588-6666)로 문의 주시기 바랍니다.`,
  },
];

const Faq = () => {
  return (
    <div className="faq">
      {faqData.map((item) => (
        <FaqBox question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faq;
