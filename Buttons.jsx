import React, { useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Canvas = () => {
    const canvasRef = useRef(null);
    const [drawingHistory, setDrawingHistory] = useState([]);
    const [currentDrawingIndex, setCurrentDrawingIndex] = useState(-1);

    const saveDrawing = () => {
        if (canvasRef.current) {
            canvasRef.current.exportPaths().then((paths) => {
                setDrawingHistory(prevHistory => {
                    const updatedHistory = [...prevHistory.slice(0, currentDrawingIndex + 1), paths];
                    setCurrentDrawingIndex(updatedHistory.length - 1);
                    return updatedHistory;
                });
            });
        }
    };

    const saveCurrentDrawing = () => {
        saveDrawing();
    }

    const loadDrawing = (index) => {
        if (index >= 0 && index < drawingHistory.length) {
            canvasRef.current.clearCanvas();
            const paths = drawingHistory[index];
            canvasRef.current.loadPaths(paths);
            setCurrentDrawingIndex(index);
        }
    };


    const handleNext = () => {
        if (currentDrawingIndex < drawingHistory.length - 1) {
            const nextIndex = currentDrawingIndex + 1;
            loadDrawing(nextIndex);
            console.log("next clicked");
        } else {
            canvasRef.current.clearCanvas();
            console.log("next clicked (new drawing)");
        }
    };


    const handlePrevious = () => {
        const newIndex = currentDrawingIndex - 1;
        loadDrawing(newIndex);
        console.log("previous clicked");
    };

    const printHistory = () => {
        console.log(drawingHistory);
    }

    return (
        <div>
            <ReactSketchCanvas ref={canvasRef} />
            <button onClick={handlePrevious} disabled={currentDrawingIndex <= 0}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <button onClick={saveCurrentDrawing}>Save</button>
            <button onClick={printHistory}>Print</button>
        </div>
    );
};

export default Canvas;
