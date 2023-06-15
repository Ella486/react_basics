import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };

        //this.handleConfirm = this.handleConfirm.bind(this); // bind code
    }

    //bind 사용시 쓰이는 function
    /*handleConfirm() { 
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    } */

    handleConfirm = () => { // Arrow function으로 변경함
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button 
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;
