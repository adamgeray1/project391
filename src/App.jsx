/*
    This file holds all the functionality of the buttons, as well as the useStates
    that hold the infomation we need to store.It was difficult to seperate the handles 
    into individual component files with it's button without causing errors, so unfortunantly 
    they have to be coalesced into here. We all worked on various components in this file. - Adam
*/
import {useRef, useState} from 'react';
import ToolBox from './components/ToolBox.jsx'
import CanvasContainer from "./components/DrawingCanvas.jsx";
import styled from 'styled-components';

import "rsuite/dist/rsuite.min.css";
import Header from "./components/Header.jsx";

const Page = styled.div`
    width: 100vw;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 600px;
`

export default function App() {
    // drawings holds a reference to an array of canvases which
    // we could navigate through fastly to simulate a gif
    const [drawings, setDrawings] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const canvasRef = useRef(null); // Using useRef to reference the current canvas

    const [color, setColor] = useState("#1d88d9"); // will hold the current color
    const [erase, setErase] = useState(false); // will set color to white when true.
    const [strokeWidth, setStrokeWidth] = useState(8); // will hold how thick the pen lines are

    const handleNextDrawing = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < drawings.length) {
            loadDrawing(nextIndex);
            setCurrentIndex(nextIndex);
        } else {
            canvasRef.current.clear();
            if (drawings[currentIndex]) {
                setCurrentIndex(nextIndex);
            }
        }
    };

    const handlePrevDrawing = () => {
        const newIndex = currentIndex - 1;
        if (newIndex >= 0) {
            loadDrawing(newIndex);
            setCurrentIndex(newIndex);
        }
    };

    const loadDrawing = (index) => {
        canvasRef.current.clear();
        const drawing = drawings[index];
        canvasRef.current.loadSaveData(drawing, true);
    };

    const handleSaveDrawing = () => {
        if (canvasRef.current) {
            const updatedDrawings = [
                ...drawings.slice(0, currentIndex),
                canvasRef.current.getSaveData(),
                ...drawings.slice(currentIndex + 1)
            ];
            setDrawings(updatedDrawings);
        }
    };

    /* 
        these four are self-explanatory handles for
        pen, eraser, undo, and clear buttons- by Adam
    */
    const handlePenClick = () => {
        setErase(false);
    };
    const handleEraserClick = () => {
        setErase(true);
    };
    const handleUndoClick = () => {
        canvasRef.current.undo();
    };
    const handleClearClick = () => {
        canvasRef.current.clear();
    };

    return (
        <Page>
            <Content color={color}>
                // Done by Brenton Babb
                <Header
                    color={color}
                />
                // Done by Adam Geray
                <ToolBox
                    color={color}
                    setColor={setColor}
                    handleSaveDrawing={handleSaveDrawing}
                    handlePenClick={handlePenClick}
                    handleEraserClick={handleEraserClick}
                    handleUndoClick={handleUndoClick}
                    handleClearClick={handleClearClick}
                    handleNextDrawing={handleNextDrawing}
                    handlePrevDrawing={handlePrevDrawing}
                    setStrokeWidth={setStrokeWidth}
                />
                <CanvasContainer
                    canvasRef={canvasRef}
                    color={color}
                    erase={erase}
                    strokeWidth={strokeWidth}
                    currentIndex={currentIndex}
                    drawings={drawings}
                    loadDrawing={loadDrawing}
                />
            </Content>
        </Page>
    );
}
