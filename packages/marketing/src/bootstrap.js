
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

//mount function to start up the app
const mount=(el)=>{
    ReactDOM.render(<App/>,el)
};

//check if dev

if(process.env.NODE_ENV==='development'){
    const devRoot=document.querySelector('#_marketing-dev-root')
    if(devRoot){
        mount(devRoot);
    }
}

//export for container

export {
    mount
};