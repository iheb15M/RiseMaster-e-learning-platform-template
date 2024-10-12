import React from "react";

import { useTranslation } from "react-i18next"; 
import  Container  from "../../components/Container";

import Logo from "../../assets/img/logo/Logo.png";
import Search from "../../assets/img/icons/Search.svg";
import Language from "../../assets/img/icons/language.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white shadow-md w-full absolute top-0 h-16">
      <Container
      outerClassName="h-full"
      innerClassName="grid grid-cols-12 items-center"
      >
        <div className="col-span-2 lg:col-span-1 flex items-center">
          <img className="h-full w-full object-contain" src={Logo} alt="Logo" />
        </div>

        <div className="col-span-2 flex items-center">
          <span className="text-secondary text-center w-full font-bold">
          {t('navbar.become_one_of_us')} 
          </span>
        </div>

        <div className="col-span-5 lg:col-span-6 flex items-center justify-center">
          <div className="w-full h-full">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={Search} alt="search icon" />
              </div>
              <input
                id="search"
                className="block w-full pl-10 pr-3 py-2 rounded-md leading-6 bg-gray-light text-black placeholder-gray"
                placeholder="Search for training…"
                type="search"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 col-span-2">
          <button className="text-white bg-primary hover:text-gray-light px-4 lg:px-6 py-3 rounded-md text-sm font-medium">
            Login
          </button>
          <button className="bg-transparent border border-primary  text-primary px-4 lg:px-5 py-3 rounded-md text-sm font-medium">
            SignUp
          </button>
        </div>

        <div className="col-span-1 flex justify-end relative">
          <img src={Language} alt="language icon" />
          <select
          className="bg-transparent active:border-none font-bold text-secondary border-none appearance-none"
          onChange={(e) => changeLanguage(e.target.value)} 
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
