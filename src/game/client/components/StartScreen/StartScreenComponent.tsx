import * as React from "react";

export interface StartScreenComponentDataProps {
    playerName: string;
    userId: string;
}

export interface StartScreenComponentActions {
    startGame: () => void;
    setPlayerName: (playerName: string) => void;
}

export interface StartScreenComponentProps extends StartScreenComponentActions, StartScreenComponentDataProps {}

interface StartScreenComponentState {
    playerName: string;
    isStartEnabled: boolean;
}

export class StartScreenComponent extends React.Component<StartScreenComponentProps, StartScreenComponentState> {
    constructor(props) {
        super(props);
        this.state = {
            playerName: this.props.playerName,
            isStartEnabled: Boolean(this.props.playerName)
        }

        this.onClickStart = this.onClickStart.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    private onClickStart() {
        if(!this.state.isStartEnabled) {
            return;
        }

        this.props.setPlayerName(this.state.playerName);
        this.props.startGame();
    }

    private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        this.setState({
            playerName: value,
            isStartEnabled: Boolean(value)
        } as StartScreenComponentState);
    }

    public render() {
        const { startGame, userId } = this.props;
        const { isStartEnabled, playerName } = this.state;

        return (
            <div>
                <h1>Welcome to Quiz Souls!</h1>
                <p>Your goal is to defeat the enemies by answering the questions.</p>
                <p>Killing enemies will grant you souls.</p>
    
                <h3>Enter your name</h3>
                
                <div className="row">
                    <div className="col col-sm-6">
                        <div className="form-group">
                            <input className="form-control" type="text" onChange={this.handleChange} value={playerName}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="overlay-url">Your overlay url: </label>
                            <input id="overlay-url" type="text" className="form-control" readOnly value={getOverlayUrl(userId)}/>
                        </div>
                    </div>
                </div>

                <button disabled={!isStartEnabled} className="btn btn-primary" onClick={this.onClickStart}>Start Game</button>
            </div>
        );
    }
}

function getOverlayUrl(userId: string): string {
    const location = window.location.toString();
    
    const overlayLocation = location.replace("/game", "/overlay");

    const builder = [overlayLocation];

    if (!overlayLocation.endsWith("/")) {
        builder.push("/");
    }

    builder.push(`?userId=${encodeURI(userId)}`);

    return builder.join("");
}