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

        // 引き算の時、答えが必ず0以上になるようにする。
        if (symbol == "-") {
          if (rand1 < rand2) {
            rand3 = rand2;
            rand2 = rand1;
            rand1 = rand3;
          }
        }

        // 解答の生成
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
  });

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