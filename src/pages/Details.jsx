import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Details = () => {
  const { state: detail } = useLocation();
  return (
    <div className="min-h-screen bg-red-200">
      <Navbar />
      <p className="mt-5 text-3xl font-bold text-center">{detail.label}</p>
      <div className="flex flex-wrap items-center justify-evenly h-[45rem] m-5 rounded-lg bg-red-50 h-[]">
        <ul>
          <p className="mb-3 font-bold text-center border-b-2 border-black text-l-xl">
            Nutriens
          </p>
          <li>Calcium: {detail.digest[5].total.toFixed()}mg</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}g</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}mg</li>
          <li>Energy: {detail.calories.toFixed()}kcal</li>
          <li>Fat: {detail.digest[0].total.toFixed()}</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}</li>
          <li>Protein: {detail.digest[2].total.toFixed()}</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}</li>
        </ul>
        <div>
          <img
            width="200px"
            className="rounded-lg"
            src={detail.image}
            alt={detail.label}
          />
        </div>
        <ul>
          <p className="font-bold text-center border-b-2 border-black">
            Recipe
          </p>
          {detail.ingredientLines.map((item, idx) => (
            <li className="" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
