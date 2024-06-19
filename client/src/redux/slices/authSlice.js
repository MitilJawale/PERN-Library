import { createSlice } from '@reduxjs/toolkit'


// const userAuthFromLocalStorage = () => {
//   const isAuth = localStorage.getItem('isAuth');

//   if(isAuth && JSON.parse(isAuth) == true) {
//     return true;
//   }
//   return false;

// };


const initialState = {
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   authenticateUser: (state) => {
    state.isAuth = true
   },
   unauthenticateUser: (state) => {
    state.isAuth = false
   },
  },
})


export const { authenticateUser: authenticateUser, unauthenticateUser: unauthenticateUser  } = authSlice.actions

export default authSlice.reducer