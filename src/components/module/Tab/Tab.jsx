import { useState } from 'react';
import { Faq, Notice } from 'components';
import { CaseItem } from 'pages';
import Qna from 'components/service/Qna/Qna';

const Tab = ({ children }) => {
  const tabMenuData = [
    { idx: 0, title: '자주 묻는 질문', content: <Faq /> },
    { idx: 1, title: '공지사항', content: <Notice /> },
    { idx: 2, title: '문의하기', content: <Qna /> },
  ];
  const [index, setIndex] = useState(0);
  // const handleClickTabMenu = (id) => {
  //   console.log('tab menu', id, 'clicked');
  // };

  return (
    <div className="Tab">
      <h1 className="Tab-title">고객 지원</h1>
      <div className="Tab-wrapper">
        <header className="Tab-header">
          <ol className="menu-list">
            {tabMenuData.map((menu) => (
              <li
                key={menu.idx}
                className={`menu-item ${index === menu.idx ? 'is-active' : ''}`}
                onClick={() => setIndex(menu.idx)}
              >
                <button>{menu.title}</button>
              </li>
            ))}
          </ol>
        </header>
        <section className="Tab-content">
          {tabMenuData
            .filter((menu) => menu.idx === index)
            .map((menu) => menu.content)}
        </section>
      </div>
    </div>
  );
};

export default Tab;
