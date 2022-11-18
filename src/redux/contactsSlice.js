import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const actions = [fetchContacts, addContacts, deleteContacts]

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
  // можна винести всі функції вище окремо, а тут передавати лінк
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          ...actions.map(action => action.pending)
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          ...actions.map(action => action.rejected)
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          ...actions.map(action => action.fulfilled)
        ),
        (state, _) => {
          state.isLoading = false;
          state.error = null;
        }
      ),

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
