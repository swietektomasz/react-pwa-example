import React from "react";
import { Formik } from "formik";

import "./filters.css";
import { useFilters } from "../../shared/hooks/useFilters";

const initialFilters = {
  search: "",
  year: "",
  sort: "SCORE_DESC"
};

export const Filters = () => {
  const [filters, setFilters] = useFilters(initialFilters);

  return (
    <div className="filter-wrapper">
      <h3 className="header">Search by:</h3>
      <Formik
        initialValues={filters}
        onSubmit={(values, { setSubmitting }) => {
          setFilters(values);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-wrapper">
                <label htmlFor="search">Title: </label>
                <input
                  className="input-field"
                  name="search"
                  value={values.search}
                  onChange={handleChange}
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="year">Year: </label>
                <input
                  className="input-field"
                  name="year"
                  value={values.year}
                  onChange={handleChange}
                  type="text"
                  placeholder="Year..."
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="year">Sort by: </label>
                <select
                  className="input-field"
                  name="sort"
                  value={values.sort}
                  onChange={handleChange}
                >
                  <option value="SCORE_DESC">Highest score</option>
                  <option value="SCORE">Lowest score</option>
                  <option value="POPULARITY">Least popular</option>
                  <option value="POPULARITY_DESC">Most popular</option>
                </select>
              </div>
              <button
                className="submit-button"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
