import React, { useEffect, useState } from "react";

const Hoc = (PreHoc) => {
    
    return function HocFunc({list, ...otherProps}){
        const [enteredSearchValue, setEnteredSearchValue] = useState("");
        const [activeSearchValue, setActiveSearchValue] = useState("");
        const [sortMode, setSortMode] = useState(null);
      
        const availableItems = activeSearchValue
          ? list.filter((item) => RegExp(activeSearchValue, "i").test(item.title))
          : list;
      
        const sortedItems = !sortMode
          ? availableItems
          : availableItems.slice().sort((a, b) => {
              if (sortMode === "asc" && a.title > b.title) {
                return 1;
              } else if (sortMode === "asc") {
                return -1;
              } else if (sortMode === "desc" && a.title > b.title) {
                return -1;
              } else {
                return 1;
              }
            });
      
        useEffect(() => {
          setActiveSearchValue(enteredSearchValue);
        }, [enteredSearchValue]);
        return <PreHoc 
        list={sortedItems}
        enteredSearchValue = {enteredSearchValue}
        setEnteredSearchValue = {setEnteredSearchValue}
        sortMode={sortMode}
        setSortMode={setSortMode}
        />
    }
}

export default Hoc