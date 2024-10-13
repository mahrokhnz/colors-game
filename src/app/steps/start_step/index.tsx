import './index.css';
import React from 'react';
import 'src/extra/icons.font'

interface StartStepProps {
    setLevel: any
}

function StartStep({setLevel}: StartStepProps) {
    return (
        <div className='stepWrapper'>
            <img className='backgroundImage' loading='lazy' src="../../../assets/images/rainbow.jpg" alt="Rainbow Image"/>
            <h1 className='title'>Colors Game</h1>

            <button className='startButton' onClick={() => setLevel(1)}>
                <span>Get Started</span>
                <span>
                    -->
                </span>
                {/*TODO*/}
                {/*<i className="icon arrows-minimize-light"></i>*/}
            </button>
        </div>
    );
}

export default StartStep;
