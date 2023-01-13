import React, { useContext } from 'react';
import { Card, Section } from 'components';
import { CaseDataContext } from 'App';

const Case = () => {
  const caseData = useContext(CaseDataContext);
  return (
    <Section title={'적용사례'}>
      <div className="case-wrapper">
        {caseData.map((item) => (
          <Card
            title={item.title}
            description={item.description}
            id={item.id}
            image={item.image}
          />
        ))}
      </div>
    </Section>
  );
};

export default Case;
