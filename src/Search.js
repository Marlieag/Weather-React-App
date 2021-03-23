import React from "react";

export default function SearchEngine(props) {
  return (
    <form className="search-bar">
      <div className="row">
        <div className="col-8">
          <input
            type="text"
            placeholder="Enter a city..."
            autoFocus="on"
            className="form-control"
          />
        </div>

        <div className="col-3">
          <div className="primaryButton">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary form-control"
            />
          </div>
        </div>

        <div className="col-1">
          <input type="button" className="btn btn-light " />

          <i className="fas fa-map-marker-alt"></i>
        </div>
      </div>
    </form>
  );
}
