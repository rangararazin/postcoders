import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const areaData = await getAreaData();

      areas.concat(areaData);

      setAreas(areas);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  useEffect(() => {
    getAreaData().then((res) => {
      setAreas(res);
      setLoading(false);
    });
    load();
  }, []);

  return loading ? (
    <p>loading....</p>
  ) : (
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for BB10: ${areas.length}`}</h2>
    </div>
  );
}

export default App;
