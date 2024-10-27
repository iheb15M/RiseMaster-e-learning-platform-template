import { useTranslation } from "react-i18next";
import useFetchData from "../../../hooks/useFetchData";
import Container from "../../../components/Container";
import playIcon from "../../../assets/img/icons/play-Icon.svg";

const LiveSession = () => {
  const { t } = useTranslation();
  const [session, loading, error] = useFetchData("liveSession");

  if (loading) return <p className="text-center text-primary">Loading...</p>;

  if (error) {
    console.error("Error fetching training data:", error);
    return (
      <p className="text-center text-red-500">Something went wrong: {error}</p>
    );
  }

  return (
    <Container
      outerClassName="py-16 live-session"
      innerClassName="grid grid-cols-2 rounded-2xl bg-primary-gradient p-16"
    >
      <div className="px-16 flex flex-col justify-center h-full">
        <h1 className="text-white text-5xl font-bold capitalize">
          {t("live-session.live")}: {session.title}
        </h1>
        <p className="text-white text-xs mb-11 mt-3">{session.description}</p>
        <button className="flex items-center justify-center text-primary bg-gray-light py-3 text-sm font-medium rounded w-1/2">
          {t("live-session.join-session")}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="#673AB7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="py-5 flex items-center justify-center">
        <div
          className="w-5/6 h-3/5 my-5 flex flex-col rounded-md border-2 border-white bg-cover bg-no-repeat bg-center image relative"
          style={{ backgroundImage: `url(${session.img})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md z-0"></div>

          <div className="flex items-center justify-self-start self-end justify-end p-3 z-10">
            <span className="live-dot inline-block relative bg-red rounded-full z-10"></span>
            <p className="pl-2 capitalize text-xl text-red">
              {t("live-session.live")}
            </p>
          </div>

          <div className="flex items-center justify-center flex-grow pb-10 z-10">
            <img
              src={playIcon}
              className="play-btn"
              alt="play icon in circle"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LiveSession;
