import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import AppHeader from './cpmponents/Header'
import Login from './cpmponents/Login/'
import PagesList from './containers/List/'
import Detail from './containers/Detail/'
import Vip from './containers/Vip/'
import { Layout } from 'antd';
import 'antd/dist/antd.css'
import './style.css'


const { Header,Footer,Content} = Layout

// 占位符  Fragment   可以使用这个占位符来包裹组件,避免报错

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minWidth:1300, height:'100%' }}>
          <Header className="header">
            <AppHeader />
          </Header>
          <Content className='content'>
            <Login />
            <Switch>
              <Route path="/Vip" component={Vip}/>
              <Route path="/detail/:id" component={Detail} />
              <Route path="/:id?" component={PagesList}/>
            </Switch>
          </Content>
          <Footer className="footer">@copyright Han-Ke 2020</Footer>
          </Layout>
        </BrowserRouter>
    )
    
   }

}



ReactDOM.render(<App />,
  document.getElementById('root')
);

