import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import MovieCard from "./Components/MovieCard/MovieCard";
import DisplayRow from "./Components/DisplayRaw/DisplayRaw";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <DisplayRow />
    </>
  );
}

export default App;
