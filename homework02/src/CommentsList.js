import { useState } from "react";
function CommentsList() {
	const [comments, setComments] = useState([
		{ id: 1, text: "Это первый комментарий" },
		{ id: 2, text: "Это второй комментарий" },
		{ id: 3, text: "Это третий комментарий" },
	]);

	function deleteComment(id) {
		// console.log(id);
		setComments((comments) => comments.filter((comment) => comment.id !== id));
	}

	return (
		<div>
			<ul>
				{comments.map((comment) => (
					<div className="comment">
						<li key={comment.id}>{comment.text}</li>
						<button
							onClick={() => {
								deleteComment(comment.id);
							}}
						>
							delete
						</button>
					</div>
				))}
			</ul>
		</div>
	);
}

export default CommentsList;
