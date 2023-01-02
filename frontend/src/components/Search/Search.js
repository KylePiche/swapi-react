import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PeopleCard from "../People/PeopleCard";

function Search() {
  const [listPage, setListPage] = useState(1);
  const [listOfPeople, setListOfPeople] = useState(null);
  const [query, setQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    if (query) {
      axios.post(`${process.env.REACT_APP_API_URL}/people/?page=${listPage}`,{name: query}).then((response) => {
        setListOfPeople(response.data);
        setIsLoading(false);
      });
    }
  }, [listPage]);

  const initialValue = {
    name: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("You must enter a name"),
  });
  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    setListPage(1);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/people/?page=${listPage}`,
        data
      )
      .then((response) => {
        console.log(response);
        setQuery(data.name);
        setListOfPeople(response.data);
        setIsLoading(false);
      });
  };
  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Name:</label>

          <Field
            autoComplete="off"
            id="inputName"
            name="name"
            placeholder="Enter a name here"
          ></Field>
          <button type="submit">Search</button>
          <br />
          <ErrorMessage
            name="name"
            component="span"
            className="search--error"
          />
        </Form>
      </Formik>
      {listOfPeople && <p>{listOfPeople.count} results found:</p>}
      {listOfPeople && (
        <Pagination
          listOfData={listOfPeople}
          listPage={listPage}
          isLoading={isLoading}
          setListPage={setListPage}
        />
      )}
      {listOfPeople &&
        listOfPeople.results.map((value) => {
          return <PeopleCard value={value} key={value.name}/>;
        })}
      <div className="results"></div>
    </>
  );
}

export default Search;
