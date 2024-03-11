const tabs = document.querySelectorAll(".calculator__tab");
const contents = document.querySelectorAll(".calculator__content");
const select = document.querySelector(".calculator__select");
const selectText = select.querySelector("span");
let buttonsAqua, buttonsFamily, buttonsRiviera, buttonsVillas;

const data = {
	aqua: {
		25: {
			"Полная цена": "$50 822",
			"Первый платеж 30%": "$15 246",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$1 482",
			"Бесплатный отдых": "15 days",
			"Доходность в год": "$4 529",
		},
		50: {
			"Полная цена": "$101 643",
			"Первый платеж 30%": "$30 493",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$2 965",
			"Бесплатный отдых": "30 days",
			"Доходность в год": "$9 058",
		},
		75: {
			"Полная цена": "$152 465",
			"Первый платеж 30%": "$45 739",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$4 447",
			"Бесплатный отдых": "45 days",
			"Доходность в год": "$13 587",
		},
		100: {
			"Полная цена": "$203 286",
			"Первый платеж 30%": "$60 986",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$5 929",
			"Бесплатный отдых": "60 days",
			"Доходность в год": "$18 116",
		},
	},
	riviera: {
		12.5: {
			"Полная цена": "$77 000",
			"Первый платеж 30%": "$23 100",
			"Рассрочка": "18 month",
			"Ежемесячный платеж": "$2 994",
			"Бесплатный отдых": "15 days",
			"Доходность в год": "$6 586",
		},
		25: {
			"Полная цена": "$136 250",
			"Первый платеж 30%": "$40 875",
			"Рассрочка": "18 month",
			"Ежемесячный платеж": "$5 299",
			"Бесплатный отдых": "30 days",
			"Доходность в год": "$13 173",
		},
		50: {
			"Полная цена": "$272 500",
			"Первый платеж 30%": "$81 750",
			"Рассрочка": "18 month",
			"Ежемесячный платеж": "$10 597",
			"Бесплатный отдых": "30 days",
			"Доходность в год": "$26 345",
		},
		75: {
			"Полная цена": "$408 750",
			"Первый платеж 30%": "$122 625",
			"Рассрочка": "18 month",
			"Ежемесячный платеж": "$15 896",
			"Бесплатный отдых": "45 days",
			"Доходность в год": "$39 518",
		},
		100: {
			"Полная цена": "$545 000",
			"Первый платеж 30%": "$163 500",
			"Рассрочка": "18 month",
			"Ежемесячный платеж": "$21 194",
			"Бесплатный отдых": "60 days",
			"Доходность в год": "$52 690",
		},
	},
	familyClub: {
		25: {
			"Полная цена": "$79 716",
			"Первый платеж 30%": "$23 915",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$2 325",
			"Бесплатный отдых": "15 days",
			"Доходность в год": "$7 132",
		},
		50: {
			"Полная цена": "$159 432",
			"Первый платеж 30%": "$47 830",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$4 650",
			"Бесплатный отдых": "30 days",
			"Доходность в год": "$14 264",
		},
		75: {
			"Полная цена": "$239 148",
			"Первый платеж 30%": "$71 744",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$6 975",
			"Бесплатный отдых": "45 days",
			"Доходность в год": "$21 396",
		},
		100: {
			"Полная цена": "$318 864",
			"Первый платеж 30%": "$95 659",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$9 300",
			"Бесплатный отдых": "60 days",
			"Доходность в год": "$28 528",
		},
	},
	villas: {
		25: {
			"Полная цена": "$76 650",
			"Первый платеж 30%": "$22 995",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$2 236",
			"Бесплатный отдых": "15 days",
			"Доходность в год": "$7 128",
		},
		50: {
			"Полная цена": "$153 300",
			"Первый платеж 30%": "$45 990",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$4 471",
			"Бесплатный отдых": "30 days",
			"Доходность в год": "$14 257",
		},
		75: {
			"Полная цена": "$229 950",
			"Первый платеж 30%": "$68 985",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$6 707",
			"Бесплатный отдых": "45 days",
			"Доходность в год": "$21 385",
		},
		100: {
			"Полная цена": "$306 600",
			"Первый платеж 30%": "$91 980",
			"Рассрочка": "24 month",
			"Ежемесячный платеж": "$8 943",
			"Бесплатный отдых": "60 days",
			"Доходность в год": "$28 514",
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

	price.textContent = data[content.id][percent]["Полная цена"];
	first.textContent = data[content.id][percent]["Первый платеж 30%"];
	installment.textContent = data[content.id][percent]["Рассрочка"];
	monthly.textContent = data[content.id][percent]["Ежемесячный платеж"];
	freeRest.textContent = data[content.id][percent]["Бесплатный отдых"];
	profit.textContent = data[content.id][percent]["Доходность в год"];
}
