import "./App.scss";
import { Outlet, BrowserRouter, Routes, Route } from "react-router";
import { Container } from "react-bootstrap";
import OddColor from "./OddColor/OddColor";

const Root = () => {
  return (
    <Container>
      <h1> ROOT </h1>
      <Outlet />
    </Container>
  );
};

const Home = () => {
  return <h1>HOME</h1>;
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
          <Route path="/oddcolor" element={<OddColor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
