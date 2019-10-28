//高阶组件
//组件LoginType的形参ComType也是一个组件，且LoginType返回一个组件。称为LoginType就是一个高阶组件。
//高阶函数可以不返回一个函数，但是高阶组件的函数返回值也需要是一个组件。
//从本质上看组件也是一个函数或类，当一个组件是一个函数时，高阶组件本质上就是一个高阶函数。
//在react实现高阶组件的方式：属性代理和反向继承。
function LoginType(ComType){
    return ()=> ComType();
}

export default LoginType;