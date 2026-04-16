window.onload = function() {
    const btn = document.getElementById("factButton");
    if (btn) {
        btn.onclick = function() {
            alert("🌸 Look at all the blossoms! 🌸");
            createPetals();
        };
    }
};

function createPetals() {
    // Added more varieties of blossoms and sparkles
    const petalTypes = ["🌸", "💮", "💖", "✨", "🌸"]; 
    
    // We are creating 200 petals for a "blizzard" effect
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const petal = document.createElement("div");
            petal.className = "petal";
            
            // Pick a random petal type
            petal.innerHTML = petalTypes[Math.floor(Math.random() * petalTypes.length)];
            
            // Randomly spread across the width
            petal.style.left = Math.random() * 100 + "vw";
            
            // Vary the fall speed (between 2 and 5 seconds)
            petal.style.animationDuration = (Math.random() * 3 + 2) + "s";
            
            // This creates the "piling up" look by giving each petal a slightly different landing height
            petal.style.setProperty('--random-offset', Math.random() * 5);
            
            document.body.appendChild(petal);
        }, i * 20); // They will start falling very quickly after each other
    }
}
