import React from "react";
import Hoc from "./Hoc";

const  PreHoc = ({ list, enteredSearchValue, setEnteredSearchValue, sortMode, setSortMode}) => {
  return (
    <>
     <h3>High ordered component: filtering/sorting logic is a "mixin" to the view component</h3>
     <div>
        <input
          type="search"
          value={enteredSearchValue}
          onChange={(e) => setEnteredSearchValue(e.target.value)}
        />
        <div>
          <input
            type="radio"
            name="sort"
            value="asc"
            checked={sortMode === "asc"}
            onChange={(e) => setSortMode(e.target.value)}
          />{" "}
          A-Z
          <input
            type="radio"
            name="sort"
            value="desc"
            checked={sortMode === "desc"}
            onChange={(e) => setSortMode(e.target.value)}
          />{" "}
          Z-A
        </div>
      </div>

      <ul>
        {list && list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
   
  );
}

export default Hoc(PreHoc)
