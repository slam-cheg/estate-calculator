const tabs = document.querySelectorAll(".calculator__tab");
const contents = document.querySelectorAll(".calculator__content");
const select = document.querySelector(".calculator__select");
const selectText = select.querySelector("span");
let buttonsAqua, buttonsFamily, buttonsRiviera, buttonsVillas;

const data = {
	aqua: {
		25: {
			price: "$49 825",
			first: "$14 948",
			installment: "24 месяца",
			monthly: "$1 453",
			freeRest: "15 дней",
			profit: "$4 534",
		},
		50: {
			price: "$99 650",
			first: "$29 895",
			installment: "24 месяца",
			monthly: "$2 906",
			freeRest: "30 дней",
			profit: "$9 068",
		},
		75: {
			price: "$149 475",
			first: "$44 843",
			installment: "24 месяца",
			monthly: "$4 360",
			freeRest: "45 дней",
			profit: "$13 602",
		},
		100: {
			price: "$199 300",
			first: "$59 790",
			installment: "24 месяца",
			monthly: "$5 813",
			freeRest: "60 дней",
			profit: "$18 136",
		},
	},
	riviera: {
		25: {
			price: "$136 250",
			first: "$40 875",
			installment: "18 месяцев",
			monthly: "$5 299",
			freeRest: "15 дней",
			profit: "$13 216",
		},
		50: {
			price: "$272 500",
			first: "$81 750",
			installment: "18 месяцев",
			monthly: "$10 597",
			freeRest: "30 дней",
			profit: "$26 433",
		},
		75: {
			price: "$408 750",
			first: "$122 625",
			installment: "18 месяцев",
			monthly: "$15 896",
			freeRest: "45 дней",
			profit: "$39 649",
		},
		100: {
			price: "$545 000",
			first: "$163 500",
			installment: "18 месяцев",
			monthly: "$21 194",
			freeRest: "60 дней",
			profit: "$52 865",
		},
	},
	familyClub: {
		25: {
			price: "$76 650",
			first: "$22 995",
			installment: "24 месяца",
			monthly: "$2 236",
			freeRest: "15 дней",
			profit: "$7 128",
		},
		50: {
			price: "$153 300",
			first: "$45 990",
			installment: "24 месяца",
			monthly: "$4 471",
			freeRest: "30 дней",
			profit: "$14 257",
		},
		75: {
			price: "$229 950",
			first: "$68 985",
			installment: "24 месяца",
			monthly: "$6 707",
			freeRest: "45 дней",
			profit: "$21 385",
		},
		100: {
			price: "$306 600",
			first: "$91 980",
			installment: "24 месяца",
			monthly: "$8 943",
			freeRest: "60 дней",
			profit: "$28 514",
		},
	},
	villas: {
		25: {
			price: "$76 650",
			first: "$22 995",
			installment: "24 месяца",
			monthly: "$2 236",
			freeRest: "15 дней",
			profit: "$7 128",
		},
		50: {
			price: "$153 300",
			first: "$45 990",
			installment: "24 месяца",
			monthly: "$4 471",
			freeRest: "30 дней",
			profit: "$14 257",
		},
		75: {
			price: "$229 950",
			first: "$68 985",
			installment: "24 месяца",
			monthly: "$6 707",
			freeRest: "45 дней",
			profit: "$21 385",
		},
		100: {
			price: "$306 600",
			first: "$91 980",
			installment: "24 месяца",
			monthly: "$8 943",
			freeRest: "60 дней",
			profit: "$28 514",
		},
	},
};

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		tabChange(tab);
	});
});

select.addEventListener("click", () => {
	select.classList.toggle("calculator__select_opened");
});

contents.forEach((content) => {
	if (content.id === "aqua") {
		buttonsAqua = content.querySelectorAll(".calculator__button");
		buttonsAqua.forEach((btn) => {
			btn.addEventListener("click", () => {
				calculate(buttonsAqua, btn, content);
			});
		});
	}
	if (content.id === "familyClub") {
		buttonsFamily = content.querySelectorAll(".calculator__button");
		buttonsFamily.forEach((btn) => {
			btn.addEventListener("click", () => {
				calculate(buttonsFamily, btn, content);
			});
		});
	}
	if (content.id === "riviera") {
		buttonsRiviera = content.querySelectorAll(".calculator__button");
		buttonsRiviera.forEach((btn) => {
			btn.addEventListener("click", () => {
				calculate(buttonsRiviera, btn, content);
			});
		});
	}
	if (content.id === "villas") {
		buttonsVillas = content.querySelectorAll(".calculator__button");
		buttonsVillas.forEach((btn) => {
			btn.addEventListener("click", () => {
				calculate(buttonsVillas, btn, content);
			});
		});
	}
});

function tabChange(clickedTab) {
	tabs.forEach((tab) => {
		if (tab === clickedTab) {
			select.classList.remove("calculator__select_opened");
			selectText.textContent = clickedTab.textContent;
			clickedTab.classList.add("calculator__tab_active");
		} else {
			tab.classList.remove("calculator__tab_active");
		}
	});
	contents.forEach((content) => {
		if (clickedTab.id === content.id) {
			content.classList.add("calculator__content_active");
		} else {
			content.classList.remove("calculator__content_active");
		}
	});
}

function calculate(buttons, clickedButton, content) {
	buttons.forEach((btn) => {
		if (btn === clickedButton) {
			clickedButton.classList.add("calculator__button_active");
		} else {
			btn.classList.remove("calculator__button_active");
		}
	});

	const percent = clickedButton.dataset.percent;
	const price = content.querySelector("#price").querySelector("span");
	const first = content.querySelector("#first");
	const installment = content.querySelector("#istallment");
	const monthly = content.querySelector("#monthly").querySelector("span");
	const freeRest = content.querySelector("#freeRest").querySelector("span");
	const profit = content.querySelector("#profit").querySelector("span");

	price.textContent = data[content.id][percent].price;
	first.textContent = data[content.id][percent].first;
	installment.textContent = data[content.id][percent].installment;
	monthly.textContent = data[content.id][percent].monthly;
	freeRest.textContent = data[content.id][percent].freeRest;
	profit.textContent = data[content.id][percent].profit;
}
