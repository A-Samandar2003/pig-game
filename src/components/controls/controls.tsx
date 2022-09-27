import { FC } from "react";

interface ControlsProps {
    resetGame: () => void;
    rollDIce: () => void;
    switchPlayer: () => void;
}

const Controls: FC<ControlsProps> = ({ resetGame, rollDIce, switchPlayer }) => {

    return (
        <>
            <button onClick={resetGame} className="btn btn--new">🔄 New game</button>
            <button onClick={rollDIce} className="btn btn--roll">🎲 Roll dice</button>
            <button onClick={switchPlayer} className="btn btn--hold">📥 Hold</button>
        </>
    );
}

export default Controls;