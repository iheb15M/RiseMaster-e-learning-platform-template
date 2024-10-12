import { useTranslation } from "react-i18next"; 
import  Container  from "../../../components/Container";
import MainHero from "../../../assets/img/images/main-hero.png";
import "../Home.scss";

function Hero() {
  const { t } = useTranslation();

  return (
    <Container
    outerClassName="h-screen bg-light-gradient pt-16"
    innerClassName="grid grid-cols-2 items-center">
        <div className="h-full flex flex-col justify-center items-start gap-y-6">
          <h1 className="flex flex-col font-bold md:text-5xl lg:text-6xl text-black">
            <span>{t('hero.heading1')}</span>
            <span>{t('hero.heading2')}</span>
            <span className="text-primary">{t('hero.heading3')}</span>
          </h1>
          <p className="w-full font-light text-base text-black">
          {t('hero.description')}
          </p>
          <div className="w-full">
            <button className="text-white bg-primary hover:text-gray-light px-auto w-2/3 lg:w-1/3 py-3 rounded-md text-sm font-medium">
            {t('hero.button')}
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
    </Container>
  );
}

export default Hero;
