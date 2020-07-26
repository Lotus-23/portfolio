const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn = 0;

    this.start = function() {
        const config = { childList: true };
        const observer = new MutationObserver(() => takeTurn());
        board.positions.forEach((el) => observer.observe(el, config));
        takeTurn();
    }
    
    function takeTurn(){
        if (board.checkForWinner()) {
            return;
        } 
        if (turn % 2 === 0) {
            humanPlayer.takeTurn();
        } else {
            computerPlayer.takeTurn();
        }
        
        turn++;
    }
}

function Board() {
    this.positions = Array.from(document.querySelectorAll('.column'));

    // 0 1 2
    // 3 4 5
    // 6 7 8

    this.checkForWinner = function() {
        let winner = false;
        const winningCombinantions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const positions = this.positions;

        winningCombinantions.forEach((wc) => {
            const pos0InnerText = positions[wc[0]].innerText;
            const pos1InnerText = positions[wc[1]].innerText;
            const pos2InnerText = positions[wc[2]].innerText;
            const isWinningCombo = pos0InnerText !== '' && pos0InnerText === pos1InnerText && pos1InnerText === pos2InnerText;
            
            if(isWinningCombo) {
                winner = true;
                wc.forEach((index) => {
                    positions[index].className += ' winner';
                }) 
            }
        });
        if (winner) {console.log("Congratulations. You have won!")
    }

        return winner;
    }
}

function HumanPlayer(board){

    this.takeTurn = function() {
        board.positions.forEach(el => el.addEventListener('click', handleTurnTaken));

    }

    function handleTurnTaken(event) {
        event.target.innerText = 'X'
        board.positions.forEach((el) => el.removeEventListener('click', handleTurnTaken));
    }

}

function ComputerPlayer(board){
    
    this.takeTurn = function() {
        const availablePositions = board.positions.filter((p) => p.innerText === '');
        const move = Math.floor(Math.random() * availablePositions.length);
        availablePositions[move].innerText = 'O';
    }
}
