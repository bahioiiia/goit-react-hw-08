import { createSelector, } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return visibleContacts;
  }
);
