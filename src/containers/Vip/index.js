import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import './style.css'
class Vip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            checkLogin:false
        }
    }


    render() {
        if (this.state.isLogin) {
           if (this.state.checkLogin) {
            return <div className="vip">VIP</div>
           } else {
            return <div className="vip">正在检查登录状态....</div>
           }
           
       } else {
           //这里可以直接跳转到目标路径
           return <Redirect to='/'/>
       }
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json',{withCredentials:true})
            .then(res => {
                // console.log(res.data.data.login)
                const isLogin =res.data.data.login
                this.setState({
                    isLogin,
                    checkLogin:true
                })
                console.log(this.state.isLogin)
            })
    }


}


export default Vip;