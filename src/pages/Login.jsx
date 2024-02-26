import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bgcontainer flex justify-center items-center">
      <div className="rounded-full h-[25rem] w-[25rem] flex justify-center items-center">
        <form
          className="flex flex-col gap-4"
          action=""
          onSubmit={() => navigate("home")}
        >
          <img
            src="https://svgsilh.com/svg/2085075.svg"
            alt=""
            width="200px"
            draggable="false"
            className="mx-auto"
          />
          <input
            type="text"
            placeholder="Your name"
            className="bg-gray-300 p-2 rounded-lg text-black"
            required
          />
          <input
            type="password"
            placeholder="Your password"
            className="bg-gray-300 p-2 rounded-lg text-black"
            required
          />
          <button className="w-[5rem] max-auto rounded-lg bg-green-600 p-1 text-white ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
