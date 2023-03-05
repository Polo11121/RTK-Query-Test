import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { store } from "./api/store";
import { Header } from "./components/Header/Header";
import { navbarContent } from "./helpers/constants";
import { formatPath } from "./helpers/functions";
import { GamesList } from "./pages/GamesList/GamesList";
import "react-loading-skeleton/dist/skeleton.css";

const GlobalStyle = createGlobalStyle`
${reset}
body{
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
}
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;     
  background-color: #151515
}
`;

const router = createBrowserRouter([
  { path: "/", element: <GamesList /> },
  ...navbarContent
    .map(({ title, links }) =>
      links?.length
        ? links?.map(({ link }) => ({
            path: formatPath(link),
            element: <GamesList />,
          }))
        : {
            path: formatPath(title),
            element: <GamesList />,
          }
    )
    .flat()
    .filter((route) => route as { path: string; element: JSX.Element }),
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
