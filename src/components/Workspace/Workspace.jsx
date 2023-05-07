import css from "./Workspace.module.css";

const Workspace = () => {
  return (
    <div className={css.wrapper}>
      <p>date</p>
      <textarea className={css.textarea}></textarea>
    </div>
  );
};

export default Workspace;
