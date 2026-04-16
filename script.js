window.onload = function() {
    const btn = document.getElementById("factButton");
    const nameInput = document.getElementById("userName");
    const display = document.getElementById("nameDisplay");

    if (btn) {
        btn.onclick = function() {
            const name = nameInput.value;
            if (name.trim() === "") {
                alert("Please enter a name first! 🌸");
                return;
            }
            display.innerHTML = `Welcome <br> 🌸 ${name} 🌸`;
            createPetals();
        };
    }
};

function createPetals() {
    const petalTypes = ["🌸", "💮", "💖", "✨"]; 
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const petal = document.createElement("div");
            petal.className = "petal";
            petal.innerHTML = petalTypes[Math.floor(Math.random() * petalTypes.length)];
            petal.style.left = Math.random() * 100 + "vw";
            petal.style.animationDuration = (Math.random() * 3 + 2) + "s";
            petal.style.setProperty('--random-offset', Math.random() * 5);
            document.body.appendChild(petal);
        }, i * 15); 
    }
}
