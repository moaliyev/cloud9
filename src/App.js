// REACT-ROUTER
import { Route, Routes } from "react-router-dom";

// SCSS
import "./assets/scss/index.scss";

// COMPONENTS
import Header from "./components/Header";

// PAGES
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
