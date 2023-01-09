import { useEffect } from 'react';

const Button = (props) => {
  // props[functionName(sendData,openWindow),url,text] 받고
  const sendData = () => {
    console.log(`== send data to firebase ==`);
  };
  const openWindow = () => {
    return window.open(`${props.url}`, '_blank');
  };

  useEffect(() => {
    sendData();
    console.log(`안녕`);
    openWindow();
  }, [sendData, openWindow]);

  return (
    <div className="Button" onClick={openWindow}>
      {props.text}
    </div>
  );
};

export default Button;
