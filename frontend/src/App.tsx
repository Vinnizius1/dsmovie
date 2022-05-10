import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from "pages/Listing";
import Form from "pages/Form";
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* O componente "Navbar" estará em todos as páginas, por isso está fora de "Routes"! */
/* O "Routes" que configura ROTA por ROTA */
/* A rota "/form" terá uma subrota para o id do filme, exemplo: '/form/1' */
