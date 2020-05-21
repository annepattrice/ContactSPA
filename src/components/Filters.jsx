import React, { useState, useEffect, useCallback } from "react";
import "./filters.scss";

const initialSortSelected = "";

const Filters = ({ onFilter }) => {
  const [search, setSearch] = useState("");
  const [sortSelected, setSortSelected] = useState(initialSortSelected);

  const _onFilter = useCallback(onFilter, []);

  useEffect(() => {
    const name = sortSelected;

    let compareFilter = (a, b) => {
      const x = typeof a[name] === "string" ? a[name].toLowerCase() : a[name];
      const y = typeof b[name] === "string" ? b[name].toLowerCase() : b[name];

      return x < y ? -1 : x > y ? 1 : 0;
    };

    if (name === "") {
      compareFilter = () => 0;
    }

    _onFilter(compareFilter, "sort");
  }, [sortSelected, _onFilter]);

  function handleSearch(e) {
    const currentValue = e.target.value;

    let searchFilter = (contact) =>
      contact.name.toLowerCase().includes(currentValue.toLowerCase());

    if (currentValue === "") {
      searchFilter = (v) => v;
    }

    setSearch(currentValue);
    _onFilter(searchFilter, "search");
  }

  function handleSort(e) {
    const {
      target: { name },
    } = e;

    setSortSelected((prevName) => {
      if (prevName === name) {
        return initialSortSelected;
      }

      return name;
    });
  }

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
            sortSelected === "name" ? "is-selected" : ""
          }`}
          name="name"
          onClick={handleSort}
        >
          Nome <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${
            sortSelected === "country" ? "is-selected" : ""
          }`}
          name="country"
          onClick={handleSort}
        >
          País <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${
            sortSelected === "company" ? "is-selected" : ""
          }`}
          name="company"
          onClick={handleSort}
        >
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${
            sortSelected === "department" ? "is-selected" : ""
          }`}
          name="department"
          onClick={handleSort}
        >
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${
            sortSelected === "admissionDate" ? "is-selected" : ""
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
