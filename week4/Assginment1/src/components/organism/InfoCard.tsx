import styled from "styled-components";
import InfoText from "../atom/InfoText";

interface InfoCardProps {
    date: string;
    imgUrl?: string;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    clouds_all: number;
}

const InfoCard = ({ date, imgUrl, temp, feels_like, temp_min, temp_max, clouds_all }: InfoCardProps) => {
    return (
        <St.InfoCardWrapper>
            <p>{date}</p>
            {imgUrl ? <img src={imgUrl} alt={imgUrl} /> : <St.ThereIsNoImg src="/assets/no_img.png" alt="NO IMG" />}
            <InfoText description="온도" value={temp} />
            <InfoText description="체감 온도" value={feels_like} />
            <InfoText description="최저/최고" value={`${temp_min}/${temp_max}`} />
            <InfoText description="구름" value={`${clouds_all}%`} />
        </St.InfoCardWrapper>
    )
}

const St = {
    InfoCardWrapper: styled.article`
        width: 210px;
        height: 400px;
        padding: 20px;

        border-radius: 20px;
        background-color: #00B1D2;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        img {
            width: 150px;
        }
    `,
    ThereIsNoImg: styled.img`
        width: 150px;
        height: 150px;

        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
    `
}

export default InfoCard;