import bgImage from "../images/bg.jpg";
import logoImage from "../images/logo.png";

export default function Index() {
  return (
    <div className="grid grid-rows-3 h-screen w-screen">
      <div className="flex items-center justify-center">
        <img
          className="object-scale-down h-16 w-16 md:h-36 md:w-36"
          src={logoImage}
          alt="Baby Okapi Logo"
        />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="font-semibold text-3xl md:text-6xl text-gray-600">
          COMING SOON
        </h1>
      </div>
      <div className="row-start-3 flex items-center justify-center">
        <a
          href="https://www.instagram.com/babyokapi.eu/"
          className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-4 border-b-4 border-rose-700 hover:border-rose-500 rounded"
        >
          Instagram
        </a>
      </div>
      <img className="top-0 absolute -z-10 h-screen w-screen" src={bgImage} />
    </div>
  );
}
