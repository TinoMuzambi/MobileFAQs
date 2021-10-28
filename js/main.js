const answers = document.querySelectorAll("div.question-item");

console.log(answers);
answers.forEach((answer) =>
	answer.addEventListener("click", () => {
		const arrow = answer.children[0].children[1].innerText;
		if (arrow === "▲") answer.children[0].children[1].innerText = "▼";
		else answer.children[0].children[1].innerText = "▲";
		answer.children[1].classList.toggle("open");
	})
);
