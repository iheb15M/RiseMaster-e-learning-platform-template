import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import Container from "../../../components/Container";
import Card from "../../../components/Card";

import "../Home.scss";

function ExclusiveTraining() {
  const { t } = useTranslation();

  const [trainingList, setTrainingList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/training");
      const data = await response.json();
      setTrainingList(data);
    };

    fetchData();
  }, []);

  return (
    <Container innerClassName="flex flex-col justify-center items-center">
      <h1 className="text-primary text-5xl font-bold my-16">
        {t("exclusive_training.title")}
      </h1>
      <div className="grid grid-cols-4 gap-7 w-full flex items-start justify-between">
        {trainingList.map((training) => (
            <Card data={training} key={training.id} />
        ))}
      </div>
    </Container>
  );
}

export default ExclusiveTraining;
