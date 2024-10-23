import { useTranslation } from "react-i18next";

import useFetchData from '../../../hooks/useFetchData';

import Container from "../../../components/Container";
import Card from "../../../components/Card";

import "../Home.scss";

function ExclusiveTraining() {
  const { t } = useTranslation();

  const { data, loading, error } = useFetchData('training?_limit=4',
    item => ({
      ...item,
      id: Number(item.id),
      trainer: {
        ...item.trainer,
        rate: Number(item.trainer.rate),
        totalReview: Number(item.trainer.totalReview)
      }
    })
  );

  if (loading) return <p className="text-center text-primary">Loading...</p>;

  if (error) {
    console.error("Error fetching training data:", error);
    return <p className="text-center text-red-500">Something went wrong: {error}</p>;
  }

  return (
    <Container innerClassName="flex flex-col justify-center items-center">
      <h1 className="text-primary text-5xl font-bold my-16">
        {t("exclusive_training.title")}
      </h1>
      <div className="w-full grid grid-cols-4 gap-7 place-items-center place-content-between">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((training) => (
            <Card data={training} key={training.id} />
          ))
        ) : (
          <p className="text-center text-gray-500">No training data available.</p>
        )}
      </div>
    </Container>
  );
}

export default ExclusiveTraining;
