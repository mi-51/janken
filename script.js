let rock_img = "<img src='./img/rock.png'>";
let scissors_img = "<img src='./img/scissors.png'>";
let paper_img = "<img src='./img/paper.png'>";


window.onload = function () {
  let your_choice = false;
  if (your_choice === false) {
    document.getElementById("rock").onmousedown = function () {
      document.getElementById("your_hand").innerHTML = rock_img;
      judge(rock_img);
    }

    document.getElementById("scissors").onmousedown = function () {
      document.getElementById("your_hand").innerHTML = scissors_img;
      judge(scissors_img);
    }

    document.getElementById("paper").onmousedown = function () {
      document.getElementById("your_hand").innerHTML = paper_img;
      judge(paper_img);
    }
    your_choice = true;
  }
}


//乱数生成
function dice() {
  return Math.floor(Math.random() * 3) + 1;
}

//コンピュータ側の手と勝敗判定
let com_show = false;
function judge(your_hand) {
  if (com_show == false) {

    let dice_result = dice();
    let com_hand;

    //乱数の数値でCOMの出す手を指定
    if (dice_result == 1) {
      com_hand = rock_img;
    } else if (dice_result == 2) {
      com_hand = scissors_img;
    } else {
      com_hand = paper_img;
    }
    document.getElementById("com-hand").innerHTML = com_hand;

    //勝敗判定部分
    let message;
    //あいこの時の勝敗判定
    if (your_hand === com_hand) {
      message = "あいこです";
    }

    //自分がグーの時の勝敗判定
    else if (your_hand === "グー") {
      if (com_hand === "パー") {
        message = "あなたの負けです";
      }
      else {
        message = "あなたの勝ちです！";
      }
    }

    //自分がチョキの時の勝敗判定
    else if (your_hand === "チョキ") {
      if (com_hand === "グー") {
        message = "あなたの負けです";
      }
      else {
        message = "あなたの勝ちです！";
      }
    }

    //自分がパーの時の勝敗判定
    else {
      if (com_hand === "チョキ") {
        message = "あなたの負けです";
      }
      else {
        message = "あなたの勝ちです！";
      }
    }

    com_show = true;
    document.getElementById("rock").disabled = true;
    document.getElementById("scissors").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("result_message").innerHTML = message;
  }
}

//2回以上クリック禁止
// ('.button').disabled = true;


//リロードボタン
let reload = document.getElementById('reload');
reload.addEventListener('click', function () {
  window.location.reload();
});