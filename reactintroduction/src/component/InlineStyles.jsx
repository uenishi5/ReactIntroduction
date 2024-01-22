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

  return (
    <>
      <div style={styleA}>
        <p>- Inline Styles -</p>
        <button>FIGHT!</button>
      </div>
    </>
  );
};
