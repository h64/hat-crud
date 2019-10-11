import React, { useState, useEffect } from 'react'
import ColorGrid from '../../components/ColorGrid/ColorGrid'
import Controls from './Controls'
import TaskQueue from './TaskQueue'
import styles from './Paint.module.css'
import defaultColors from './defaultColors'

const Paint = (props) => {
    const PAINT_ENDPOINT = `http://${window.location.hostname}:5000/paint`
    const [colorMatrix, setColorMatrix] = useState(defaultColors)

    useEffect(() => {
        fetch(PAINT_ENDPOINT)
        .then(res => res.json())
        .then(colors => {
            console.log(colors)
        })
        .catch(err => {
            console.log(JSON.stringify(err))
        })
    }, [PAINT_ENDPOINT]) 

    useEffect(() => {
        console.log(colorMatrix)
    })

    function handleSubmit(e) {
        e.preventDefault();
        fetch(PAINT_ENDPOINT, {
            headers: {
                'Accept': 'applications/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ colorMatrix })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(JSON.stringify(err))
        })
    }

    return (
        <>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <ColorGrid colorMatrix={colorMatrix} setColorMatrix={setColorMatrix} />
                    <input type="submit" />
                </form>
                <Controls 
                    PAINT_ENDPOINT={PAINT_ENDPOINT} 
                    styles={styles}
                    setColorMatrix={setColorMatrix}
                />
            </div>
            <TaskQueue />
        </>
    )
}

export default Paint