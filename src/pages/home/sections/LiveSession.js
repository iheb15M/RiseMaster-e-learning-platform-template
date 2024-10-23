import { useTranslation } from "react-i18next";

import useFetchData from '../../../hooks/useFetchData';

import Container from "../../../components/Container";

const LiveSession = () => {
    const { t } = useTranslation();

    const { data, loading, error } = useFetchData('liveSession?_limit=1',
        item => ({
            ...item,
            id: Number(item.id),
        })
    );

    if (loading) return <p className="text-center text-primary">Loading...</p>;

    if (error) {
        console.error("Error fetching training data:", error);
        return <p className="text-center text-red-500">Something went wrong: {error}</p>;
    }

    const [session] = data;

    return (
        <Container
            outerClassName="py-16"
            innerClassName="grid grid-cols-12 rounded-2xl bg-primary-gradient px-16">
            <div className="col-start-1 col-span-5 px-16 flex flex-col justify-center h-full">
                <h1 className="text-white text-5xl font-bold capitalize">
                    {t("live-session.live")}: {session.title}
                </h1>
                <p className="text-white text-xs mb-11 mt-3">{session.description}</p>
                <button className="flex items-center justify-center text-primary bg-gray-light py-3 text-sm font-medium rounded w-1/2">
                    {t('live-session.join-session')}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="#673AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

            </div>
            <div className="col-end-12 col-span-5">
                <img src={session.img} className="w-5/6" alt="session img" />
            </div>
        </Container>
    )
}

export default LiveSession;