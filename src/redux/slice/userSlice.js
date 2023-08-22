import  {createSlice} from '@reduxjs/toolkit';

const initialState = {

    state: {
        isFetching: false,
        isToggleButton: false,

    },

  user:{
  name:null,
  email:null,
  token:null,
  isAuthenticated:false
},
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching : (state) => {
        state.state.isFetching = true;
  }, 
    setUser : (state,action) => {
      state.user.email= action.payload
    
    },
    removeUser : (state) => {
      state.user.email = null
    },
    setToggleButton : (state) => {
      state.state.isToggleButton = true;
    },
    resetToggleButton : (state) => {
      state.state.isToggleButton = false;
    }

  }  
});

export const {
      setIsFetching,
      setUser,
      removeUser,
      setToggleButton,
      resetToggleButton,
    } = userSlice.actions;


export default userSlice.reducer;