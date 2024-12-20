import { useTranslation } from "react-i18next";
import Input from "../../components/Input";
import Logo from "../../assets/img/logo/Logo-white.png";
import facebook from "../../assets/img/icons/facebook.png";
import Linkedin from "../../assets/img/icons/linkedin.png";
import website from "../../assets/img/icons/link.png";
import "./Footer.scss";

function Footer() {
  const { t } = useTranslation();

  const inputParam = {
    type: 'email',
    name: 'email',
    placeholder: 'email@exp.com',
    required: true,
  };

  return (
    <footer className="pt-16 w-full bg-primary-gradient">
      <div className="text-white py-9 flex flex-col space-y-6 w-11/12 mx-auto">
        <div className="hidden md:flex justify-between items-center">
          <div className="flex w-1/2">
            <div className="flex flex-col w-1/3 space-y-4">
              <p className="font-bold">{t('footer.menu')}</p>
              <ul className="space-y-3">
                <li className="font-thin capitalize">{t('footer.home')}</li>
                <li className="font-thin capitalize">{t('footer.teach-with-us')}</li>
                <li className="font-thin capitalize">{t('footer.categories')}</li>
                <li className="font-thin capitalize">{t('footer.about-us')}</li>
                <li className="font-thin capitalize">{t('footer.faq')}</li>
              </ul>
            </div>
            <div className="flex flex-col w-1/3 space-y-3.5">
              <p className="font-bold">{t('footer.information')}</p>
              <ul className="space-y-3">
                <li className="font-thin">{t('footer.terms')}</li>
                <li className="font-thin">{t('footer.privacy')}</li>
              </ul>
            </div>
            <div className="flex flex-col w-1/3 space-y-3.5">
              <p className="font-bold">{t('footer.contact')}</p>
              <ul className="space-y-3">
                <li className="font-thin">m.ihebmejri@gmail.com</li>
                <li className="font-thin">+216 24 567 891</li>
                <li className="font-thin">location, city, country</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col bg-primary space-y-3.5 py-7 px-5 lg:px-10 w-1/3 lg:w-1/4">
            <p>{t('footer.subscribe')}</p>
            <div className="flex">
              <Input param={inputParam} className="bg-white rounded-l-lg max-w-full" />
              <button className="rounded-r-lg max-w-full p-3"> X </button>
            </div>
            <p className="text-sm font-thin">
              {t('footer.subscribe-text')}
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Rise Master Logo" />
          <div className="flex space-x-4">
            <img src={facebook} alt="Facebook" />
            <img src={Linkedin} alt="Linkedin" />
            <img src={website} alt="Link website" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
