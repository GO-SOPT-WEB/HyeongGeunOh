import { useParams } from "react-router-dom"
import useGetWeatherInfo from "../../api/hooks/weatherInfo";
import InfoCard from "../organism/InfoCard";
import { WEATHER_TYPE } from "../../constants/weather";
import { styled } from "styled-components";
import Error404 from "../atom/Error404";
import { getMonthDate } from "../../utils/getMonthDate";
import DailyShimmer from "../molecule/DailyShimmer";
import WeeklyShimmer from "../molecule/WeeklyShimmer";

const InfoCardSection = () => {
    const { type, area } = useParams();
    const { dailyData, weeklyData, isError, isLoading, error } = useGetWeatherInfo(type!, area!);

    if (isLoading) return type === 'daily' ? <DailyShimmer /> : <WeeklyShimmer />;

    if (isError) return <Error404 error={String(error)} />;
        
    if (dailyData) {
        const imgUrl = WEATHER_TYPE.find(x => x.description === dailyData.weather[0].description)
        return (
            <St.InfoCardSectionWrapper>
                <p>현재 도시 : {dailyData.name}</p>
                <St.InfoCardWrapper>
                    {imgUrl && <InfoCard date={getMonthDate()} imgUrl={imgUrl.imgURL} temp={dailyData.main.temp} feels_like={dailyData.main.feels_like} temp_min={dailyData.main.temp_min} temp_max={dailyData.main.temp_max} clouds_all={dailyData.clouds.all} />}
                </St.InfoCardWrapper>
            </St.InfoCardSectionWrapper>
        )
    } else if (weeklyData) {
        const newData = weeklyData?.list.filter(x => x.dt_txt?.substring(11, 13) === "06").splice(0, 5)
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

export const St = {
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