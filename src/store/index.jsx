import { createGlobalState } from 'react-hooks-global-state'


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    showModal: 'scale-0',
    buyModal: 'scale-0',
    refundModal: 'scale-0',
    confirmModal: 'scale-0',
    loading: {show: false, msg: ''},
    
})

// const setMessage

export {
    useGlobalState,
    setGlobalState,
    getGlobalState
}