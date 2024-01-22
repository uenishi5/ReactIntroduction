import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    // インポートしたクラス内の部品を使う
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
