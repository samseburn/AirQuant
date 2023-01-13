const Button = ({ url, text }) => {
  // props[functionName(sendData,openWindow),url,text] 받고

  const sendData = () => {
    console.log(`== send data to firebase ==`);
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
