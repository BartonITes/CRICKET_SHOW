function oddEvenCricketGame() {
    let i = 1;
    let tossChoice = parseInt(prompt("Enter 1 for odd or 2 for even to proceed with the toss:"));
    let computerChoice = tossChoice === 1 ? 2 : 1;
    let choice;
    let toss, tossUser, outcome;

    alert("A GAME OF ODD OR EVEN CRICKET\nChoose numbers 1 to 5 for toss.\nChoose numbers 0 to 6 while playing.\nIf the same number is generated by the computer and yourself, the batting side loses a wicket.\nIt will be a game of two wickets.");

    // Toss Phase
    while (i > 0) {
        toss = Math.floor(Math.random() * 5) + 1;
        tossUser = parseInt(prompt("Enter a toss number between 1 and 5:"));
        
        if (toss === tossUser) {
            alert("No sames during toss. Try again.");
            continue;
        }
        
        outcome = toss + tossUser;
        
        if ((outcome % 2 === 0 && tossChoice === 2) || (outcome % 2 !== 0 && tossChoice === 1)) {
            choice = parseInt(prompt("You won the toss! Enter 1 for batting or 2 for bowling:"));
            break;
        } else if ((outcome % 2 === 0 && computerChoice === 2)) {
            const tossWin = Math.floor(Math.random() * 2) + 1;
            if (tossWin === 1) {
                alert("Computer won the toss and chose to bat.");
                choice = 2;
            } else {
                alert("Computer won the toss and chose to bowl.");
                choice = 1;
            }
            break;
        }
    }

    let wicket = 0;
    let runs = 0;
    let runs2 = 0;

    // Batting First
    if (choice === 1) {
        while (i > 0) {
            const play2 = Math.floor(Math.random() * 7);
            const userPlay2 = parseInt(prompt("Enter runs (0-6):"));

            if (userPlay2 < 0 || userPlay2 > 6) {
                alert("Error: Enter a valid run between 0 and 6.");
                continue;
            }
            
            if (play2 === userPlay2) {
                wicket++;
                alert("Lost a wicket!");
            } else {
                runs += userPlay2;
            }

            if (wicket === 2) {
                alert(`Oops! Lost two wickets for ${runs} runs.`);
                break;
            }
        }

        // Computer Batting
        wicket = 0;
        while (i > 0) {
            const play2 = Math.floor(Math.random() * 7);
            const userPlay2 = parseInt(prompt("Enter your bowl (0-6):"));

            if (userPlay2 < 0 || userPlay2 > 6) {
                alert("Error: Enter a valid bowl between 0 and 6.");
                continue;
            }
            
            if (play2 === userPlay2) {
                wicket++;
                alert("Gained a wicket! One to go.");
            } else {
                runs2 += play2;
            }

            if (wicket === 2 || runs2 >= runs) {
                const result = runs2 >= runs ? `Computer chased the score! You lost by ${runs2 - runs} runs.` : `You defended the score! You won by ${runs - runs2} runs.`;
                alert(result);
                break;
            }
        }
    }

    // Bowling First
    if (choice === 2) {
        while (i > 0) {
            const play2 = Math.floor(Math.random() * 7);
            const userPlay2 = parseInt(prompt("Enter your bowl (0-6):"));

            if (userPlay2 < 0 || userPlay2 > 6) {
                alert("Error: Enter a valid bowl between 0 and 6.");
                continue;
            }
            
            if (play2 === userPlay2) {
                wicket++;
                alert("Gained a wicket! One to go.");
            } else {
                runs2 += play2;
            }

            if (wicket === 2) {
                alert(`Gained two wickets! Computer scored ${runs2} runs. You need ${runs2 + 1} runs to win.`);
                break;
            }
        }

        // Player Batting to Chase the Target
        wicket = 0;
        runs = 0;
        
        while (i > 0) {
            const play2 = Math.floor(Math.random() * 7);
            const userPlay2 = parseInt(prompt("Enter runs (0-6):"));

            if (userPlay2 < 0 || userPlay2 > 6) {
                alert("Error: Enter a valid run between 0 and 6.");
                continue;
            }
            
            if (play2 === userPlay2) {
                wicket++;
                alert("Lost a wicket!");
            } else {
                runs += userPlay2;
            }

            if (wicket === 2 || runs >= runs2) {
                const result = runs >= runs2 ? `Congratulations! You won the game by ${2 - wicket} wickets.` : `Oops! Lost two wickets and lost by ${runs2 - runs} runs.`;
                alert(result);
                break;
            } else {
                alert(`Your score: ${runs}. You need ${runs2 - runs} more runs to win.`);
            }
        }
    }
}

oddEvenCricketGame();
      