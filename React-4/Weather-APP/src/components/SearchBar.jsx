import React, { useState } from "react";
import s from './SearchBar.module.css';
export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input className={s.nav}
        type="text"
        placeholder="Search a city"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={s.btn}  type="submit" value="Send" />
    </form>
  );
}
