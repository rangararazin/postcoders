import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import { Card, CardContent, Grid } from "@mui/material";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getAreaData(searchInput)
      .then((res) => {
        setAreas(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(searchInput);

  return loading ? (
    <p>loading....</p>
  ) : (
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for BB10: ${areas.length}`}</h2>
      <label>Enter postcode outcode </label>
      <input
        type="text"
        placeholder=" eg. LE2,M1,BB8, . ."
        onChange={(e) => {
          e.preventDefault();
          setSearchInput(e.target.value);
        }}
        value={searchInput}
      />
      {areas.map((area) => {
        return (
          <>
            <Grid container key={area.longitude}>
              <Grid item className="card-content">
                <Card>
                  <CardContent>
                    <p>
                      Place Name:
                      {area["place name"]} <br />{" "}
                    </p>
                    <p>Latitude: {area.latitude}</p>
                    <p>
                      Longitude:
                      {area.longitude}
                      <br />{" "}
                    </p>
                    <p>
                      State: {area.state}
                      <br />{" "}
                    </p>
                    <p>
                      Abbreviation: {area["state abbreviation"]}
                      <br />{" "}
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </>
        );
      })}
    </div>
  );
}

export default App;
