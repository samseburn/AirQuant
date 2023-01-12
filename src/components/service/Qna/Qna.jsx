import React, { useRef, useState } from 'react';
import { db } from '../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Button } from 'components/module/Button';

const Qna = () => {
  const infoCollection = collection(db, 'information');

  async function addInfo(data) {
    await addDoc(infoCollection, {
      email: data.email,
      name: data.name,
      title: data.title,
      help: data.help,
      ask: data.ask,
    });
  }
  const [data, setData] = useState({
    email: '',
    name: '',
    title: '',
    help: '',
    ask: '',
  });

  const emailRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const helpRef = useRef();
  const askRef = useRef();

  const [error, setError] = useState({
    email: false,
    name: false,
    title: false,
    help: false,
    ask: false,
  });

  const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);

    if (data.email.length < 1) {
      setError({ ...error, email: true });
      emailRef.current.focus();
      return error.email;
    } else if (!emailRegex.test(data.email)) {
      setError({ ...error, email: true });
      emailRef.current.focus();
      return error.email;
    }

    if (data.name.length < 1) {
      nameRef.current.focus();
      setError({ ...error, name: true });
      return error.name;
    }

    if (data.title.length < 1) {
      titleRef.current.focus();
      setError({ ...error, title: true });
      return error.title;
    }

    if (data.help.length < 1) {
      helpRef.current.focus();
      setError({ ...error, help: true });
      return error.help;
    }

    if (data.ask.length < 1) {
      askRef.current.focus();
      setError({ ...error, ask: true });
      return error.ask;
    }

    addInfo(data);

    setData({
      email: '',
      name: '',
      title: '',
      help: '',
      ask: '',
    });
    setError({
      email: false,
      name: false,
      title: false,
      help: false,
      ask: false,
    });
  };

  return (
    <div className="qna">
      <form onSubmit={submitHandler} className="qna-submit">
        <div className="input-group">
          <label>이메일</label>
          <input
            ref={emailRef}
            type="text"
            name="email"
            placeholder="이메일 주소를 입력하세요"
            onChange={changeHandler}
            value={data.email}
          />
          {error.email ? (
            data.email.length < 1 ? (
              <small>이메일 주소를 입력하세요</small>
            ) : !emailRegex.test(data.email) ? (
              <small>이메일 주소를 바르게 입력하세요</small>
            ) : (
              <div className="none"></div>
            )
          ) : (
            <div className="none"></div>
          )}
        </div>
        <div className="input-group">
          <label>이름</label>
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="이름을 입력하세요"
            onChange={changeHandler}
            value={data.name}
          />
          {error.name ? (
            data.name.length < 1 ? (
              <small>이름을 입력해주세요</small>
            ) : (
              <div className="none"></div>
            )
          ) : (
            <div className="none"></div>
          )}
        </div>
        <div className="input-group">
          <label>제목</label>
          <input
            ref={titleRef}
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            onChange={changeHandler}
            value={data.title}
          />
          {error.title ? (
            data.title.length < 1 ? (
              <small>제목을 입력해주세요</small>
            ) : (
              <div className="none"></div>
            )
          ) : (
            <div className="none"></div>
          )}
        </div>
        <div className="input-group">
          <label>도움이 필요한 부분을 선택하세요</label>
          <select
            name="help"
            ref={helpRef}
            onChange={changeHandler}
            value={data.help}
          >
            <option value="0">- 선택하세요 -</option>
            <option value="Price">1. 가격은 얼마인가요</option>
            <option value="Repair">2. 수리가 필요해요</option>
            <option value="Warranty">3. 보증기간이 궁금해요</option>
          </select>
          {error.help ? (
            data.help.length < 1 ? (
              <small>선택하세요</small>
            ) : (
              <div className="none"></div>
            )
          ) : (
            <div className="none"></div>
          )}
        </div>
        <div className="input-group">
          <label>설명</label>
          <textarea
            ref={askRef}
            name="ask"
            placeholder="설명을 입력하세요"
            onChange={changeHandler}
            value={data.ask}
          ></textarea>
          {error.ask ? (
            data.ask.length < 1 ? (
              <small>이름을 입력해주세요</small>
            ) : (
              <div className="none"></div>
            )
          ) : (
            ''
          )}
        </div>
        <Button text="문의하기" />
      </form>
    </div>
  );
};

export default Qna;
