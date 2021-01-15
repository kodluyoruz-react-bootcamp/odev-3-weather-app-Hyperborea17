import { cities } from "./cities";
import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

const Search = () => {
    const { setInput } = useContext(WeatherContext);

    const changeHandler = (e) => {
        setInput(e.target.value);
    };

    return (
        <form className="form" onChange={changeHandler}>
            {cities}
        </form>
    );
};

export default Search;