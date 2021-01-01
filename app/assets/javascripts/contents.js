// $(function(){
//   $('#sheet').on('.keisanSheet__submit', function(e){
//     e.preventDefault();
//     console.log(this)
//     let formData = new FormData(this);

//   })
// })

window.addEventListener("load", function () {

  // プリントの印刷機能
  let printBtn = document.getElementById("print");
  printBtn.addEventListener("click", function() {

    // 印刷ボタンを押すとプリント部分以外が非表示になる。
    let hideLeft = document.querySelector(".leftSide");
    let hideHeader = document.querySelector(".header");
    let changeRight = document.querySelector(".rightSide");
    let hide = document.getElementsByClassName("hide");
    hideLeft.classList.add(hide[0].classList);
    hideHeader.style.display = 'none';
    changeRight.style.width = '100%';

    // プリントダイアログが表示される。
    window.print();

    // プリントダイアログを終了すると、元のレイアウトに戻る。
    hideLeft.classList.remove(hide[0].classList);
    hideHeader.style.display = 'flex';
    changeRight.style.width = 'calc( 100% - 300px )';
  });
  // 割り算を選択した時点で「答えの選択肢」が現れる。
  let symbol0 = document.querySelector('#calc_symbol')
  symbol0.addEventListener('change', warizanKotaeSyurui);

  function warizanKotaeSyurui() {
    console.log(symbol0.value)
  }

  // 問題の生成機能,「答えの表示」ボタン表示
  let btn = document.getElementById("submit");
  btn.addEventListener("click", function () {
    let answerBtn = document.querySelector(".keisanSheet__answer");
    answerBtn.style.display = 'inline-block';
    let num1 = document.getElementById("num1").value;
    let symbol = document.getElementById("calc_symbol").value;
    let num2 = document.getElementById("num2").value;
    let sheet = document.getElementById("main");
    sheet.innerHTML = '';

    // 問題を２列にする。
    for (let x = 0; x < 2; x++){
     let newElement = document.createElement("div");
      let idNumber = "mondai" + x
      newElement.setAttribute("class", "mondai", "id", idNumber);
      sheet.appendChild(newElement);

      // 問題は１列に10問ずつ作られる。
      for (let i = 1; i < 11; i++) {
        let number = x * 10 + i;
        let rand1 = Math.floor( Math.random() * (10 ** (num1 - 1) * 9) + 10 ** (num1 - 1));
        let rand2 = Math.floor( Math.random() * (10 ** (num2 - 1) * 9) + 10 ** (num2 - 1));
        let rand3 = 0

        // 引き算、または、同じ桁数同士の割り算の時、
        // 答えが必ず0以上になるようにする。
        let divAns = document.getElementById('divAns');
        if (symbol == "-" || (symbol == "÷" && num1 == num2)) {
          divAns.style.display = 'none';
          if (rand1 < rand2) {
            rand3 = rand2;
            rand2 = rand1;
            rand1 = rand3;
          }
        // 割り算の時、答えの表示を選択するボタンが現われる。
        // } else if (symbol == "÷") {
        //   divAns.style.display = 'block';
        // } else {
        //   divAns.style.display = 'none';
        //   }

        // 解答の生成
        let answers
        switch(symbol) {
          case '+':
            answers = rand1 + rand2;
            break;
          case '-':
            answers = rand1 - rand2;
            break;
          case '×':
            answers = rand1 * rand2;
            break;
          default:
            if ((rand1 % rand2) == 0) {
              answers = Math.trunc(rand1 / rand2);
            } else {
              answers = Math.trunc(rand1 / rand2) + 'あまり' + (rand1 % rand2);
            }
            break;

        //   let divisionAns = document.querySelector("#divAns").value
        //   console.log(divisionAns);
        //   switch (divisionAns) {
        //     case 0:
        //       let surplus = rand1 % rand2
        //       answers = rand1 / rand2;
        //       break;

        //     case 1:
        //       answers = rand1 / rand2;
        //       break;
        }
          


        // 問題と解答を表示する。
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
      }
    }
  };

  // 答えの表示／非表示を切り替える機能
  let displayAnswer = document.getElementById("displayAnswer");
  // 答えの表示
    displayAnswer.addEventListener("click", function () {
      if (displayAnswer.value == '答えの表示') {
        displayAnswer.setAttribute('value', '答え非表示');
        let answer = document.querySelectorAll(".answer");
        answer.forEach(function(displayAnswers){
          displayAnswers.style.display = 'inline';
        });
      } else {
        displayAnswer.setAttribute('value', '答えの表示');
        let answer = document.querySelectorAll(".answer");
        answer.forEach(function(displayAnswers){
          displayAnswers.style.display = 'none';
        });
      };
    });
  });
});