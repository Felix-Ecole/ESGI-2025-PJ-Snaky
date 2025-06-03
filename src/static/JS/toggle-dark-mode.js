document.querySelector("#theme-toggle").onclick = (e) => {
	e.target.innerText = (!document.body.classList.contains("dark-mode"))
		? "☀️ Mode clair"
		: "🌙 Mode sombre";

	document.body.classList.toggle("dark-mode");
};