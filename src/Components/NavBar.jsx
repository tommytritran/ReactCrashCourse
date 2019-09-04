import React from 'react'
import { Link } from "react-router-dom";
import { PageHeader, Menu } from "antd";

export default function NavBar() {

    return (
        <div>
            <PageHeader onBack={() => null} title="Hello">
                <nav>
                    <Menu mode="horizontal">
                        <Menu.Item>
                            <Link to="/home" className="navbar-brand">Home</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/about" className="navbar-brand">About</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/login" className="navbar-brand">Login</Link>
                        </Menu.Item>
                    </Menu>
                </nav>
            </PageHeader>
        </div>
    )
}