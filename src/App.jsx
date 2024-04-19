import './App.css'
import { useState } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { HexColorPicker } from "react-colorful";
import styled from 'styled-components'

const styles = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
};

const D= styled.div`
    display: flex;
    flex-direction: column;
`

const App = () => {
    const [color, setColor] = useState("#aabbcc");
    return (
        <D>
            <HexColorPicker color={color} onChange={setColor}/>
            <ReactSketchCanvas
                style={styles}
                width="600px"
                height="400px"
                strokeWidth={40}
                strokeColor={color}
            />
        </D>
    );
};


export default App
