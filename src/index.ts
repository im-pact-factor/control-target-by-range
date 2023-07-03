const range = document.getElementById("range") as HTMLInputElement;
const box = document.querySelector(".box") as HTMLDivElement;
const container = document.querySelector(".container") as HTMLDivElement;
const MAX_COLOR_VALUE = 255;
const MID_COLOR_VALUE = 128;
const PERCENTAGE = 100;

const updateBoxStyle = (event: Event) => {
  const { value } = event.target as HTMLInputElement;
  const numericValue = parseInt(value);

  const updateBoxPosition = (box: HTMLDivElement, value: number) => {
    const left = `${
      (value / 100) * (container.offsetWidth - box.offsetWidth)
    }px`;
    box.style.left = left;
  };

  const updateBoxColor = (box: HTMLDivElement, value: number) => {
    //初始绿色是：#008000 黄色是：#FFFF00 RGB是红绿蓝
    //padStart(2, "0")处理下十进制转化为十六进制后只有ABCDEF的特殊情况
    const redValue = Math.floor((value / PERCENTAGE) * MAX_COLOR_VALUE)
      .toString(16)
      .padStart(2, "0");
    const greenValue = Math.floor(
      MID_COLOR_VALUE +
        (value / PERCENTAGE) * (MAX_COLOR_VALUE - MID_COLOR_VALUE)
    )
      .toString(16)
      .padStart(2, "0");
    const color = `#${redValue}${greenValue}00`;
    box.style.backgroundColor = color;
  };

  const updateBoxRadius = (box: HTMLDivElement, value: number) => {
    const borderRadius = `${value}%`;
    box.style.borderRadius = borderRadius;
  };

  updateBoxPosition(box, numericValue);
  updateBoxColor(box, numericValue);
  updateBoxRadius(box, numericValue);
};

range.addEventListener("input", updateBoxStyle);
