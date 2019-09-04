import React, { Component } from "react";
import members from "../members";
import { Link } from "react-router-dom"
import { List, Avatar } from "antd";

export default function Home() {

    const personList = members.map(m => <li key={m.id}><Link to={`/profile/${m.id}`}>{m.name}</Link></li>)

    return (
        <div className="container">
            <List
                itemLayout="horizontal"
                dataSource={personList}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://picsum.photos/50" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item}
                        />
                    </List.Item>)

                }
            >
            </List>
        </div>
    )
}