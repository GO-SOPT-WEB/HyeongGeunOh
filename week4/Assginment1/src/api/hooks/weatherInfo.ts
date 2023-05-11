// 날씨 정보 데이터를 불러오는 비동기 로직이 직접 담겨있습니다.

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { GetFiveDayWeatherInfoProps, WeatherInfoProps } from "../../types/weatherInfoProp";

const useGetWeatherInfo = (type: string, area: string) => {
  const [dailyData, setDailyData] = useState<WeatherInfoProps>();
  const [weeklyData, setWeeklyData] = useState<GetFiveDayWeatherInfoProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const url =
    type === "weekly"
      ? `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`
      : `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`;

  const getWeatherInfo = useCallback(async () => {
    setIsLoading(true);
    try {
      axios
        .get(url)
        .then((res) => {
          type === "daily" ? setDailyData(res.data) : setWeeklyData(res.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err: unknown) {
      setIsError(true);
      setError(err);
    }
  }, [url]) ;

  useEffect(() => {
    setDailyData(undefined);
    setWeeklyData(undefined);
    getWeatherInfo();
  }, [url]);

  return { dailyData, weeklyData, isLoading, isError, error };
};

export default useGetWeatherInfo;
