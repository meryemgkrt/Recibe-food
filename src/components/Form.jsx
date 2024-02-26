import { useState, useEffect } from "react";

import axios from "axios";
import RecipeCart from "../pages/RecipeCart";
const Form = () => {
  const [searchBar, setSearchBar] = useState(null);
  const [meal, setMal] = useState(null);
  const [data, setData] = useState(null);

  const api_key = "8a73009571cb02899f2e2400ce448e72	";
  const app_id = "91a8071c";

  const getApi = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${searchBar}&app_id=${app_id}&app_key=${api_key}&mealType=${meal}`
      )
      .then((res) => {
        console.log(res.data.hits);
        setData(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center mt-5 ">
        <div className="flex gap-4">
          <input
            type="text"
            className="text-[#fff]  p-2 bg-green-600 rounded-lg cursor-pointer "
            placeholder="Search"
            onChange={(e) => {
              setSearchBar(e.target.value);
            }}
          />
          <select
            className="p-1 text-white bg-green-600 rounded-lg"
            onChange={(e) => {
              setMal(e.target.value);
            }}
          >
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch/Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </select>
        </div>
        <button
          className=" rounded-lg bg-green-900 text-white p-2 ml-5 w-[7rem]"
          onClick={() => getApi()}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {data && data.map((item, idx) => <RecipeCart data={item} key={idx} />)}
      </div>
    </>
  );
};

export default Form;
