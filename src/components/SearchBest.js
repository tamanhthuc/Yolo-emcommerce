import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";

const linkSearchMost = [
  {
    display: "áo mắt chim",
    path: "/ao-mat-chim",
  },
  {
    display: "áo phông nữ",
    path: "/ao-phong-nu",
  },
  {
    display: "áo phông nam",
    path: "/ao-phong-nam",
  },
  {
    display: "Jean nữ",
    path: "/jeam-nu",
  },
  {
    display: "chân váy",
    path: "/ao-mat-chim",
  },
  {
    display: "Sơ mi nữ",
    path: "/so-mi-nu",
  },
  {
    display: "Sơ mi nam",
    path: "/so-mi-nam",
  },
  {
    display: "áo polo nữ cafe",
    path: "/ao-polo-nu-cafe",
  },
];
const SearchBest = () => {
  return (
    <div className="container">
      <div className="search-best">
        <div className="search-best__title">tìm kiếm nhiều nhất</div>
        <div className="search-best__content">
          <Grid col={4} mdCol={2} smCol={2} gap={10}>
            {linkSearchMost.map((item, index) => (
              <div className="search-best__content__item" key={index}>
                <Link to={item.path}>{item.display}</Link>
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SearchBest;
