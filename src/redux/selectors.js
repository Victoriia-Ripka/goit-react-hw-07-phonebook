import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.contacts.filter;

export const visibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
      return contacts.contacts.filter(contact =>
        contact?.name?.toLowerCase()?.includes(filter),
      );
  }
);