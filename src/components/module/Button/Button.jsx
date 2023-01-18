const Button = ({ url, text, data }) => {
  // props[functionName(sendData,openWindow),url,text] 받고

  const sendData = () => {
    console.log('==firebase to send data==');
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
