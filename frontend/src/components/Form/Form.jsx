import styles from './Form.module.css';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addBook} from '../../redux/books/actionCreators';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {
        title,
        author,
      };
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className={`form ${styles.window}`}>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" value={title}
                 onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label htmlFor="author">
          Author:
          <input type="text" id="author" value={author}
                 onChange={(e) => setAuthor(e.target.value)}/>
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;