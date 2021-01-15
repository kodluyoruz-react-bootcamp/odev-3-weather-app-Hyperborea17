import axios from "axios";
const apiKey = "802927829ed548dba3b6d168ab880000";
const urlToFetch = "https://api.weatherbit.io/v2.0/forecast/daily?city=";

export const request = async (input) => {
    try {
        const response = await axios.get(
            `${urlToFetch}${input}&days=7&key=${apiKey}`
        );
        const weathers = response.data.data.map((weather) => {
            const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
            const d = new Date(weather.datetime);
            const date = days[d.getDay()];

            return {
                maxTemp: weather.app_max_temp,
                minTemp: weather.app_min_temp,
                dateTime: date,
                iconCode: weather.weather.icon,
            };
        });
        return weathers;
    } catch (e) {
        console.log(e);
    }
};
