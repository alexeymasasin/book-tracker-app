import {v4 as uuidv4} from 'uuid';

const createBookWithId = (book) => {
  return {
    ...book,
    isFavorite: false,
    rating: '?',
    id: uuidv4(),
    releaseDate: book.year || book.releaseDate,
  };
};

export default createBookWithId;