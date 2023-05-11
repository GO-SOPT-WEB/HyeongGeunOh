import { styled } from "styled-components";

interface InfoTextProps {
    description: string;
    value: number | string;
}

const InfoText = ({ description, value }: InfoTextProps) => {
    return (
        <St.InfoTextWrapper>
            <span>{description}</span>
            <span>{value}</span>
        </St.InfoTextWrapper>
    )
}

const St = {
    InfoTextWrapper: styled.article`
        width: 160px;

        display: flex;
        justify-content: space-between;

        span {
            font-size: 0.8rem;
            font-weight: 500;
        }
    `
}

export default InfoText;