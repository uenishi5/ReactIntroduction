export const InlineStyles = () => {
  const styleA = {
    border: "2px solid #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const styleB = {
    margin: "0px",
    color: "#3d84a8",
  };

  const styleC = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px",
  };

  return (
    <>
      <div style={styleA}>
        <p style={styleB}>- Inline Styles -</p>
        <button style={styleC}>FIGHT!</button>
      </div>
    </>
  );
};
