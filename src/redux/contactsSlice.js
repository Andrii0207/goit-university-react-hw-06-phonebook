import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { toast } from 'react-toastify';


const contactsInitialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ]
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, { payload }) {
                state.contacts.find(item => item.name.toLowerCase().trim() === payload.name.toLowerCase().trim())
                    ? toast.info(`You have got "${payload.name}" name`, {
                        autoClose: 2000,
                        theme: "colored",
                    })
                    : state.contacts.push(payload)
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    }
                }
            },
        },
        deleteContact(state, { payload }) {
            const index = state.contacts.findIndex(item => item.id === payload)
            state.contacts.splice(index, 1)
        }
    }
})

const persistConfig = {
    key: 'contacts',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const { addContact, deleteContact } = contactsSlice.actions;


