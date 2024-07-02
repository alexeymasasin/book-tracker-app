import createSlice from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return {...state, title: action.payload};
    },
  },
});