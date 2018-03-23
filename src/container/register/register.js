/**
 * Created by dell on 2018/3/5.
 */

import React from  'react'
import Logo from  '../../component/logo/logo'

import {List,InputItem,WingBlank,WhiteSpace,Button,Radio} from 'antd-mobile'

import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
import '../../index.css'

@connect(
    state => state.user,
    {register}
)

class Register extends React.Component{

constructor(props){
    super(props);
    console.log(this.props,12312111);
    this.state ={
        user:'',
        pwd:'',
        repeatPwd:'',
        type:'genius',//
    }
    this.handleRegister = this.handleRegister.bind(this);
}

    handleChange(key,val){
      this.setState({
          [key]:val
      })
    }

    handleRegister(){
        this.props.register(this.state)
            console.log(this.props,123123);
    }

    render(){

        const  RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo/>
                <h2>
                    注册页面
                </h2>
                <List>
                    {this.props.msg ? <p className="error-msg">{this.props.msg } </p>:null}
                    <InputItem onChange={v=>this.handleChange('user',v)}>
                        用户名
                    </InputItem>
                    <InputItem  type="password"  onChange={v=>this.handleChange('pwd',v)}>
                       密码
                    </InputItem>
                    <InputItem   type="password" onChange={v=>this.handleChange('repeatPwd',v)}>
                        确认密码
                    </InputItem>
                    <WhiteSpace/>
                    <RadioItem
                        checked={this.state.type ==='genius'}
                        onChange={()=>this.handleChange('type','genius')}
                    >
                         牛人
                    </RadioItem>
                    <RadioItem
                        checked={this.state.type ==='boss'}
                        onChange={()=>this.handleChange('type','boss')}
                    >
                         boss
                    </RadioItem>
                    <Button type="primary"  onClick={this.handleRegister}>
                        注册
                    </Button>
                </List>

            </div>

        )
    }
}

export  default  Register