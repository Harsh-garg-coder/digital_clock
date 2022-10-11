import style from "./clock.module.css";
import { useEffect, useState } from "react";

export default function Clock() {
    const [currentInterval, setCurrentInterval] = useState();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setCurrentInterval(setInterval(() => {
            setCurrentTime(new Date());
        }, 1000));

        return () => clearInterval(currentInterval);
    }, []);

    return (
        <div className = {style["clock"]}>
            {currentTime && currentTime.toLocaleTimeString()}
        </div>
    );
}