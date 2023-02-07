let player1, player2, marks1 = 0, marks2 = 0;

for (let i = 0; i < 3; i++) {
  // Generating Player1 input
  let randomNum = Math.floor(Math.random() * 3) + 1
  switch (randomNum) {
    case 1:
      player1 = "snake"
      break
    case 2:
      player1 = "qater"
      break
    case 3:
      player1 = "gun"
      break;
    default:
      player1 = ""
  }
  // Getting Player2 input
  player2 = prompt("You are Player 2. Please choose Snake, Water, Gun");
  player2 = player2.toLowerCase()

  // Matching Inputs
  if (player1 == "snake" && player2 == "water")
    marks1 += 1;

  else if (player1 == "water" && player2 == "snake")
    marks2 += 1;

  else if (player1 == "gun" && player2 == "snake")
    marks1 += 1;

  else if (player1 == "snake" && player2 == "gun")
    marks2 += 1;

  else if (player1 == "water" && player2 == "gun")
    marks1 += 1;

  else if (player1 == "gun" && player2 == "water")
    marks2 += 1;

  else if (player1 == "water" && player2 == "water")
    ""

  else if (player1 == "gun" && player2 == "gun")
    ""

  else if (player1 == "snake" && player2 == "snake")
    ""

  else
    alert("Invalid Input" + "\n Player 1: " + player1 + " - " + "Player 2: " + player2)
}
if (marks1 > marks2)
  alert("Computer Win")
if (marks1 < marks2)
  alert("You Win")
if (marks1 == marks2)
  alert("Draw")
// console.log("Player 1: ", player1, " - ", "Player 2: ", player2)
console.log("Player 1: ", marks1, " - ", "Player 2: ", marks2)
// switch (player1) {
//   case "Snake":
//     alert("Computer Won")
//     break;
//   case (player1 == "Water" && player2 == "Snake"):
//     alert("you Won")
//     break;
//   case (player1 == "Gun" && player2 == "Snake"):
//     alert("Computer Won")
//     break;
//   case (player1 == "Snake" && player2 == "Gun"):
//     alert("you Won")
//     break;
//   case (player1 == "Water" && player2 == "Gun"):
//     alert("Computer Won")
//     break;
//   case (player1 == "Water" && player2 == "Gun"):
//     alert("you Won")
//     break;
//   default:
//     alert("Draw")
// }