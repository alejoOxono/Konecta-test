import { configureStore } from '@reduxjs/toolkit'
import reducer from "../Reducer/reducer";

const store = configureStore({
    reducer: reducer,
  })
  
  export default store