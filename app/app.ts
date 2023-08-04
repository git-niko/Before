function startGame() {
    // starting a new game

    const playerName: string | undefined = getInputValue('playerName');
    logPlayer(playerName);

    postScore(80, playerName);
    postScore(-5, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
    // type assertion syntax #1 - OLD SYNTAX
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    // type assertion syntax #2 - NEWER SYNTAX
    const inputElement2: HTMLInputElement = document.getElementById(elementID) as HTMLInputElement;

    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
    
    // This variable can now be assigned 
    // any function that takes a string
    // parameter and returns void
    let logger: (value: string) => void;

    if (score < 0) {
        // b/c logError and logMessage variables
        // declared below have a string parameter
        // and void return, they can be assigned
        // to the logger variable created above
        logger = logError;
    } else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    // Calling the logger anonymous function & passing it 
    logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string): void => console.log(message);

function logError(err: string): void {
    console.error(err);
}