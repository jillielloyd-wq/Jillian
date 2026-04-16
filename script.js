window.onload = function() {
    // Connect to the items on your screen
    const btn = document.getElementById("factButton");
    const nameInput = document.getElementById("userName");
    const display = document.getElementById("nameDisplay");

    if (btn) {
        btn.onclick = function() {
            // Get the name and clean up extra spaces
            const name = nameInput.value.trim();

            // --- STEP 5: LOGIC (IF / ELSE) ---
            
            if (name === "") {
                // Logic 1: If the box is empty
                alert("Please enter a name first! 🌸");
            } 
            else if (name.toUpperCase() === "AI CLASS") {
                // Logic 2: The Secret Easter Egg
                display.innerHTML = "✨ Welcome to AI Class! ✨";
                // Trigger the blizzard with ONLY sparkles
                createPetals(true); 
            }
            else if (name.toLowerCase() === "jillian") {
                // Logic 3: Special message for the creator
                display.innerHTML = `Welcome Creator <br> ✨ 🌸 ${name} 🌸 ✨`;
                // Trigger regular blizzard
                createPetals(false); 
            } 
            else {
                // Logic 4: The default message for anyone else
                display.innerHTML = `Welcome to the garden, <br> 🌸 ${name} 🌸`;
                // Trigger regular blizzard
                createPetals(false); 
            }
        };
    }
};

/**
 * This function creates the falling animation.
 * If 'sparkleOnly' is true, it only drops ✨.
 * Otherwise, it drops a mix of blossoms and hearts.
 */
function createPetals(sparkleOnly) {
    // Decide which emojis to use based on the logic above
    const petalTypes = sparkleOnly ? ["✨"] : ["🌸", "💮", "💖", "✨"]; 
    
    // Create 200 items for a thick "blizzard" effect
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const petal = document.createElement("div");
            petal.className = "petal";
            
            // Pick a random emoji from the list we chose
            petal.innerHTML = petalTypes[Math.floor(Math.random() * petalTypes.length)];
            
            // Randomly position them left-to-right
            petal.style.left = Math.random() * 100 + "vw";
            
            // Randomly vary the speed so they don't fall in a perfect line
            petal.style.animationDuration = (Math.random() * 3 + 2) + "s";
            
            // This offset helps them "pile up" at slightly different heights at the bottom
            petal.style.setProperty('--random-offset', Math.random() * 5);
            
            document.body.appendChild(petal);
        }, i * 15); // Stagger the start times so they fall one by one
    }
}
