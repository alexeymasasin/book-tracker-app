import './App.css';
import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';
import Form from './components/Form/Form';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="wrapper">
        <Form/>
        <div className="wrapper-right">
          {/*<SearchBar/>*/}
          <BookList/>
        </div>
      </div>
    </div>
  );
};

export default App;
