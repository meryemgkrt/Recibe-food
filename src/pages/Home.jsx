import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-300 ">
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
