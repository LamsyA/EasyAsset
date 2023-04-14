import { createGlobalState } from 'react-hooks-global-state'


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    showModal: 'scale-0',
    buyModal: 'scale-0',
    refundModal: 'scale-0',
    confirmModal: 'scale-0',
    loading: {show: false, msg: ''},
    alert: {show: false, msg: '', color: ''},
    connectedAccount: '',
    assets : [],
    
})

const setAlert = (msg, color = 'green') => {
    setGlobalState('loading', {show: false, msg: ''})
    setGlobalState('alert', {show: true, msg, color}) 
    setTimeout(() =>{
    setGlobalState('alert', {show: false, msg, color}) 

    }, 6000)
}

const setMsgLoading =(msg) => {
    setGlobalState('loading', {show: true, msg})
}

export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
    setMsgLoading,
    setAlert
}