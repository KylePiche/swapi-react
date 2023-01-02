import React, { useState, useEffect } from "react";
import axios from "axios";
import StarshipCard from "../Starship/StarshipCard"
import Pagination from "../Pagination/Pagination";

export default function Starship() {
  const [listPage, setListPage] = useState(1);
  const [listOfStarship, setListOfStarship] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/starship/?page=${listPage}`)
      .then((response) => {
        console.log(response.data);
        setListOfStarship(response.data);
        setIsLoading(false);
      });
  }, [listPage]);

  return (
    <div className="divComponent">
    <Pagination
        listOfData={listOfStarship}
        listPage={listPage}
        isLoading={isLoading}
        setListPage={setListPage}
      />
      {listOfStarship && <p>{listOfStarship.count} results found:</p>}
        {listOfStarship &&
          listOfStarship.results.map((value) => {
            return <StarshipCard value={value} key={value.name}/>;
          })}
    </div>
  );
}
