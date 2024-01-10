const tabs = document.querySelectorAll(".calculator__tab");
const contents = document.querySelectorAll(".calculator__content");

for (i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", () => {
		tabChange(tabs[i], contents[i]);
	});
}

function tabChange(tab, content) {
	tab.classList.add("calculator__tab_active");
	content.classList.add("calculator__content_active");
}
