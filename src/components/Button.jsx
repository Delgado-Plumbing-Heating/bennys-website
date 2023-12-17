export default function Button(props) {
  const { children, style } = props;
  return (
    <button
      style={
        style
          ? style
          : {
              background: "#1E428A",
              color: "white",
              padding: "10px",
              marginTop: "40px",
              borderRadius: "1000px",
              fontSize: "22px",
            }
      }
    >
      {children}
    </button>
  );
}
