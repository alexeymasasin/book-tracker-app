import * as a from './actionTypes';

export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: a.DELETE_BOOK,
    payload: bookId,
  };
};