import React from 'react'
import defaultColors from './defaultColors'

const Controls = ({PAINT_ENDPOINT, styles, setColorMatrix, currentColor, setCurrentColor}) => {
    function handleClear() {
        fetch(`${PAINT_ENDPOINT}/clear`, {
            method: 'POST'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(JSON.stringify(err))
        })
    }

    function getCurrent() {
        fetch(`${PAINT_ENDPOINT}/current`)
        .then(res => res.json())
        .then(res => {
            console.log(res.data.data)
            setColorMatrix(res.data)
        })
        .catch(err => {
            console.log(JSON.stringify(err))
        })
    }
    
    function reset() {
        setColorMatrix(defaultColors)
    }

    return (
        <div className={styles.controls} id="controls">
            <h2>Paint Controls:</h2>
            <div>
                <input style={{ height: "25px" }} type="color" name="currentColor" onChange={setCurrentColor} value={currentColor} />
                <input type="checkbox" id="check"/>
                <label htmlFor="check">Mouseover paint mode</label>
            </div>
            <button onClick={getCurrent}>Get Current</button>
            <button onClick={reset}>Get Default</button>
            <h2>Screen Controls:</h2>
            <button onClick={handleClear}>Set Blank</button>
        </div>
    )
}

export default Controls