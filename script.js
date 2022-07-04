const diceButton = document.querySelector(".advice-card__dice");
const adviceIdContainer = document.querySelector(".advice-card__advice-id");
const adviceTextContainer = document.querySelector(".advice-card__advice-text");

const getAdvice = async function () {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Could not generate an advice. Please try again later.");
  }
};

diceButton.addEventListener("click", async function () {
  try {
    const advice = await getAdvice();

    adviceIdContainer.textContent = `Advice #${advice.slip.id}`;
    adviceTextContainer.textContent = `"${advice.slip.advice}"`;
  } catch (error) {
    adviceIdContainer.textContent = `Error`;
    adviceTextContainer.textContent = `${error.message}`;
  }
});
