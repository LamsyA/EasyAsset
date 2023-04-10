import { createGlobalState } from 'react-hooks-global-state'


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    showModal: 'scale-0',
    buyModal: 'scale-0',
    refundModal: 'scale-0',
    confirmModal: 'scale-0',
    loading: {show: false, msg: 'minting is not'},
    
})

const setMsgLoading =(msg) => {
    const loading = getGlobalState('loading')
    setGlobalState('loading', {...loading, msg})
}

export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
    setMsgLoading
}