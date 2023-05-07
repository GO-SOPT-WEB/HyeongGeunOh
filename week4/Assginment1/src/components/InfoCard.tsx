import styled from "styled-components";
import { InfoCardProps } from "../types/InfoCardProps";

const InfoCard = ({ imgUrl, temp, feels_like, temp_min, temp_max, clouds_all }: InfoCardProps) => {
    return (
        <St.InfoCardWrapper>
            <img src={imgUrl} alt={imgUrl} />
            <p>{temp}</p>
            <p>{temp_max}</p>
            <p>{temp_min}</p>
            <p>{feels_like}</p>
            <p>{clouds_all}</p>
        </St.InfoCardWrapper>
    )
}

const St = {
    InfoCardWrapper: styled.article`
        width: 210px;
        height: 400px;
        padding: 10px;
        background-color: lightblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 150px;
        }
    `
}

export default InfoCard;