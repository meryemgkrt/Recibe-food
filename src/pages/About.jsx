import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center flex-col items-center mt-[5rem]">
          <img
            alt="bos"
            width="350px"
            src="https://i.makeagif.com/media/1-07-2016/aGpTDw.gif"
          />
          <div className=" text-center w-[25rem]">
            <p className="mt-5 text-2xl font-semibold">
              9 yaşında, tabla başında{" "}
              <span className="text-red-600">Hamım Abla</span> şimdi
              yemeklerinin tarifini sizinle paylaşıyor
            </p>
            <p className="mt-5 text-xl leading-8">
              1985 yılında, henüz 9 yaşındayken yanında çalışmaya başladığı
              Canan Usta’nın kebap tablasının başında, buzda soğutulmuş su ve
              ayran servisi yapan bir çocuğun, Hasan Oral’ın başarı dolu
              öyküsüdür “Hasan Usta” markası..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
