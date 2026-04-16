window.onload = function() {
    const btn = document.getElementById("factButton");
    if (btn) {
        btn.onclick = function() {
            alert("🌸 The cherry blossom is the national flower of Japan! 🌸");
            createPetals();
        };
    }
};

function createPetals() {
    const petalColors = ["🌸", "💮", "💖"]; 
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const petal = document.createElement("div");
            petal.className = "petal";
            petal.innerHTML = petalColors[Math.floor(Math.random() * petalColors.length)];
            petal.style.left = Math.random() * 100 + "vw";
            petal.style.animationDuration = (Math.random() * 2 + 3) + "s";
            document.body.appendChild(petal);
        }, i * 100); 
    }
}
