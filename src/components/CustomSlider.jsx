// Component by Brenton Babb
import styled from 'styled-components';
import {Slider} from 'rsuite';
import "rsuite/dist/rsuite.min.css";

const StyledSlider = styled(Slider)`
    margin: 5px;
    width: 80%;
    :first-child{
        background-color: ${(props) => props.color};
    }
`
export default function CustomSlider(props){
    return (
        <div>
            <p>Stroke width</p>
            <StyledSlider
                defaultValue={10}
                min={1}
                max={60}
                onChange={props.onChange}
                color={props.color}
            />
        </div>

    );
};