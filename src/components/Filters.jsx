import React, { Component } from "react";
import "./filters.scss";

class Filters extends Component {
  state = {
    search: "",
    sortSelected: "",
  };

  componentDidUpdate(_, prevState) {
    if (this.state.sortSelected !== prevState.sortSelected) {
      const name = this.state.sortSelected;

      let compareFilter = (a, b) => {
        const x = typeof a[name] === "string" ? a[name].toLowerCase() : a[name];
        const y = typeof b[name] === "string" ? b[name].toLowerCase() : b[name];

        return x < y ? -1 : x > y ? 1 : 0;
      };

      if (name === "") {
        compareFilter = () => 0;
      }

      this.props.onFilter(compareFilter, "sort");
    }
  }

  handleSearch = (e) => {
    const currentValue = e.target.value;

    let searchFilter = (contact) =>
      contact.name.toLowerCase().includes(currentValue.toLowerCase());

    if (currentValue === "") {
      searchFilter = (v) => v;
    }

    this.setState({ search: currentValue });

    this.props.onFilter(searchFilter, "search");
  };

  handleSort = (e) => {
    const {
      target: { name },
    } = e;

    this.setState((prevState) => {
      let sortSelected = name;

      if (prevState.sortSelected === name) {
        sortSelected = "";
      }

      return {
        ...prevState,
        sortSelected,
      };
    });
  };

  render() {
    const { search, sortSelected } = this.state;

    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={search}
              onChange={this.handleSearch}
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
            onClick={this.handleSort}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              sortSelected === "country" ? "is-selected" : ""
            }`}
            name="country"
            onClick={this.handleSort}
          >
            País <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              sortSelected === "company" ? "is-selected" : ""
            }`}
            name="company"
            onClick={this.handleSort}
          >
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              sortSelected === "department" ? "is-selected" : ""
            }`}
            name="department"
            onClick={this.handleSort}
          >
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              sortSelected === "admissionDate" ? "is-selected" : ""
            }`}
            name="admissionDate"
            onClick={this.handleSort}
          >
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    );
  }
}
export default Filters;
