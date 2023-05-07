import { useParams } from "react-router-dom"
import useGetWeatherInfo from "../api/hooks/weatherInfo";
import InfoCard from "./InfoCard";
import { WEATHER_TYPE } from "../constants/weather";
import { styled } from "styled-components";

const InfoCardSection = () => {
    const { type, area } = useParams();
    const { dailyData, weeklyData, isError, isLoading, error } = useGetWeatherInfo(type!, area!);
    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>{String(error)}</span>
    }

    if (dailyData) {
        const imgUrl = WEATHER_TYPE.find(x => x.description === dailyData.weather[0].description)
        return <St.InfoCardWrapper>
            <InfoCard imgUrl={imgUrl!.imgURL} temp={dailyData.main.temp} feels_like={dailyData.main.feels_like} temp_min={dailyData.main.temp_min} temp_max={dailyData.main.temp_max} clouds_all={dailyData.clouds.all} />
        </St.InfoCardWrapper>
    } else {
        return <St.InfoCardWrapper>
            {weeklyData?.list.map((data, index) => <InfoCard key={index} imgUrl={WEATHER_TYPE.find(x => x.description === data.weather[0].description)!.imgURL} temp={data.main.temp} feels_like={data.main.feels_like} temp_min={data.main.temp_min} temp_max={data.main.temp_max} clouds_all={data.clouds.all} />)}
        </St.InfoCardWrapper>
    }
}

const St = {
    InfoCardWrapper: styled.section`
        width: 80vw;
        padding-left: 10vw;
        padding-right: 10vw;
        background-color: gray;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
    `
}

export default InfoCardSection;