import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: ${(props) => props.color};
    color: rgb(227, 223, 223);
    padding: 20px;
    width: 80%;
    border-radius: 5px;
    text-align: center;
`;

const Header = ({color}) => {
    return (
        <StyledHeader color={color}>
            <h3>React Sketch Pad</h3>
        </StyledHeader>
    );
};

export default Header;