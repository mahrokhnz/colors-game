import './index.css';
import React, {useMemo} from 'react';

type modeTypes = 'start' | 'end' | 'over'

interface ModeStepProps {
    mode: modeTypes
    onClickHandler: () => void
}

function ModeStep({mode, onClickHandler}: ModeStepProps) {
    const context = useMemo(() => {
        if (mode === 'start') {
            return {
                description: 'You have 5 lives to finish this game!',
                button: 'Get Started'
            }
        } else if (mode === 'end') {
            return {
                description: `Congrates, You've finished it successfully`,
                button: 'Start Over'
            }
        } else if (mode === 'over') {
            return {
                description: `Gameover, You're out of lives!`,
                button: 'Start Over'
            }
        }
    }, [mode])

    const clickHandler = () => {
        if (onClickHandler instanceof Function) {
            onClickHandler()
        }
    }

    return (
        <div className='stepWrapper'>
            <img className='backgroundImage' loading='lazy' src="../../../assets/images/rainbow.jpg" alt="Rainbow Image"/>
            <div className='contentWrapper'>
                <h1 className='title'>Colors Game</h1>
                <span className='description'>{context.description}</span>
            </div>

            <button className='startButton' onClick={clickHandler}>
                <span>{context.button}</span>
            </button>
        </div>
    );
}

export default ModeStep;
