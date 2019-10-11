import React  from 'react';
import styles from './ColorGrid.module.css'

const ColorGrid = ({colorMatrix, setColorMatrix}) => {
    function setColor(e) {
        let newColors = [...colorMatrix]
        newColors[e.target.name] = e.target.value
        setColorMatrix(newColors)
    }

    return (
        <div className={styles.grid}>
            <span></span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            
            <span>1</span>
            <input type="color" name="0" onChange={setColor} value={colorMatrix[0]} />
            <input type="color" name="1" onChange={setColor} value={colorMatrix[1]} />
            <input type="color" name="2" onChange={setColor} value={colorMatrix[2]} />
            <input type="color" name="3" onChange={setColor} value={colorMatrix[3]} />
            <input type="color" name="4" onChange={setColor} value={colorMatrix[4]} />
            <input type="color" name="5" onChange={setColor} value={colorMatrix[5]} />
            <input type="color" name="6" onChange={setColor} value={colorMatrix[6]} />
            <input type="color" name="7" onChange={setColor} value={colorMatrix[7]} />

            <span>2</span>
            <input type="color" name="8" onChange={setColor} value={colorMatrix[8]} />
            <input type="color" name="9" onChange={setColor} value={colorMatrix[9]} />
            <input type="color" name="10" onChange={setColor} value={colorMatrix[10]} />
            <input type="color" name="11" onChange={setColor} value={colorMatrix[11]} />
            <input type="color" name="12" onChange={setColor} value={colorMatrix[12]} />
            <input type="color" name="13" onChange={setColor} value={colorMatrix[13]} />
            <input type="color" name="14" onChange={setColor} value={colorMatrix[14]} />
            <input type="color" name="15" onChange={setColor} value={colorMatrix[15]} />
            
            <span>3</span>
            <input type="color" name="16" onChange={setColor} value={colorMatrix[16]} />
            <input type="color" name="17" onChange={setColor} value={colorMatrix[17]} />
            <input type="color" name="18" onChange={setColor} value={colorMatrix[18]} />
            <input type="color" name="19" onChange={setColor} value={colorMatrix[19]} />
            <input type="color" name="20" onChange={setColor} value={colorMatrix[20]} />
            <input type="color" name="21" onChange={setColor} value={colorMatrix[21]} />
            <input type="color" name="22" onChange={setColor} value={colorMatrix[22]} />
            <input type="color" name="23" onChange={setColor} value={colorMatrix[23]} />
            
            <span>4</span>
            <input type="color" name="24" onChange={setColor} value={colorMatrix[24]} />
            <input type="color" name="25" onChange={setColor} value={colorMatrix[25]} />
            <input type="color" name="26" onChange={setColor} value={colorMatrix[26]} />
            <input type="color" name="27" onChange={setColor} value={colorMatrix[27]} />
            <input type="color" name="28" onChange={setColor} value={colorMatrix[28]} />
            <input type="color" name="29" onChange={setColor} value={colorMatrix[29]} />
            <input type="color" name="30" onChange={setColor} value={colorMatrix[30]} />
            <input type="color" name="31" onChange={setColor} value={colorMatrix[31]} />
            
            <span>5</span>
            <input type="color" name="32" onChange={setColor} value={colorMatrix[32]} />
            <input type="color" name="33" onChange={setColor} value={colorMatrix[33]} />
            <input type="color" name="34" onChange={setColor} value={colorMatrix[34]} />
            <input type="color" name="35" onChange={setColor} value={colorMatrix[35]} />
            <input type="color" name="36" onChange={setColor} value={colorMatrix[36]} />
            <input type="color" name="37" onChange={setColor} value={colorMatrix[37]} />
            <input type="color" name="38" onChange={setColor} value={colorMatrix[38]} />
            <input type="color" name="39" onChange={setColor} value={colorMatrix[39]} />
            
            <span>6</span>
            <input type="color" name="40" onChange={setColor} value={colorMatrix[40]} />
            <input type="color" name="41" onChange={setColor} value={colorMatrix[41]} />
            <input type="color" name="42" onChange={setColor} value={colorMatrix[42]} />
            <input type="color" name="43" onChange={setColor} value={colorMatrix[43]} />
            <input type="color" name="44" onChange={setColor} value={colorMatrix[44]} />
            <input type="color" name="45" onChange={setColor} value={colorMatrix[45]} />
            <input type="color" name="46" onChange={setColor} value={colorMatrix[46]} />
            <input type="color" name="47" onChange={setColor} value={colorMatrix[47]} />
            
            <span>7</span>
            <input type="color" name="48" onChange={setColor} value={colorMatrix[48]} />
            <input type="color" name="49" onChange={setColor} value={colorMatrix[49]} />
            <input type="color" name="50" onChange={setColor} value={colorMatrix[50]} />
            <input type="color" name="51" onChange={setColor} value={colorMatrix[51]} />
            <input type="color" name="52" onChange={setColor} value={colorMatrix[52]} />
            <input type="color" name="53" onChange={setColor} value={colorMatrix[53]} />
            <input type="color" name="54" onChange={setColor} value={colorMatrix[54]} />
            <input type="color" name="55" onChange={setColor} value={colorMatrix[55]} />

            <span>8</span>
            <input type="color" name="56" onChange={setColor} value={colorMatrix[56]} />
            <input type="color" name="57" onChange={setColor} value={colorMatrix[57]} />
            <input type="color" name="58" onChange={setColor} value={colorMatrix[58]} />
            <input type="color" name="59" onChange={setColor} value={colorMatrix[59]} />
            <input type="color" name="60" onChange={setColor} value={colorMatrix[60]} />
            <input type="color" name="61" onChange={setColor} value={colorMatrix[61]} />
            <input type="color" name="62" onChange={setColor} value={colorMatrix[62]} />
            <input type="color" name="63" onChange={setColor} value={colorMatrix[63]} />
        </div>
    )
}

export default ColorGrid