import { createTypes } from '../helpers'
import axios from 'axios'

const manageState = () => {
  const Types = createTypes(
    'LOADED_DATA',
    'CHANGE_FORM',
    'SUBMITED_FORM'
  )

  const initialState = {
    data: [],
    form: {}
  }

  const reducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
      case Types.LOADED_DATA: return {...state, data: action.data}
      case Types.CHANGE_FORM: return {...state, form: {...state.form, [action.fieldName]: action.value}}
      case Types.SUBMITED_FORM: return {
        ...state, 
        form: {},
        data: state.data.concat([action.item])
      }
    }

    return state
  }

  const createActions = ({getState, dispatch}) => {
    const loadData = () => {
      const path = getState().path
      return axios.get(path)
        .then(response => dispatch(Types.LOADED_DATA, {data: response.data}))
    }

    const handleChangeForm = fieldName => ev => {
      return dispatch(Types.CHANGE_FORM, {fieldName, value: ev.target.value})
    }
    
    const handleSubmitForm = () => {
      const { path, form } = getState()
      return axios.post(path, form)
        .then(response => dispatch(Types.SUBMITED_FORM, {item: response.data}))
    }

    return {
      loadData,
      handleChangeForm,
      handleSubmitForm
    }
  }

  return { 
    initialState,
    reducer,
    createActions,
    collect: true
  }
}

export default manageState
