import "./css/App.css";
import { useState } from "react";
import TicTacToePage from "./pages/TicTacToePage";
import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TablicaPage from "./pages/TablicaPage";

const App = () => {
  const [data, setData] = useState([]);
  console.log("iz app", data);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <TicTacToePage
                  saveDataFunction={(newData) => setData([...data, newData])}
                />
              }
            />
            <Route
              path="/results"
              element={<TablicaPage dataSource={data} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
