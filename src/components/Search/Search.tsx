import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/reducer/weather-reducer";
//
// import { getWeather } from '../../redux/reducer/weather-reducer';
import { useAppDispatch } from "../../types/type";

import "./Search.scss";
const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const onHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSearchCity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actions.getWeather(value));
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={onSearchCity}>
        <input
          type="text"
          placeholder="Введите город"
          value={value}
          onChange={onHandlerChange}
          onClick={() => dispatch({ type: "CLICK", payload: "fsaas" })}
        />
        <button>
          <CgSearch /> Поиск
        </button>
      </form>
    </div>
  );
};

export default Search;
