import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { List } from 'antd';


class PagesList extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        data:[]
    }
    }
    

    
  
    render() {
        return (
            <List
            style={{background: '#fff'}}
            bordered
            dataSource={this.state.data}
                renderItem={item => (<List.Item>
                    <Link to={`/Detail/${item.id}`}>{item.title}</Link>
                </List.Item>)}
    />
        )
    }
// componentDidMount生命周期函数是页面挂载的时候执行一次,但是后面就不会再执行的,因此,这里的ajax请求只会发送一次,这个时候,
    // 就要使用其他的生命周期来监听props的数据变化,从而发送ajax请求
    componentDidMount() {
        //注意:一开始打开网页的时候,props没有传值过来,那么下面的id就会变成undefined,所以要加上一个判断
        let url = 'http://www.dell-lee.com/react/api/List.json'
        let id = this.props.match.params.id
        if (id) {
            url = url +'?id=' + id
        }
        axios.get(url)
            .then((res) => {
                this.setState({
                    data:res.data.data
                })
                // console.log(res.data.data)
            })
    }
    // 这个componentWillReceiveProps生命周期函数是当传过来的props数据发生变化,就会执行
    // nextProps这个参数是下一次props将变化成什么
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params.id)
        const id = nextProps.match.params.id
        axios.get('http://www.dell-lee.com/react/api/List.json?id=' + id)
            .then((res) => {
                this.setState({
                    data:res.data.data
                })
                // console.log(res.data.data)
            })
    }

}

export default PagesList;