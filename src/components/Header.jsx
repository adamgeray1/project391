//Component by Brenton Babb. Header component for React Sketch

import styled from 'styled-components';

//Styles header according to color prop
const StyledHeader = styled.header`
    background-color: ${(props) => props.color};
    color: rgb(227, 223, 223);
    padding: 20px;
    width: 80%;
    border-radius: 5px;
    text-align: center;
`;

//Returns the header with H3 and sets color
const Header = ({color}) => {
    return (
        <StyledHeader color={color}>
            <h3>React Sketch Pad</h3>
        </StyledHeader>
    );
};

export default Header;
