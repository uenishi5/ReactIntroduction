import { memo } from "react";

const styles = {
  width: "100%",
  height: "100%",
  backgroundColor: "green",
};

//propsに変更がない限り変更しない
export const ChildArea = memo((props) => {
  const { open, close } = props;
  return (
    <>
      {open ? (
        <div style={styles}>
          <p>子コンポーネント</p>
          <button onClick={close}>Close</button>
        </div>
      ) : null}
    </>
  );
});
