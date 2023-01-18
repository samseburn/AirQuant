import { useScroll } from '../../hooks/useScroll';
import classNames from 'classnames';

const ScrollSection = ({ name, children }) => {
  const { isShow } = useScroll(`.${name}`);
  return (
    <section className={classNames(name, isShow ? 'active' : '')}>
      {children}
    </section>
  );
};

export default ScrollSection;
