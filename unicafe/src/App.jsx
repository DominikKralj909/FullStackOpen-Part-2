import { useState } from "react";
import Feedback from "./components/Feedback";
import Statistics from "./components/Statistics";

function App() {
	const [feedback, setFeedback] = useState(
		{
			good: 0,
			neutral: 0,
			bad:0
		}
	);

	const updateFeedback = (feedback) => {
		setFeedback(prevFeedback => ({
			...prevFeedback,
			[feedback]: prevFeedback[feedback] + 1
		}))
	};

	return (
		<>
			<Feedback updateFeedback={updateFeedback} />
			<Statistics statistics={feedback} />
		</>
	);
}

export default App
