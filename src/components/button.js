const Button = ({ text, status, func }) => {
    const style = {
        padding: "15px",
        backgroundColor: status ? "green" : "red",
        color: "white",
        borderRadius: "10px",
         
    }
    return (
    <button style={style} onClick={func}>
      {text}
    </button>
  );
};
export default Button;
