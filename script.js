const element = document.getElementById("logo");

const getRandomColor = () => {
  let color = "#";
  color += Math.floor(Math.random() * 16777215).toString(16);
  return color;
};

element.onanimationiteration = () => {
  const color = getRandomColor();
  console.log(`Logo colour is: ${color}`);
  element.style.fill = color;
};
