import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className={css.mainContainer}>
        <Sidebar />
        <Workspace />
      </div>
    </div>
  );
};

export default App;
