const tabs = document.querySelectorAll(".calculator__tab");
const contents = document.querySelectorAll(".calculator__content");
const select = document.querySelector(".calculator__select");
const selectText = select.querySelector("span");
let buttonsAqua, buttonsFamily, buttonsRiviera, buttonsVillas;

const data = {
	aqua: {
		25: {
			price: "$50 822",
			first: "$15 246",
			installment: "24 months",
			monthly: "$1 482",
			freeRest: "15 days",
			profit: "$4 529",
		},
		50: {
			price: "$101 643",
			first: "$30 493",
			installment: "24 months",
			monthly: "$2 965",
			freeRest: "30 days",
			profit: "$9 058",
		},
		75: {
			price: "$152 465",
			first: "$45 739",
			installment: "24 months",
			monthly: "$4 447",
			freeRest: "45 days",
			profit: "$13 587",
		},
		100: {
			price: "$203 286",
			first: "$60 986",
			installment: "24 months",
			monthly: "$5 929",
			freeRest: "60 days",
			profit: "$18 116",
		},
	},
	riviera: {
		12.5: {
			price: "$77 000",
			first: "$23 100",
			installment: "18 месяцев",
			monthly: "$2 994",
			freeRest: "15 days",
			profit: "$6 586",
		},
		25: {
			price: "$136 250",
			first: "$40 875",
			installment: "18 месяцев",
			monthly: "$5 299",
			freeRest: "30 days",
			profit: "$13 173",
		},
		50: {
			price: "$272 500",
			first: "$81 750",
			installment: "18 месяцев",
			monthly: "$10 597",
			freeRest: "30 days",
			profit: "$26 345",
		},
		75: {
			price: "$408 750",
			first: "$122 625",
			installment: "18 месяцев",
			monthly: "$15 896",
			freeRest: "45 days",
			profit: "$39 518",
		},
		100: {
			price: "$545 000",
			first: "$163 500",
			installment: "18 месяцев",
			monthly: "$21 194",
			freeRest: "60 days",
			profit: "$52 690",
		},
	},
	familyClub: {
		25: {
			price: "$79 716",
			first: "$23 915",
			installment: "24 months",
			monthly: "$2 325",
			freeRest: "15 days",
			profit: "$7 132",
		},
		50: {
			price: "$159 432",
			first: "$47 830",
			installment: "24 months",
			monthly: "$4 650",
			freeRest: "30 days",
			profit: "$14 264",
		},
		75: {
			price: "$239 148",
			first: "$71 744",
			installment: "24 months",
			monthly: "$6 975",
			freeRest: "45 days",
			profit: "$21 396",
		},
		100: {
			price: "$318 864",
			first: "$95 659",
			installment: "24 months",
			monthly: "$9 300",
			freeRest: "60 days",
			profit: "$28 528",
		},
	},
	villas: {
		25: {
			price: "$76 650",
			first: "$22 995",
			installment: "24 months",
			monthly: "$2 236",
			freeRest: "15 days",
			profit: "$7 128",
		},
		50: {
			price: "$153 300",
			first: "$45 990",
			installment: "24 months",
			monthly: "$4 471",
			freeRest: "30 days",
			profit: "$14 257",
		},
		75: {
			price: "$229 950",
			first: "$68 985",
			installment: "24 months",
			monthly: "$6 707",
			freeRest: "45 days",
			profit: "$21 385",
		},
		100: {
			price: "$306 600",
			first: "$91 980",
			installment: "24 months",
			monthly: "$8 943",
			freeRest: "60 days",
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
