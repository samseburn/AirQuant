import React from 'react';
import { FaqBox } from 'components';

const faqData = [
  {
    idx: 1,
    question: `명의변경을 하려면 어떻게 해야하나요?`,
    answer: `
    고객센터(1588-6666)로 문의 주시기 바랍니다.`,
  },
  {
    idx: 2,
    question: `ACL-140MA의 모션센서 감지 시 2명 이상이 각각 다른 방향으로 이동 시 센서 반응은 어떻게 되나요?`,
    answer: `
    자가설치가 어려운 경우 설치 서비스 신청하실수 있습니다.
      당사 서비스엔지니어가 방문하여 설치 및 점검 후 사용방법까지 설명해 드립니다.
      서비스 신청은 당사 홈페이지 및 고객상담실에서 신청하실 수 있습니다.​`,
  },
  {
    idx: 3,
    question: `렌탈료를 할인 받을 수 있는 제휴카드가 있나요?`,
    answer: `
    SK매직 우리카드, SK매직 하나카드, SK매직 스페셜 롯데카드 등이 있습니다.
      전월 실적 30만원 이상일 경우 청구 할인 됩니다.`,
  },
  {
    idx: 4,
    question: `가격이 어떻게 되나요?`,
    answer: `
    가격에 대한 자세한 안내는 고객센터(1588-6666)로 문의 주시기 바랍니다.
    <가격 안내>
    - 가입비 50만원 (무료체험 진행 기간 내 정식가입 시 50% 할인 = 25만원)
    - 월 기본 사용료 198,000원`,
  },
  {
    idx: 5,
    question: `세금계산서 발행이 가능한가요?`,
    answer: `
    네, 가능합니다.
    정식가입 신청 시 사업자번호 기입란에 번호를 기재해주시면 세금계산서를 발행해드리고 있습니다.
    전자세금계산서 메일주소는 계약서에 기입하신 메일주소이며, 다른 메일주소로 발송을 원하실 시에는 고객센터로 말씀해주시면 진행이 가능합니다.`,
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
