import { useState } from "react";

type SquareValue = "X" | "O" | null;
type BoardState = SquareValue[];

export default function TicTacToe() {
  // Game state with TypeScript types
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<SquareValue>(null);
  const [gameHistory, setGameHistory] = useState<BoardState[]>([
    Array(9).fill(null),
  ]);

  // Calculate winner with TypeScript return type
  const calculateWinner = (squares: BoardState): SquareValue => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  // Handle square click with TypeScript parameter type
  const handleClick = (index: number): void => {
    // Don't allow click if square is filled or game is won
    if (board[index] || winner) return;

    // Create a copy of the board
    const newBoard: BoardState = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    // Update state
    setBoard(newBoard);
    setIsXNext(!isXNext);

    // Check for winner
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }

    // Update game history
    setGameHistory([...gameHistory, newBoard]);
  };

  // Reset game
  const resetGame = (): void => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setGameHistory([Array(9).fill(null)]);
  };

  // Jump to specific move in history
  const jumpToMove = (move: number): void => {
    setBoard(gameHistory[move]);
    setIsXNext(move % 2 === 0);
    setWinner(null);
  };

  // Check for draw
  const isDraw: boolean = board.every((square) => square) && !winner;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Tic-Tac-Toe</h1>

      {/* Status message */}
      <div className="mb-4 text-xl">
        {winner
          ? `Winner: ${winner}`
          : isDraw
          ? "Game Draw!"
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </div>

      {/* Game board */}
      <div className="grid grid-cols-3 gap-2 mb-6 bg-gray-200 p-2 rounded-lg">
        {board.map((square, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`w-20 h-20 text-3xl font-bold flex items-center justify-center 
                      ${square ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}
                      ${winner && square === winner ? "bg-green-100" : ""}`}
            disabled={!!square || !!winner}
          >
            {square}
          </button>
        ))}
      </div>

      {/* Game controls */}
      <button
        onClick={resetGame}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-6 transition-colors"
      >
        Reset Game
      </button>

      {/* Move history */}
      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">Move History</h2>
        <ol className="space-y-1 max-h-40 overflow-y-auto">
          {gameHistory.map((history, move) => (
            <li key={move}>
              <button
                onClick={() => jumpToMove(move)}
                className={`px-3 py-1 rounded w-full text-left ${
                  move === gameHistory.length - 1
                    ? "bg-blue-100"
                    : "hover:bg-gray-200"
                }`}
              >
                {move === 0 ? "Go to game start" : `Go to move #${move}`}
                {move === gameHistory.length - 1 && " (current)"}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
