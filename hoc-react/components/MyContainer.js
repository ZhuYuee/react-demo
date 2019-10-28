import React from 'react';

const MyContainer = (WrappedComponent) =>
    class extends React.Component {
        render() {
            //高阶组件可以代理属性，把其他属性传递到组件中
            return <WrappedComponent {...this.props} sex="女"></WrappedComponent>
        }
    }

    export default MyContainer;