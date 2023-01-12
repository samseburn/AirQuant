import { children } from 'react';

const Section = ({ children, title }) => {
  return (
    <section className="Section">
      <h1 className="Section-title">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
