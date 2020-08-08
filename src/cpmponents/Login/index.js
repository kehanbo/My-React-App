import React, { Component } from 'react';
import axios from 'axios';
import { Link,withRouter } from 'react-router-dom'
import { Modal,Button,Input,message } from 'antd'
import './style.css'


class Login extends Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
        this.tuchuLogin = this.tuchuLogin.bind(this)
        this.state = {
            Login: false,
            modal: false,
            user: '',
            password: ''
            
        }
    }
    showModal() {
        this.setState({
            modal:true
        })
    }
    hideModal() {
        this.setState({
            modal:false
        })
    }
    changeUser(e) {
        this.setState({
            user:e.target.value
        })
    }
    changePassword(e) {
        this.setState({
            password:e.target.value
        })
    }
    // 检查登录密码和用户名
    checkLogin() {
        // 首先获取到用户名和密码
        const { user, password } = this.state
        // console.log(user,password)
        // 通过axios请求数据,来匹配登录的密码和用户名
        const url = `
        http://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}
        `
        axios.get(url,{
            withCredentials: true
        }).then(res => {
            // console.log(res.data.data.login);
            const checkLg = res.data.data.login
            if (checkLg) {
                message.success('登录成功');
                this.setState({
                    Login: true,
                    modal:false
                })
                
            } else {
                message.error('登录失败')
                this.setState({
                    modal:false
                })
            }
        })
    }
    // 退出登录
    tuchuLogin() {
        axios.get('http://www.dell-lee.com/react/api/logout.json', {
            withCredentials: true
        })
        .then(res => {
            //  console.log(res.data.data.logout)
            const logout = res.data.data.logout
            // console.log(logout)
            if (logout) {
                this.setState({
                    Login:false
                })
            }
            // console.log(this.props);
            this.props.history.push('/')
        })
    }

    render() {
        const { Login } = this.state
        return (
            <div className="loginButton">
                {
                    Login?  <Button type="primary" onClick={this.tuchuLogin}>退出</Button>: <Button type="primary" onClick={this.showModal}>登录</Button>
                }
                <Link to="./Vip">
                    <Button type="primary" style={{ marginLeft: 10 }}>VIP</Button>
                </Link>
                
                <Modal
                title="登录"
                visible={this.state.modal}
                onOk={()=>{ this.checkLogin() }}
                    onCancel={() => { this.hideModal() }}
                >
                    <Input placeholder="请输入用户名"
                        style={{ marginBottom: 10 }}
                        value={this.state.user}
                        onChange={ this.changeUser }/>
                   <Input placeholder="请输入密码" type="password" value={this.state.password} onChange={ this.changePassword }/>
                   
                </Modal>

                </div>
               
        )
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json',{
            withCredentials: true
        })
            .then(res => {
                // console.log(res.data.data.login)
                this.setState({
                    Login:res.data.data.login
                })
            })
    }

  
}

export default withRouter(Login);