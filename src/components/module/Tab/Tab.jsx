import { useState } from 'react';
import { Section, Faq, Notice, Qna } from 'components';
import { CaseItem } from 'pages';
import { useNavigate } from 'react-router-dom';

const Tab = ({ children, start = 1 }) => {
  const navigate = useNavigate();
  const tabMenuData = [
    {
      idx: 0,
      title: '자주 묻는 질문',
      content: <Faq />,
      navigate: '/service/faq',
    },
    {
      idx: 1,
      title: '공지사항',
      content: <Notice />,
      navigate: '/service/notice',
    },
    { idx: 2, title: '문의하기', content: <Qna />, navigate: '/service/qna' },
  ];
  const [index, setIndex] = useState(start);
  const handleClickTabMenu = (menu) => {
    setIndex(menu.idx);
    navigate(`${menu.navigate}`);
  };

  return (
    <Section title={'고객지원'}>
      <div className="Tab">
        <header className="Tab-header">
          <ol className="menu-list">
            {tabMenuData.map((menu) => (
              <li
                key={menu.idx}
                className={`menu-item ${index === menu.idx ? 'is-active' : ''}`}
                onClick={() => handleClickTabMenu(menu)}
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
    </Section>
  );
};

export default Tab;
