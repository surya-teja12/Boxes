const Box = (props) => {
  const { className, message } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-text">{message}</p>
    </div>
  );
};

const element = (
  <div className="main-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box" message="Small" />
      <Box className="medium-box" message="Medium" />
      <Box className="large-box" message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
