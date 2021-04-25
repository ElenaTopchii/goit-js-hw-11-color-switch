const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
}

let intervalId = null;
refs.start.addEventListener('click', () => {
    refs.start.disabled = true;
    intervalId = setInterval(() => {
        const randomColor = randomIntegerFromInterval(0, colors.length - 1);
        document.body.style.backgroundColor = colors[randomColor];
    }, 1000)
    
});

refs.stop.addEventListener('click', () => {
    clearInterval(intervalId);
    refs.start.disabled = false;
})