const answers = document.querySelectorAll("div.question-item");

console.log(answers);
answers.forEach((answer) =>
	answer.addEventListener("click", () => {
		answer.children[1].classList.toggle("open");
	})
);
