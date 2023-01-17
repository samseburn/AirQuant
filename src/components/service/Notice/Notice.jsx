import React, { useEffect } from 'react';
import { NoticeItem, NoticeList, TableItem } from 'components';
import { noticeData } from 'components/service/NoticeList/NoticeList';
import { useParams } from 'react-router-dom';

const Notice = () => {
  const { noticeId } = useParams();
  console.log(noticeId);

  console.log(noticeData.data);
  return (
    <div>
      {noticeId ? (
        // console.log(noticeData.data)
        // <NoticeItem data={noticeData.data} params={noticeId} />
        <TableItem
          data={noticeData.data}
          params={noticeId}
          category={'NOTICE'}
          page={'/service/notice'}
        />
      ) : (
        <NoticeList />
      )}
    </div>
  );
};

export default Notice;
