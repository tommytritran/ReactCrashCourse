import React, { Component, useState } from "react";
import { Button } from "antd";
import { Card } from "antd";

export default function About() {
    const [counter, setCounter] = useState(0);
    const onClick = () => {
        setCounter(counter + 1);
        console.log(counter)
    }

    return (
        <div className="container">
            <Card title="About" style={{ width: 300 }}>
                <h7>Counter:{counter} </h7><br></br>
                <Button type="default" onClick={onClick}>Increment</Button>
            </Card>
        </div>
    )
}