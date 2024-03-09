import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContacts = createAction("contacts/AddContacts", (name, number) => {
    return {
        payload: {
            id: nanoid(),
            name,
            number,
        }
    }
})

export const deleteContact = createAction("contacts/deleteContact")

export const filterContacts = createAction("filters/filterContacts")