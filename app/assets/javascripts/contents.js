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
    let hideRange = document.querySelectorAll(".leftSide, .header");
    let hide = document.getElementsByClassName("hide");

    for (let y = 0; y < 2; y++ ){
      hideRange[y].classList.add(hide[0].classList);
    }
    // console.log(hideRange[1].classList);
    // console.log(hide[0].classList);
    // hideRange[1].classList.add(hide[0].classList);
    console.log(hideRange[1].classList);
    // window.print();
    // for (let y = 0; y < 2; y++ ){
    //   hideRange[y].classList.remove(hide[0].classList);
    // }
    // hideRange.classList.remove(hide);
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
        console.log (symbol)
        if (symbol == "-") {
          if (rand1 < rand2) {
            rand3 = rand2;
            rand2 = rand1;
            rand1 = rand3;
          }
        }
        let html = `
          <div class="mondai__block">
            <div class="mondai__number">
              (${number})
            </div>
            <div class="mondai__siki">
              ${rand1} ${symbol} ${rand2}
            </div>
          </div>
          `
        newElement.innerHTML += html;
        // console.log(rand1 + symbol + rand2);
      }
    }
  });
});