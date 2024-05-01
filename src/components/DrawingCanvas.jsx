import styled from 'styled-components';
import CanvasDraw from "react-canvas-draw";

const Canvas = styled(CanvasDraw)`
    border: 0.0625rem solid #9c9c9c;
`;

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function CanvasContainer({ canvasRef, color, erase, strokeWidth}) {
    let colour = color
    if (erase) {colour="#ffffff"}

    return (
        <Page>
            <Canvas
                ref={canvasRef}
                brushColor={colour}
                brushRadius={strokeWidth}
                lazyRadius={0}
                hideGrid={true}
                canvasWidth={400}
                canvasHeight={400}
            />
        </Page>
    );
}
