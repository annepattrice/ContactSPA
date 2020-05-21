import React from "react";
import "./filters.scss";

const Filters = ({ search, handleSearch, handleSort, buttonSortSelected }) => {
  return (
    <div className="container" data-testid="filters">
      <section className="filters">
        <div className="filters__search">
          <input
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
            value={search}
            onChange={handleSearch}
          />
          <button className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>
        <button
          className={`filters__item ${
            buttonSortSelected === "name" ? "is-selected" : ""
          }`}
          name="name"
          onClick={handleSort}
        >
          Nome <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${
            buttonSortSelected === "country" ? "is-selected" : ""
          }`}
          name="country"
          onClick={handleSort}
        >
          País <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${
            buttonSortSelected === "company" ? "is-selected" : ""
          }`}
          name="company"
          onClick={handleSort}
        >
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${
            buttonSortSelected === "department" ? "is-selected" : ""
          }`}
          name="department"
          onClick={handleSort}
        >
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${
            buttonSortSelected === "admissionDate" ? "is-selected" : ""
          }`}
          name="admissionDate"
          onClick={handleSort}
        >
          Data de admissão <i className="fas fa-sort-down" />
        </button>
      </section>
    </div>
  );
};
export default Filters;
