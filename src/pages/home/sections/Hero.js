import MainHero from "../../../assets/img/images/main-hero.png";
import "../Home.scss";

function Hero() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-light-gradient pt-16">
      <div className="w-11/12 lg:w-10/12 grid grid-cols-2 items-center h-full">
        <div className="h-full flex flex-col justify-center items-start gap-y-6">
          <h1 className="flex flex-col font-bold md:text-6xl lg:text-7xl text-black">
            <span>Investing in</span>
            <span>knowledge and</span>
            <span className="text-primary">Your future</span>
          </h1>
          <p className="w-full font-light text-base text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultrices ex ut sem tincidunt, ac dignissim elit bibendum. Etiam
            vestibulum at metus eget ullamcorper.
          </p>
          <div className="w-full">
            <button className="text-white bg-primary hover:text-gray-light px-auto w-2/3 lg:w-1/3 py-3 rounded-md text-sm font-medium">
              See more
            </button>
          </div>
        </div>
        <div className="h-full flex justify-center items-center px-1">
          <img
            src={MainHero}
            className="w-full lg:w-3/4 max-md:h-full"
            alt="student holding books"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
