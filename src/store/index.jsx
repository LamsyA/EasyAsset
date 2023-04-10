import { createGlobalState } from 'react-hooks-global-state'


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    showModal: 'scale-0',
    buyModal: 'scale-0',
    refundModal: 'scale-0',
    confirmModal: 'scale-0',
    loading: {show: false, msg: ''},
    
})

const setMsgLoading =(msg) => {
    const loading = getGlobalState('loading',{show: false, msg: '' } )
    setGlobalState('loading', {...loading, msg})
}

export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
    setMsgLoading
}