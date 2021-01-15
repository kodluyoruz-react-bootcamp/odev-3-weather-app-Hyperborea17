import { useState, createContext } from "react";
export const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
    const [input, setInput] = useState("Adana");
    const [output, setOutput] = useState([]);
    const values = {
        input,
        setInput,
        output,
        setOutput,
    };

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    );
};