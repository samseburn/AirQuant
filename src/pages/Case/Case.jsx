import React, { useContext } from 'react';
import styled from 'styled-components';
import { Card } from 'components';
import { CaseDataContext } from 'App';

const Case = () => {
  const caseData = useContext(CaseDataContext);
  return (
    <section className="case">
      <h1 className="case-title">적용 사례</h1>
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
    </section>
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
