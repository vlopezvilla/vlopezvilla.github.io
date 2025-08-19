document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi, my name is";
    const nameIntro = document.getElementById("name-intro");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            nameIntro.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed (milliseconds)
        }
    }

    typeEffect();
});
