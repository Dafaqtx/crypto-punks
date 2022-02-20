import { useEffect, useState } from "react";
import axios from "axios";

import { Header, Main, List } from "./components";

import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [activePunk, setActivePunk] = useState(list[0] || {});

  const getNfts = async () => {
    const api = "https://testnets-api.opensea.io/assets";
    const collectionId = "0x5Ec8c08c68a15d5fd595E6Ec9E1b90fE953fc1b4";
    const url = `${api}?asset_contract_address=${collectionId}&order_direction=asc`;

    try {
      return await axios.get(url);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getNfts().then(({ data }) => {
      const punks = data.assets;
      setList(punks);
      setActivePunk(punks[0]);
    });
  }, []);

  const handlePunkClick = (id) => {
    const punk = list.find((punk) => punk.token_id === id);
    setActivePunk(punk);
  };

  const hasActivePunk = !!Object.keys(activePunk).length;

  return (
    <div className="app">
      <Header />
      {hasActivePunk && <Main punk={activePunk} />}
      <List list={list} onClick={handlePunkClick} />
    </div>
  );
}

export default App;
