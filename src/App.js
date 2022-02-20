import { useEffect, useState } from "react";
import axios from "axios";

import { Header, List } from "./components";

import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const getNfts = async () => {
    const api = "https://testnets-api.opensea.io/assets";
    const collectionId = "0x5Ec8c08c68a15d5fd595E6Ec9E1b90fE953fc1b4";
    const url = `${api}?asset_contract_address=${collectionId}`;

    try {
      return await axios.get(url);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getNfts().then(({ data }) => setList(data.assets));
  }, []);

  return (
    <div className="app">
      <Header />

      <List list={list} />
    </div>
  );
}

export default App;
