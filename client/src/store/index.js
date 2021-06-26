import { createStore } from 'redux';


// temp question object
// {
//   type:"",
//   question:'',
//   choices:[value1,value2,value3,value4] 
// }

const initialState = {
  user:null,
  questions:[]
}

//on survey edit click, place survey index into variable
//dispatch edit-questions


// on edit question, click the edit button and get attribute id and place into a variable and store intial value as -1
// on build, check to see if variable is greater than -1.
// if variable is greater than -1, its an edit
// if variable is equal to -1, its an add



//edit example
// const newTempQuestions = [...props.questions]
// newTempQuestions[i] = question 
// change index variable back to -1
// dispatch


// add example
// const newTempQuestions = [...props.questions, question]
// dispatch


// on submit, create a survey object and update title,type,prop.questions then get user from local storage if survey index then replace survey else push survey object into user surveys
// save user local storage
// dispatch ADD_USER
// dispatch DEFAULT_Questions
// erase or put in as -1 survey index


const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_USER'){
    return { ...state, user: action.payload}
  }
  if (action.type === 'EDIT_USER'){
    return {...state, user: action.payload}
  }
  if (action.type === 'REMOVE_USER'){
    return {...state, user: null }
  }
  if (action.type === 'DEFAULT_QUESTIONS'){
    return {...state, questions:[]}
  }
  if (action.type === 'ADD_QUESTION'){
    return {...state, questions: action.payload}
  }
  if (action.type === 'EDIT_QUESTION'){
    return {...state, questions: action.payload}
  }
  return state
}

const store = createStore(reducer);

export default store;