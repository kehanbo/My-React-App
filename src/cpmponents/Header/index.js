import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu,Icon } from 'antd'
import logo from './logo.png'
import axios from 'axios'
import './style.css'




class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            List: []
        }
    }

    
getMenuItem() {
    return this.state.List.map(item => {
        return (
            <Menu.Item key={item.id}>
                {/* 这里的Link标签需要在从react-router-dom引入Link ,同时,这个组件也要在BrowserRouter标签下包裹*/}
                <Link to={`/${item.id}`}>
                    <Icon type={item.icon}/>{item.title}
                </Link>
            </Menu.Item>
        )
    })
    }
    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/header.json')
            .then((res) => {
                // console.log(res.data.data)
                this.setState({
                    List:res.data.data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className='app-header-logo'
                            />
                </Link>
            <Menu
                mode='horizontal'
                className="app-header-menu"
            >
                { this.getMenuItem() }
               
            </Menu>
         </Fragment>
        )
    }
}

export default AppHeader