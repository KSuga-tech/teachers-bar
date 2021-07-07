// $(function(){
//   $('#sheet').on('.keisanSheet__submit', function(e){
//     e.preventDefault();
//     console.log(this)
//     let formData = new FormData(this);

//   })
// })

window.addEventListener("load", function () {

  // 問題の生成機能,「答えの表示」ボタン表示
  let multiBtn = document.getElementById("multiSubmit");
  let multiAnswerBtn = document.querySelector("#multiDisplayAnswer");
  multiBtn.addEventListener("click", function () {

    let y = 0;
    multiAnswerBtn.setAttribute('value', "答えの表示");
    // 左項の決定(配列の生成)
    let multiNum1 = document.getElementById("multiNum1").value;
    let leftTerms = array [];
    if (multiNum1 == 0) {
      for (let j = 0; j < 20; j++) {
        let randNum1 = Math.floor(Math.random() * 9) + 1;
        leftTerms.push(randNum1);
      }
    } else {
      for (let k = 0; k < 20; j++) {
        leftTerms.push(multiNum1);
      }
    }
    // let multiSymbol = querySelector("multiSymbol");
    let multiNum2 = document.getElementById("multiNum2").value;
    let sheet = document.getElementById("main");
    sheet.innerHTML = '';

    // 問題を２列にする。
    for (let x = 0; x < 2; x++){
      let multiNewElement = document.createElement("div");
      let multiIdNumber = "mondai" + x
      newElement.setAttribute("class", "mondai", "id", multiIdNumber);
      sheet.appendChild(newElement);

      // 問題は１列に10問ずつ作られる。
      for (let i = 1; i < 11; i++) {
        if (multiNum1 = 0) {
          multiNum
        }
        let multiNumber = x * 10 + i;
        let multiRand1 = Math.floor( Math.random() * 9) + 1;
        let multiRand2 = Math.floor( Math.random() * 9) + 1;
        // let multiRand3 = 0;

        // // 引き算、または、同じ桁数同士の割り算の時、
        // // 答えが必ず0以上になるようにする。

        // if (symbol == "-" || (symbol == "÷" && num1 == num2)) {
        //   if (rand1 < rand2) {
        //     rand3 = rand2;
        //     rand2 = rand1;
        //     rand1 = rand3;
        //   }
        }
        // 解答の生成開発途中(2/2)
        let multiAnswers
        switch(multiNum1) {
          case '0':
            multiAnswers = multiRand1 * multiRand2;
            break;
          default:
            multiAnswers = multiNum1 * multiNum2;
            break;
            }
        }
            

        // 問題と解答を表示する。
        let html = `
          <div class="mondai__block">
            <div class="mondai__number">
              (${multiNumber})
            </div>
            <div class="mondai__siki">
              ${rand1} ${symbol} ${rand2} <span class="answer"> = ${answers} </span>
            </div>
          </div>
          `
        newElement.innerHTML += html;
      }
    };

  // 答えの表示／非表示を切り替える機能
  // let displayAnswer = document.getElementById("displayAnswer");
  // 答えの表示
    let answer = document.querySelectorAll(".answer");
    answerBtn.disabled = false;
    answerBtn.addEventListener("click", switchBtn)
    function switchBtn() {
      if (y == 0) {
        this.setAttribute('value', "答え非表示");
        answer.forEach(function(displayAnswers){
          displayAnswers.style.display = 'inline';
        });
        y = 1;
      } else if (y == 1) {
        this.setAttribute('value', "答えの表示");
        answer.forEach(function(displayAnswers) {
          displayAnswers.style.display = 'none';
        });
        y = 0;
      }
    };
  });
});
// 方針が決まるまでここに置いておく。
//  <div class="nameDate">
//          <div class="nameDate__name">
//            なまえ　　　　　　　　
//          </div>
//          <div class="nameDate__date">
//            　　月　　日(　　)
//          </div>
//        </div>
//        <div class="scoreTime">
//          <div class="scoreTime__time">
//            タイム　　　分　　　秒
//          </div>
//          <div class="scoreTime__score">
//            とく点　　　　　点
//          </div>
//        </div>