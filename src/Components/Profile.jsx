import React, { useState, useEffect } from "react";
import useReactRouter from "use-react-router";
import members from "../members";
import { Card } from "antd";

export default function Profile() {

    const [person, setPerson] = useState(0);
    const { match, history } = useReactRouter();
    const { Meta } = Card;
    useEffect(() => {
        const id = match.params.id;

        const personById = members.find(m => m.id == Number(id));

        setPerson(personById);
    }, []);

    return (
        <div className="container">
            <Card
                style={{ width: 240 }}
                cover={<img alt="Avatar Img" src="https://picsum.photos/200"></img>}>
                <Meta title={person.name} description={"Bounty: " + person.bounty} ></Meta>
            </Card>
        </div>
    )
}