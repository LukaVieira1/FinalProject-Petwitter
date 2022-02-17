import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    cyan: {
      400: "#00ACC1",
    },
    gray: {
      600: "#757575",
      800: "#424242",
    },
  },
  components: {
    FormLabel: {
      color: "gray.800",
    },
    Input: {
      baseStyle: {
        field: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "gray.800",
          borderRadius: "4px",
          ":focus": {
            borderColor: "cyan.400",
            borderWidth: "2px",
          },
        },
      },
      defaultProps: {
        variant: null, // null here
      },
    },
    Button: {
      variants: {
        solid: {
          backgroundColor: "cyan.400",
          color: "white",
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
