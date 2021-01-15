import { useContext, useEffect } from "react";
import { request } from "./Request";
import { WeatherContext } from "./WeatherContext";

const Weather = () => {
    const { input, output, setOutput } = useContext(WeatherContext);

    useEffect(() => {
        request(input).then((response) => {
            setOutput(response);
        });
    }, [input,setOutput]);

    return (
        <container className="forecastsContainer">
            {output.map((output, index) => {
                return (
                    <div
                        className={
                            index === 0 ? "forecastContainer-currentDay" : "forecastContainer"
                        }
                        key={index}
                    >
                        <p className="date">{output.dateTime}</p>
                        <img
                            src={`https://www.weatherbit.io/static/img/icons/${output.iconCode}.png`}
                            alt=""
                        />
                        <div className="minMax">
                            <p className="max">
                                {output.maxTemp}
                                <span>&#176;</span>
                            </p>
                            <p className="min">
                                {output.minTemp}
                                <span>&#176;</span>
                            </p>
                        </div>
                    </div>
                );
            })}
        </container>
    );
};

export default Weather;
