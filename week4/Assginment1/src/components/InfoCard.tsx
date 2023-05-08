import styled from "styled-components";

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
            {imgUrl ? <img src={imgUrl} alt={imgUrl} /> : <div>NO IMG to RENDER...</div>}
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
        padding: 20px;

        border-radius: 20px;
        background-color: #00B1D2;

        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 150px;
        }
    `,
    ThereIsNoImg: styled.div`
        width: 150px;
        height: 150px;

        display: flex;
        justify-content: center;
        align-items: center;
    `
}

export default InfoCard;