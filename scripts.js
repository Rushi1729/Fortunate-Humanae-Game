var attr = true;
var i = 0;

const freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// function addimage() {
//   const image = document.createElement("img");
//   image.src = "/_one.png";
//   let i = 1;
//   while (i <= 10) {
//     const element1 = document.getElementById(i);
//     element1 = image;
//     i = i + 1;
//   }
// }

function myfunc() {
  return Math.floor(Math.random() * 5) + 1;
}

function setimage() {
  let i = 1;
  while (i <= 10) {
    let x = freq[i - 1];
    let v = "/_" + x + ".png";
    const element1 = document.getElementById(i);
    element1.src = v;
    console.log(v);
    i = i + 1;
  }
}
// function checker(v) {
//   let i = 1;
//   while (i <= 5) {
//     const element1 = document.getElementById(v + i);
//     if (element1.innerText != "4") {
//       return false;
//     }
//     i = i + 1;
//   }
//   return true;
// }

function score(v1, v2) {
  const element1 = document.getElementById("p1");
  const element2 = document.getElementById("p2");
  element1.innerText = "Player1 score is " + v1;
  element2.innerText = "Player2 score is " + v2;
}

function reset() {
  var i = 1;
  while (i <= 10) {
    const element1 = document.getElementById(i);
    element1.src = "_0.png";
    i = i + 1;
  }
  const element = document.getElementById("play");
  element.innerText = "Play";
  const element2 = document.getElementById("clx");
  element2.innerText = "Welcome to the game";
  const element3 = document.getElementById("p1");
  element3.innerText = "";
  const element4 = document.getElementById("p2");
  element4.innerText = "";
}

function rolldice(v) {
  let element1 = document.getElementById("clx");
  if (v <= 5) {
    element1.innerText = "Player1 got " + v;
  } else {
    v = v - 5;
    element1.innerText = "Player2 got " + v;
  }
}
let cnt1 = 0;
let cnt2 = 0;

function play() {
  const element = document.getElementById("play");
  if (element.innerText == "Play") {
    //addimage();
    score(cnt1, cnt2);
    element.innerText = "player1 will play now";
  } else if (element.innerText == "player1 will play now") {
    var v = myfunc();
    rolldice(v);
    if (freq[v - 1] != "5") {
      freq[v - 1] = freq[v - 1] + 1;
      if (freq[v - 1] == "5") cnt1 = cnt1 + 1;
      setimage();
    }
    score(cnt1, cnt2);
    //console.log(element.innerText);
    element.innerText = "player2 will play now";
    if (cnt1 == "5") {
      alert("player 1 won the game");
      reset();
    }
  } else {
    var v = myfunc();
    v = v + 5;
    rolldice(v);
    if (freq[v - 1] != "5") {
      freq[v - 1] = freq[v - 1] + 1;
      if (freq[v - 1] == "5") cnt2 = cnt2 + 1;
      setimage();
    }
    //console.log(element.innerText);
    score(cnt1, cnt2);
    element.innerText = "player1 will play now";
    if (cnt2 == "5") {
      alert("player 2 won the game");
      reset();
    }
  }
}

function play1() {
  const element1 = document.getElementById("1");
  element1.src = "_one.png";
}
