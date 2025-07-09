let userscore = 0;
let userscore_para = document.querySelector("#user-score");
let computer_score = 0;
let compscore_para = document.querySelector("#computer-score");


let choises = document.querySelectorAll(".choise");

let msg = document.querySelector("#msg");

choises.forEach((choise) => {
    console.log(choise);

    choise.addEventListener("click", () => {
        let user_choise = choise.getAttribute("id");

        playgame(user_choise)
    })
})

const playgame = (user_choise) => {

    console.log(" your choice " + user_choise);

    let comp_choice = computer_choice();
    console.log(" computer choice " + comp_choice);


    if (user_choise === comp_choice) {
        // console.log("Draw match !")
        msg.innerText = "Draw match Play Again!"

    } else {

        let user_win = true;

        if (user_choise == "rock")
        //scissor or paper
        {
            user_win = comp_choice === "paper" ? false : true;
        }
        else if (user_choise === "paper") {
            //rock or scissor
            user_win = comp_choice === "scissor" ? false : true;
        } else {

            user_win = comp_choice === "paper" ? true : false;
        }

        winner(user_win, user_choise, comp_choice);

    }
}

const computer_choice = () => {
    let arr = ["rock", "paper", "scissor"];

    let num = Math.floor(Math.random() * 3);

    return arr[num];
}

const winner = (user_win, user_choise, comp_choice) => {
    if (user_win) {
        msg.innerHTML = `You Win  Your ${user_choise} beats ${comp_choice} &#128526`;

        userscore++;
        userscore_para.innerText=userscore;
        

    } else {
        msg.innerHTML = `You loose  Computer ${comp_choice}  beats ${user_choise} &#128530`;

         computer_score++;
        compscore_para.innerText=computer_score;
       

    }
}

userScoreElem.classList.add("pulse");
setTimeout(() => userScoreElem.classList.remove("pulse"), 400);
