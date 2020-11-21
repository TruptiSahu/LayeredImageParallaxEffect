const layeredImages = document.querySelectorAll('.layered__images img');

document.addEventListener('mousemove', (e) => {
  const windowSize = window.innerWidth;
  let value;
  for (let i = 0; i < layeredImages.length; i++) {
    switch (i + 1) {
      case 1:
        value = 25;
        break;
      case 2:
        value = 50;
        break;
      case 3:
        value = 75;
        break;
      case 4:
        value = 100;
        break;
    }
    let x = Math.ceil((e.clientX / windowSize) * value);
    let y = -x;
    layeredImages[i].style.transform = `translate(${x}px, ${y}px)`;
    console.log(`${i} : ${x}`);
  }
});
