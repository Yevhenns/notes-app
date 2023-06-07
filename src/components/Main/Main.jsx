import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import Context from "../../Context";
import SearchBox from "../SearchBox/SearchBox ";
import Sidebar from "../Sidebar/Sidebar";
import Workspace from "../Workspace/Workspace";
import { Box } from "@mui/material";
import css from "./Main.module.scss";

const Main = () => {
  const value = useContext(Context);
  const { menu, notesAll } = value;

  const beforeTablet = useMediaQuery({ query: "(max-width: 479px)" });
  const tablet = useMediaQuery({ query: "(min-width: 480px)" });

  return (
    <main className={css.mainContainer}>
      {menu && beforeTablet && (
        <Box
          sx={{
            height: "100vh",
            padding: "20px",
            backgroundColor: "azure",
          }}
        >
          <Workspace />
        </Box>
      )}
      {!menu && beforeTablet && notesAll.length !== 0 && (
        <>
          <SearchBox />
          <Sidebar />
        </>
      )}
      {tablet && (
        <>
          <Sidebar />
          <Workspace />
        </>
      )}
    </main>
  );
};

export default Main;
