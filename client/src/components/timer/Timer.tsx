import * as React from "react";
import {useEffect, useState} from "react";

const Timer = () => {

    const serverUrl = "http://localhost:8900/api/v0/timers";

    const [time, setTime] = useState<number | null>();


    useEffect(() => {
        const es = new EventSource(serverUrl);
        es.onmessage = e => {
            setTime(Number(e.data));
        }
        es.onerror = () => setTime(null)

        return () => {
            es.close();
        }
    }, []);


    return <p className={"text-white text-5xl"}>{time ? new Date(time).toTimeString().substring(0, 8) : "connecting..."}</p>

}

export default Timer;