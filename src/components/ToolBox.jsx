import styled from 'styled-components';
import { HexColorPicker } from "react-colorful";
import CustomSlider from "./CustomSlider.jsx";

const ToolboxContainer = styled.div`
    background-color: color-mix(in srgb, ${(props) => props.color}, white 75%);
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const ButtonsContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
    justify-content: center;
    //margin: 10px;
    width: 60%;
`;

const Row = styled.div`
    width: 100%;
    margin: 15px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Button = styled.button`
    background-color: #e5e5e5;
    margin: 5px;
    width: auto;

    &:hover {
        background-color: color-mix(in srgb, ${(props) => props.color}, white 50%);
        color: black;
        transition: all 0.3s ease;
        border: 2px solid white;
    }
`;

export default function Toolbox({
                                    color,
                                    setColor,
                                    setStrokeWidth,
                                    handleSaveDrawing,
                                    handlePenClick,
                                    handleEraserClick,
                                    handleUndoClick,
                                    handleClearClick,
                                    handleNextDrawing,
                                    handlePrevDrawing
                                }) {

    return (
        <ToolboxContainer color={color}>
            <HexColorPicker color={color} onChange={setColor}/>

            <ButtonsContainer className="first">
                <Row>
                    <Button onClick={handlePenClick} color={color}>Pen</Button>
                    <Button onClick={handleEraserClick} color={color}>Eraser</Button>
                    <Button onClick={handleSaveDrawing} color={color}>Save</Button>
                    <Button onClick={handleUndoClick} color={color}>Undo</Button>
                    <Button onClick={handleClearClick} color={color}>Clear</Button>
                    <Button onClick={handlePrevDrawing} color={color}>Prev</Button>
                    <Button onClick={handleNextDrawing} color={color}>Next</Button>
                </Row>

                <CustomSlider color={color} onChange={setStrokeWidth}/>
            </ButtonsContainer>

        </ToolboxContainer>
    );
}
