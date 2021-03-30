import React from "react";

export default function SearchEngine(props) {
  return (
    <form className="search-bar">
      <div className="row">
        <div className="col-7">         
          <input
            type="text"
            placeholder="Enter a city..."
            autoFocus="on"
            className="form-control w-76"
            
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
          <input type="button" value="📍" className="btn btn-light " />

          <i className="fas fa-map-marker-alt"></i>
        </div>
      </div>
    </form>
  );
}
