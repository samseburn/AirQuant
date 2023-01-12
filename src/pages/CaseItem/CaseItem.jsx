import React, { useContext } from 'react';
import { Section, TableItem } from 'components';
import { CaseDataContext } from 'App';
import { useParams } from 'react-router-dom';

const CaseItem = () => {
  const caseData = useContext(CaseDataContext);
  const { caseId } = useParams();
  return (
    <Section title={'적용사례'}>
      <TableItem data={caseData} params={caseId} />
    </Section>
  );
};

export default CaseItem;
