import "./App.scss";
import { Outlet, BrowserRouter, Routes, Route } from "react-router";
import { Container } from "react-bootstrap";
import OddColor from "./OddColor/OddColor";
import TopBar from "./TopBar";
import Home from "./Home";

const Root = () => {
  return (
    <Container>
      <TopBar />
      <Outlet />
    </Container>
  );
};

const Page = () => {
  return <h1> Page </h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/page" element={<Page />} />
          <Route path="/oddcolor">
            <Route index element={<OddColor />} />
            <Route path="/oddcolor/daily" element={<OddColor daily />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
