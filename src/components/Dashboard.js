import {
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { connect } from "react-redux";
import Card from "./Card";

const Dashboard = ({ authedUser, questions, users }) => {
    const [activeTab, setActiveTab] = useState("newquestions");

    const unanswered = (question) => (!question.optionOne.votes.includes(authedUser.id)
        && !question.optionTwo.votes.includes(authedUser.id));

    const answered = (question) => (question.optionOne.votes.includes(authedUser.id)
        || question.optionTwo.votes.includes(authedUser.id));

    const data = [
        {
            label: "New Questions",
            value: "newquestions",
            desc: unanswered
        },
        {
            label: "Answered Questions",
            value: "answeredquestions",
            desc: answered,
        },
    ]


    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className: "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-blue-500" : ""}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {questions
                                .filter(desc)
                                .map((question) => (
                                    <li key={question.id}>
                                        <Card question={question} author={users[question.author]} />
                                    </li>
                                ))}
                        </ul>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users,
});

export default connect(mapStateToProps)(Dashboard);
