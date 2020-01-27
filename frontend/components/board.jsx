import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);

    }

    handleDrop() {
        return (e) => {
            e.preventDefault();

            const card_id = e.dataTransfer.getData('card_data');

            const card = document.getElementById(card_id);
            card.style.display = "block";

            e.target.appendChild(card);

        }
    }

    handleDragOver() {
        return (e) => {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div>
                Hello Boarc
            </div>
        )
    }
}

export default Board;