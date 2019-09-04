import React, {Component, useState, useEffect} from "react";
import Form from "./Form";
import {Button} from "antd";
import "antd/dist/antd.css";

export default function Login(){
    const [text, setText] = useState("");

    const handleChange = (e) => {
        console.log("typing", e.currentTarget.value);
        setText(e.currentTarget.value);
      }
    return(
    <div className="container">
        Login
        <Form name="Username" handleFormAction={handleChange}></Form>
        <Form name="Password" handleFormAction={handleChange}></Form>
        <Button type="primary" className="btn btn-sm btn-outline-secondary">Log In</Button><br></br>
        <text>{text}</text>
    </div>)
}