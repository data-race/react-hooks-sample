import { useEffect, useState } from "react";

export default function EffectHookDemo() {
    const dummyFetchData = () => {
        return `Fetch dummy data at: ` + new Date().toLocaleTimeString();
    }

    const [data1, setData1] = useState("");
    const [data2, setData2] = useState("");
    const [data3, setData3] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [dependency, setDependency] = useState(false);
    
    // effect with null dependency (runs every render)
    useEffect(() => {
        setData1(dummyFetchData());
    });
    // effect with empty dependency
    useEffect(() => {
        setData2(dummyFetchData());
    }, []);

    //effect with dependency
    useEffect(() => {
        setData3(dummyFetchData());
    }, [dependency]);

    return (
        <>
        <div
            style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            padding: "20px",
            gap: "20px",
            border: "1px solid white",
            borderRadius: "10px",
            margin: "20px",
            }}
        >
            <h2>useEffectHookDemo</h2>
            <ul style={{ margin: "20px"}}>
                <li>Data From null dependency {data1}</li>
                <li>Data From empty dependency {data2}</li>
                <li>Data From dependency {data3}</li>
            </ul>
            <button onClick={() => setRefresh(!refresh)}>Refresh</button>
            <button onClick={() => setDependency(!dependency)}>Change Dependency</button>
        </div>
        </>
    );
}