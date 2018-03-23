import  React from  'react'

import axios from  'axios'
import  {withRouter} from  'react-router-dom'
@withRouter
class AuthRoute extends React.Component{
    // constructor(props){
    //      super(props)
    // }
    componentDidMount(){
        const publicList =['/login','/register'];
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname)>-1){
            return null
        }
        // 获取用户信息
        axios.get('/user/info').then( res=>{
            if(res.status === 200){
                if(res.data.code ===0){
                    console.log(res,12312312)
                    // 有登陆信息
                }else{
                    this.props.history.push('./login')
                    // console.log(this.props.history)
                }
            }
        })
        // 是否登录
        // 现在的url  login 不需要跳转
        // 用户的type 身份是boss 还是牛人
        //    用户是否完善信息  (选择投降,完善简历)
    }
    render(){
         return <p>panduan</p>
    }
}
export  default  AuthRoute