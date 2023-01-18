const Button = ({ url, text, data }) => {
  // props[functionName(sendData,openWindow),url,text] 받고

  const sendData = () => {
    return alert(
      `이메일: ${data.email} 
   이름: ${data.name} 
   제목: ${data.title} 
   도움: ${data.help} 
   문의: ${data.ask}`
    );
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
