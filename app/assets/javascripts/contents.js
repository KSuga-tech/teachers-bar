// $(function(){
//   $('#sheet').on('.keisanSheet__submit', function(e){
//     e.preventDefault();
//     console.log(this)
//     let formData = new FormData(this);

//   })
// })

window.addEventListener("load", function () {
  let printBtn = document.getElementById("print");
  printBtn.addEventListener("click", function() {
    let hideLeft = document.querySelector(".leftSide");
    let hideHeader = document.querySelector(".header");
    let changeRight = document.querySelector(".rightSide");
    let hide = document.getElementsByClassName("hide");
      // hideLeft.style.display = 'none';
      // classList.add(hide[0].classList);
  console.log(hideLeft.classList);
  console.log(hide[0].classList);
  hideLeft.classList.add(hide[0].classList);
  hideHeader.style.display = 'none';
  changeRight.style.width = '100%';
  window.print();
  hideLeft.classList.remove(hide[0].classList);
  hideHeader.style.display = 'flex';
  changeRight.style.width = 'calc( 100% - 300px )';
  });

  let btn = document.getElementById("submit");
  btn.addEventListener("click", function () {
    let num1 = document.getElementById("num1").value;
    let symbol = document.getElementById("calc_symbol").value;
    let num2 = document.getElementById("num2").value;
    let sheet = document.getElementById("main");
    sheet.innerHTML = '';

    for (let x = 0; x < 2; x++){
     let newElement = document.createElement("div");
      let idNumber = "mondai" + x
      newElement.setAttribute("class", "mondai", "id", idNumber);
      sheet.appendChild(newElement);

      for (let i = 1; i < 11; i++) {
        let number = x * 10 + i;
        let rand1 = Math.floor( Math.random() * (10 ** (num1 - 1) * 9) + 10 ** (num1 - 1));
        let rand2 = Math.floor( Math.random() * (10 ** (num2 - 1) * 9) + 10 ** (num2 - 1));
        let rand3 = 0
        if (symbol == "-") {
          if (rand1 < rand2) {
            rand3 = rand2;
            rand2 = rand1;
            rand1 = rand3;
          }
        }

        let answers = 0
        if (symbol == '+') {
          answers = rand1 + rand2;
        } else if (symbol == '-') {
          answers = rand1 - rand2;
        } else if (symbol == '×') {
          answers = rand1 * rand2;
        } else {
          answers = rand1 / rand2;
        }
 
        let html = `
          <div class="mondai__block">
            <div class="mondai__number">
              (${number})
            </div>
            <div class="mondai__siki">
              ${rand1} ${symbol} ${rand2} <span class="answer"> = ${answers} </span>
            </div>
          </div>
          `
        newElement.innerHTML += html;
        // console.log(rand1 + symbol + rand2);
      }
    }
  });
});