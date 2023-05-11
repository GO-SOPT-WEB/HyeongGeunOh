import { styled } from "styled-components";

const Header = () => {
    return <St.Header>☀️웨비들의 기상예보☀️</St.Header>
}

const St = {
    Header: styled.header`
        font-size: 2rem;

        width: 100vw;
        height: 100px;
        
        background-color: #FDDB27;

        display: flex;
        justify-content: center;
        align-items: center;
    `
}

export default Header;