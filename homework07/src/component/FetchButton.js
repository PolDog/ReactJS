import React from "react";
import { useDispatch, useSelector } from "react-redux";

function FetchButton() {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.tasks);

	const handleClick = () => {
		dispatch({ type: "FETCH_DATA_REQUEST" });
	};

	// console.log('task ',tasks);

	return (
		<div>
			<button onClick={handleClick}>загрузки и отображения списка задач</button>
			<p>---------------------------------</p>
			<ul>
            {tasks.map((task) => (
					<li key={task.id}
                    style={{ textDecoration: task.completed ? "none" : "line-through" }}
                    >{task.title}</li>
				))}
			</ul>
			<p>---------------------------------</p>
		</div>
	);
}
export default FetchButton;
