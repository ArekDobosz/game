import React from "react";
import { Box, CssBaseline } from "@material-ui/core";
import Board from "./components/Board/Board";

const App: React.FC = () => {
  return (
    <Box>
      <CssBaseline />
      <Board />
    </Box>
  );
};

export default App;
