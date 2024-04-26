import {useRef, useState} from 'react';
import styled from 'styled-components';
import {Page} from './components/Styling.jsx'
import ToolBox from "./components/ToolBox.jsx";
import './App.css';

import CanvasDraw from "react-canvas-draw";
import "rsuite/dist/rsuite.min.css";





const Canvas = styled(CanvasDraw)`
    border: 0.0625rem solid #9c9c9c
`




export default function App(){
    const canvasRef = useRef(null); // Using useRef to reference the canvas
    const [color, setColor] = useState("#1d88d9");
    const [erase, setErase] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(15);


    return(
        <Page>
            <ToolBox
                canvasRef={canvasRef}
                color={color}
                setColor={setColor}
                erase={erase}
                setErase={setErase}
                setStrokeWidth={setStrokeWidth} />

            {
                erase ?
                    <Canvas
                        ref={canvasRef}
                        brushColor={"white"}
                        brushRadius={strokeWidth}
                        lazyRadius={0}
                        hideGrid={true}
                        canvasWidth={600}
                        canvasHeight={400}
                    />
                    :
                    <Canvas
                        ref={canvasRef}
                        brushColor={color}
                        brushRadius={strokeWidth}
                        lazyRadius={0}
                        hideGrid={true}
                        canvasWidth={600}
                        canvasHeight={400}
                    />
            }
        </Page>
    )
}