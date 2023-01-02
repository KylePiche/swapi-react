import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import PeopleCard from "./PeopleCard";

export default function People() {
  const [listPage, setListPage] = useState(1);
  const [listOfPeople, setListOfPeople] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/people/?page=${listPage}`)
      .then((response) => {
        setListOfPeople(response.data);
        setIsLoading(false);
      })
      .catch((error)=>{
        console.log("An error occurred contacting the backend", error.message)
        setIsLoading(false)
      });
  }, [listPage]);

  return (
    <div className="divComponent">
      <Pagination
        listOfData={listOfPeople}
        listPage={listPage}
        isLoading={isLoading}
        setListPage={setListPage}
      />
        {listOfPeople && <p>{listOfPeople.count} results found:</p>}
      {listOfPeople &&
        listOfPeople.results.map((value) => {
          return <PeopleCard value={value} key={value.name} />;
        })}
    </div>
  );
}
