import React, { useContext } from 'react';
import styled from 'styled-components';
import { Card, Section } from 'components';
import { CaseDataContext } from 'App';

const Case = () => {
  const caseData = useContext(CaseDataContext);
  return (
    <Section title={'적용사례'}>
      <CaseWrapper>
        {caseData.map((item) => (
          <Card
            title={item.title}
            description={item.description}
            id={item.id}
            image={item.image}
          />
        ))}
      </CaseWrapper>
    </Section>
  );
};

const CaseWrapper = styled.div`
  width: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export default Case;
