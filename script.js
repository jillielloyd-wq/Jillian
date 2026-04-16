window.onload = function() {
    const btn = document.getElementById("factButton");
    const nameInput = document.getElementById("userName");
    const nameDisplay = document.getElementById("nameDisplay");
    const factDisplay = document.getElementById("factDisplay");

    // --- STEP 6: THE ARRAY OF FACTS ---
    const blossomFacts = [
        "Cherry blossoms are Japan's national flower! 🇯🇵",
        "There are over 200 different varieties of cherry blossoms.",
        "The peak bloom usually only lasts for about one week! 🌸",
        "In Japan, people have picnics under the trees called 'Hanami'.",
        "Cherry blossom petals are actually edible! 🍰",
        "The best-selling ice cream flavor in Japan during spring is Sakura.",
        "Washington D.C. has thousands of trees gifted by Japan in 1912. 🇺🇸",
        "Some cherry blossom trees can live for over 1,000 years!",
        "The petals aren't just pink; some are white or even greenish-yellow.",
        "Sakura represents a time of renewal and the fleeting nature of life.",
        "A single tree can produce up to 600,000 blossoms! 🌳",
        "The blooming starts in the south of Japan and moves north.",
        "Macon, Georgia is known as the Cherry Blossom Capital of the World.",
        "Pikachu's cheeks are said to be inspired by the color of Sakura! ⚡",
        "The wood of cherry trees is often used to make high-quality furniture."
    ];

    if (btn) {
        btn.onclick = function() {
            const name = nameInput.value.trim();

            if (name === "") {
                alert("Please enter a name first! 🌸");
                return;
            }

            // 1. Logic for the Welcome Message
            if (name.toUpperCase() === "AI CLASS") {
                nameDisplay.innerHTML = "✨ Welcome to AI Class! ✨";
                createPetals(true); 
            } else if (name.toLowerCase() === "jillian") {
                nameDisplay.innerHTML = `Welcome Creator <br> ✨ 🌸 ${name} 🌸 ✨`;
                createPetals(false); 
            } else {
                nameDisplay.innerHTML = `Welcome to the garden, <br> 🌸 ${name} 🌸`;
                createPetals(false); 
            }

            // 2. --- STEP 6: RANDOM FACT GENERATOR ---
            const randomNum = Math.floor(Math.random() * blossomFacts.length);
            factDisplay.innerHTML = "<strong>Did you know?</strong> " + blossomFacts[randomNum];
        };
    }
};

function createPetals(sparkleOnly) {
    const petalTypes = sparkleOnly ? ["✨"] : ["🌸", "💮", "💖", "✨"]; 
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
