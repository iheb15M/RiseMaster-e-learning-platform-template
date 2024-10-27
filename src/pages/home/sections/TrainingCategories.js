import { useTranslation } from "react-i18next";

import useFetchData from "../../../hooks/useFetchData";

import Container from "../../../components/Container";
import CategorieCard from "../../../components/CategorieCard";

import "../Home.scss";

function TrainingCategories() {
  const { t } = useTranslation();

  const [categories, loading, error] = useFetchData("categorie", (item) => (
    <CategorieCard id={Number(item.id)} label={item.label} img={item.img} />
  ));
  if (loading) return <p className="text-center text-primary">Loading...</p>;

  if (error) {
    console.error("Error fetching training data:", error);
    return (
      <p className="text-center text-red-500">Something went wrong: {error}</p>
    );
  }

  return (
    <Container innerClassName="flex flex-col justify-center items-center py-16">
      <h1 className="text-primary text-5xl font-bold mb-16">
        {t("training-categorie.title")}
      </h1>

      <div className="grid grid-cols-4 w-full gap-x-3 gap-y-7">
        {categories}
        <CategorieCard
          label="Browse All Categorie"
          img="https://img.freepik.com/free-photo/3d-rendering-geometric-shapes_23-2150979656.jpg?t=st=1730033619~exp=1730037219~hmac=06a5db4842e9158023250d84359594b8135845093303a0ca208fdb221f21fa57&w=1380"
          seeMore={false}
        />
      </div>
    </Container>
  );
}

export default TrainingCategories;
