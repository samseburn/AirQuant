import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ total, limit, page, setPage }) => {
  //필요한 페이지의 개수(전체/한 페이지 게시물 수(8))
  const numPages = Math.ceil(total / limit);

  // let data = [1, 2, 3];

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
      {/* <div className="icon">
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
      </div> */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="icon"
      >
        <FiChevronLeft />
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            value={i}
            onClick={() => setPage(i + 1)}
            //   setPageActive(() => {
            //     // console.log(item);
            //     return e.target.value;
            //   });
            // }}
            // onClick={toggle}
            aria-current={page === i + 1 ? 'page' : null}
            // className={'num' + (i == pageActive ? ' active' : '')}
          >
            {i + 1}
          </button>
        ))}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
        className="icon"
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
