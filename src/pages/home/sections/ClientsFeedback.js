import { useTranslation } from "react-i18next";

import useFetchData from '../../../hooks/useFetchData';

import Container from "../../../components/Container";
import FeedbackCard from "../../../components/FeedbackCard";

function ClientsFeedback() {
    const { t } = useTranslation();

    const [feedbackList, loading, error] = useFetchData('feedbacks?_limit=3',
        item => {
            const feedback = {
                ...item,
                id: Number(item.id),
                review: Number(item.review),
            };
            return (
                <FeedbackCard
                    key={feedback.id}
                    review={feedback.review}
                    feedback={feedback.feedback}
                    profile={feedback.profile}
                />
            );
        });

    if (loading) return <p className="text-center text-primary">Loading...</p>;

    if (error) {
        console.error("Error fetching training data:", error);
        return <p className="text-center text-red-500">Something went wrong: {error}</p>;
    }

    return (
        <Container innerClassName="flex flex-col justify-center items-center">
            <h1 className="text-primary text-5xl font-bold capitalize my-16">
                {t("feedback.title")}
            </h1>
            <div className="w-full flex items-start justify-between">
                {feedbackList}
            </div>
        </Container>
    )
}

export default ClientsFeedback;