import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = () => {
  let data = [1, 2, 3];

  let [pageActive, setPageActive] = useState('');

  const toggle = (e) => {
    setPageActive(() => {
      console.log(e.target.value);
      // console.log(item);

      return e.target.value;
    });
  };

  return (
    <div className="pagination">
      <div className="icon">
        <FiChevronLeft />
      </div>
      <div className="page">
        {data.map((item, idx) => {
          return (
            <>
              <button
                value={idx}
                className={'num' + (idx == pageActive ? ' active' : '')}
                onClick={toggle}
              >
                {item}
              </button>
            </>
          );
        })}
      </div>
      <div className="icon">
        <FiChevronRight />
      </div>
    </div>
  );
};

export default Pagination;
