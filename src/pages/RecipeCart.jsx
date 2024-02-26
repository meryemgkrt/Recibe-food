import { useNavigate } from "react-router-dom";

const RecipeCart = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="m-5">
      <div className="flex flex-col items-center bg-red-100 rounded-lg mt-5  w-[30rem] text-center">
        <p className="mb-5 text-xl">{data.recipe.label}</p>
        <img
          src={data.recipe.image}
          className="rounded-lg"
          alt=""
          width="200px"
        />
        <button
          className="bg-green-800 p-1 w-[5rem] mt-2 text-white rounded-lg"
          onClick={() => navigate("/details", { state: data.recipe })}
        >
          Detay
        </button>
      </div>
    </div>
  );
};

export default RecipeCart;
