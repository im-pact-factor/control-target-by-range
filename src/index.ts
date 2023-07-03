const range = document.getElementById("range") as HTMLInputElement;
const box = document.querySelector(".box") as HTMLDivElement;
const container = document.querySelector(".container") as HTMLDivElement;

const updateBoxStyle = (event: Event) => {
  const { value } = event.target as HTMLInputElement;
  const numericValue = parseInt(value);
  const left = `${
    (numericValue / 100) * (container.offsetWidth - box.offsetWidth)
  }px`;
  const redValue = Math.floor((numericValue / 100) * 255).toString(16);
  const greenValue = Math.floor(
    128 + (numericValue / 100) * (255 - 128)
  ).toString(16);
  const color = `#${redValue}${greenValue}00`;
  const borderRadius = `${value}%`;

  box.style.left = left;
  box.style.backgroundColor = color;
  box.style.borderRadius = borderRadius;
};

range.addEventListener("input", updateBoxStyle);
