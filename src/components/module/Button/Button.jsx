const Button = (props) => {
  return (
    <div
      className="Button"
      onClick={() => window.open(`${props.url}`, '_blank')}
    >
      {props.text}
    </div>
  );
};

export default Button;
