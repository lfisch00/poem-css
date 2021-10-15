function nightMode() {
    const body = document.querySelector("body");
	body.classList.toggle("nightMode");
}

const button = document.getElementById("lightSwitch");
button.addEventListener("click", nightMode, false);