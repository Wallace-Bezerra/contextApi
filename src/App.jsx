import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Contatos } from "./Pages/Contatos";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Sobre } from "./Pages/Sobre";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
