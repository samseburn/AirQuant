import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ total, limit, page, setPage }) => {
  //필요한 페이지의 개수(전체/한 페이지 게시물 수(10))
  const numPages = Math.ceil(total / limit);

  return (
    <div className="pagination">
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
            aria-current={page === i + 1 ? 'page' : null}
            className="numBtn"
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
