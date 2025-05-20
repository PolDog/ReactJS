import React, { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

const TodoFilter = () => {
	const {filter, setFilter} = useContext(FilterContext);

	const handleChange = (e) => {
		setFilter(e.target.value);
	};

	return (
		<select value={filter} onChange={handleChange}>
			<option value="XL">All</option>
			<option value="L">Completed</option>
			<option value="S">Active</option>
		</select>
	);
};

export default TodoFilter;
