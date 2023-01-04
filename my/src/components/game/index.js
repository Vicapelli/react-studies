import React from 'react';
import './index.css'

function Square(props)  {
    return (
        <button className="square" onClick={props.onClick}>   
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            status: 'Next player: X'
        }

    }

    handleClick(i) {
        const squares = this.state.squares;
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });

        const winner = calculateWinner(this.state.squares);
        if(winner) {
            this.setState({status: 'Winner: ' + winner})
            this.props.parentCallback(winner);
        } else {
            this.setState({status: 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')});
        }
    }

    renderSquare(i) {
        return(
            <Square 
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }

    render() {
        return (
            <div>
                <div className="status">{this.state.status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    state = {
        winner: null
    }

    handleCallback = (childData) =>{
        this.setState({winner: childData})
    }

    render() {
        return (
            <div className="game">   
                <div className="game-board">
                    <Board parentCallback = {this.handleCallback}/>
                </div>
                <div className="game-info">
                    <div> Componente GAME: {this.state.winner}</div>
                    <ol>{/*TODO*/}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;