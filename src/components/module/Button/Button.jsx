const Button = ({ url, text }) => {
  // props[functionName(sendData,openWindow),url,text] 받고

  const sendData = () => {
    alert('정보를 전송했습니다.');
  };
  const openWindow = () => {
    return window.open(`${url}`, '_blank');
  };

  return (
    <button
      className="Button"
      onClick={text === '문의하기' ? sendData : openWindow}
    >
      {text}
    </button>
  );
};

export default Button;
