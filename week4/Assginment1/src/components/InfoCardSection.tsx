import { useParams } from "react-router-dom"
import useGetWeatherInfo from "../api/hooks/weatherInfo";
import InfoCard from "./InfoCard";
import { WEATHER_TYPE } from "../constants/weather";
import { styled } from "styled-components";
import Shimmer from "./Shimmer";
import Error404 from "./Error404";

const InfoCardSection = () => {
    const { type, area } = useParams();
    const { dailyData, weeklyData, isError, isLoading, error } = useGetWeatherInfo(type!, area!);

    if (area === '') return <Error404 error="지역명을 다시 한 번 입력해주세요!!" />;

    if (isLoading) {
        return (
            <St.InfoCardSectionWrapper>
            <Shimmer width="200px" height="1rem" />
            <St.InfoCardWrapper>
                <Shimmer width="210px" height="400px" />
            </St.InfoCardWrapper>
        </St.InfoCardSectionWrapper>
        )
    }

    if (isError) {
        return <Error404 error={String(error)} />
    }

    if (dailyData) {
        const imgUrl = WEATHER_TYPE.find(x => x.description === dailyData.weather[0].description)
        const getDate = new Date();
        const nowMonth = getDate.getMonth() < 10 ? '0' + (getDate.getMonth() + 1) : (getDate.getMonth() + 1)
        const nowDate = getDate.getDate() < 10 ? '0' + getDate.getDate() : getDate.getDate()
        return (
            <St.InfoCardSectionWrapper>
                <p>현재 도시 : {dailyData.name}</p>
                <St.InfoCardWrapper>
                    {imgUrl && <InfoCard date={`${nowMonth}-${nowDate}`} imgUrl={imgUrl.imgURL} temp={dailyData.main.temp} feels_like={dailyData.main.feels_like} temp_min={dailyData.main.temp_min} temp_max={dailyData.main.temp_max} clouds_all={dailyData.clouds.all} />}
                </St.InfoCardWrapper>
            </St.InfoCardSectionWrapper>
        )
    } else if (weeklyData) {
        const newData = weeklyData?.list.filter(x => x.dt_txt?.substring(11,13) === "06").splice(0, 5)
        return (
            <St.InfoCardSectionWrapper>
                <p>현재 도시 : {weeklyData?.city.name}</p>
                <St.InfoCardWrapper>
                    {newData && newData.map((data, index) => <InfoCard date={data.dt_txt!.substring(5, 10)} key={index} imgUrl={WEATHER_TYPE.find(x => x.description === data.weather[0].description) && WEATHER_TYPE.find(x => x.description === data.weather[0].description)!.imgURL} temp={data.main.temp} feels_like={data.main.feels_like} temp_min={data.main.temp_min} temp_max={data.main.temp_max} clouds_all={data.clouds.all} />)}
                </St.InfoCardWrapper>
            </St.InfoCardSectionWrapper>
        )
    } else {
        return <Error404 error="데이터를 불러오지 못했습니다..." />
    }
}

const St = {
    InfoCardSectionWrapper: styled.main`
        width: 100vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    InfoCardWrapper: styled.section`
        width: 80vw;
        padding-top: 20px;
        padding-left: 10vw;
        padding-right: 10vw;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
    `
}

export default InfoCardSection;