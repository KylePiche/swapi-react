import React, { useState, useEffect } from "react";
import axios from "axios";
import PlanetCard from "../Planet/PlanetCard";
import Pagination from "../Pagination/Pagination";

export default function Planet() {
  const [listPage, setListPage] = useState(1);
  const [listOfPlanet, setListOfPlanet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/planet/?page=${listPage}`)
      .then((response) => {
        console.log(response.data);
        setListOfPlanet(response.data);
        setIsLoading(false);
      });
  }, [listPage]);

  return (
    <div className="divComponent">
      <Pagination
        listOfData={listOfPlanet}
        listPage={listPage}
        isLoading={isLoading}
        setListPage={setListPage}
      />
      {listOfPlanet &&
        listOfPlanet.results.map((value) => {
          return <PlanetCard value={value} key={value.name} />;
        })}
    </div>
  );
}
