/**
 * Initializes the page and sets an interval to update the colors of `.content` elements.
 *
 * This function is called when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".content");
    const timeout = 1; // Interval time in seconds
    updateColors(content);
    setInterval(() => updateColors(content), timeout * 1000);
});

/**
 * Updates the colors of the specified element.
 *
 * @param {HTMLElement} element - The DOM element whose colors are to be updated.
 */
function updateColors(element) {
    const { borderColor, textColor, bgColor } = changeColor();
    element.style.borderColor = borderColor;
    element.style.color = textColor;
    element.style.backgroundColor = bgColor;
}

/**
 * Generates a new color palette based on a random base color.
 *
 * @returns {Object} An object containing the following properties:
 * - {string} borderColor - The border color in HSL format.
 * - {string} textColor - The text color in HSL format.
 * - {string} bgColor - The background color in HSL format.
 */
function changeColor() {
    const baseHue = Math.floor(Math.random() * 360);
    const borderColor = `hsl(${baseHue}, 70%, 50%)`;
    const textColor = `hsl(${(baseHue + 60) % 360}, 70%, 50%)`; // Analogous
    const bgColor = `hsl(${(baseHue + 240) % 360}, 70%, 95%)`; // Complementary
    return { borderColor, textColor, bgColor };
}
