import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { getRandomName } from '../constants/Names';

export default class Picker extends Component {

	constructor(props) {
        super(props);
        this.state = {
            playersToGo: props.names,
            namesRemaining: props.names,
            currentPlayer: props.currentPlayer,
            currentPlayerOption: '',
            isShowing: false,
            isShowDisabled: false,
            isNextDisabled: true,
            isHideDisabled: true,
            isCompleted: false
        }
    }
    
    onShowButtonClicked(){
        var name = this.state.currentPlayer;
        do {
            // grab a user from the namesRemaining array
           name = getRandomName(this.state.namesRemaining);
        } while(name === this.state.currentPlayer);
        // remove this user from the namesRemaining array
        var namesRemaining = [...this.state.namesRemaining];
        var index = namesRemaining.indexOf(name);
        namesRemaining.splice(index, 1);
        this.setState({ 
            namesRemaining: namesRemaining, 
            currentPlayerOption: name, 
            isShowing: true,
            isShowDisabled: true,
            isNextDisabled: true,
            isHideDisabled: false
        });
    }

    onDisableButtonClicked(){
        this.setState({
            isHideDisabled: true,
            isShowing: false,
            isShowDisabled: true,
            isNextDisabled: false
        });
    }

    onNextButtonClicked(){
        // remove current player from the list
        var playersToGo = [...this.state.playersToGo];
        var currentPlayerIndex = playersToGo.indexOf(this.state.currentPlayer);
        playersToGo.splice(currentPlayerIndex, 1);
        var nextPlayer = getRandomName(playersToGo);
        this.setState({
            playersToGo: playersToGo,
            currentPlayer: nextPlayer,
            isShowing: false,
            isHideDisabled: true,
            isNextDisabled: true,
            isShowDisabled: false,
            isCompleted: playersToGo.length <= 0
        });
    }

	render() {
		return (
			<div>
                

				<Jumbotron className="vertical-center">
					<div className="container">
                        { 
                            this.state.isCompleted ? 
                            <h1 className="display-2">Completed!</h1> : 
                            
                            <div>
                                <h1 className="display-2">Secret Santa Picker!</h1>
                                <br/>
                                <h2 className="display-3">{ this.state.currentPlayer } it's your turn!</h2>
                                <p className="lead">Press the "Show" button to see your person.</p>
                                <p className="lead">
                                    Press the "Disable" button to hide your person.
                                </p>
                                <p className="lead">Press the "Next" button to go to the next person.</p>
                                <br />
                                <div className="row text-center">
                                    <div className="col-4">
                                        <Button color="success" disabled={this.state.isShowDisabled} onClick={this.onShowButtonClicked.bind(this)}>Show</Button>
                                    </div>
        
                                    <div className="col-4">
                                        <Button color="danger" disabled={this.state.isHideDisabled} onClick={this.onDisableButtonClicked.bind(this)}>Hide</Button>
                                    </div>
        
                                    <div className="col-4">
                                        <Button color="primary" disabled={this.state.isNextDisabled} onClick={this.onNextButtonClicked.bind(this)}>Next</Button>
                                    </div>
                                </div>
                                
                                {this.state.isShowing ? <h1 className="display-2">You got {this.state.currentPlayerOption}!</h1> : null}
                            </div> 
                        }
					</div>
				</Jumbotron>
			</div>
		);
	}
}
