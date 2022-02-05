const makeBigger = () => {
   let textList = document.querySelectorAll("header > h1, .content > p");
   
   for (let index = 0; index < textList.length; index++) {
      let elem = textList[index];
      let currSize = parseFloat(window.getComputedStyle(elem, null).getPropertyValue("font-size"));
      elem.style.fontSize = (currSize + 1) + "px";
   }
};

const makeSmaller = () => {
   let textList = document.querySelectorAll("header > h1, .content > p");
   
   for (let index = 0; index < textList.length; index++) {
      let elem = textList[index];
      let currSize = parseFloat(window.getComputedStyle(elem, null).getPropertyValue("font-size"));
      elem.style.fontSize = (currSize - 1) + "px";
   }
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
