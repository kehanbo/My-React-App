import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'antd'
import './style.css'

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content:''
        }
    }

    render() {
        return (
            <Card title={this.state.title}>
                {/* 通过dangerouslySetInnerHTML={{__html:}}的形式去对标签里面的内容赋值的时候,是不会对标签里面的内容进行转义了 */}
		    <div className='detail' dangerouslySetInnerHTML={{__html: this.state.content}}></div>
		  </Card>
        )
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get('http://www.dell-lee.com/react/api/detail.json?id='+id)
            .then(res => {
                // console.log(res.data.data)
                this.setState ({
                    title: res.data.data.title,
                    content:res.data.data.content
                })
            })
    }

}

export default Detail;