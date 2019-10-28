import React from 'react';
import MyContainer from './MyContainer'

class MyComponent extends React.Component{
    render(){
        return(
            <div>
                年龄：{this.props.name}
                <br/>
                名称：{this.props.age}
                <br/>
                性别：{this.props.sex}
            </div>
        );
    }
}

export default MyContainer(MyComponent);