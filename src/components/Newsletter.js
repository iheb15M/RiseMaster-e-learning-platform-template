import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "./Container";
import Input from "./Input";

function NewsLetter() {

  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  
  const inputParam = {
    type: 'email',
    name: 'email',
    placeholder: 'email@exp.com',
    required: true,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };


  return (
    <Container
      outerClassName="bg-accent-light"
      innerClassName="py-8 grid grid-cols-12 justify-items-center content-center"
    >
      <h3 className="col-span-4 text-secondary capitalize font-bold text-2xl flex items-center">
        {t("newsletter.title")}
      </h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4 col-span-6">
       <Input param={inputParam} onValueChange={(value) => setEmail(value)}  className="col-span-5"/>
        <button
          type="submit"
          className="col-span-1 text-white bg-primary hover:text-gray-light px-4 lg:px-6 rounded-md text-sm font-medium"
        >
          {t("newsletter.subscribe")}
        </button>
      </form>
    </Container>
  );
}

export default NewsLetter;
