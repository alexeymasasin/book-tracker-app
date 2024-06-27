import './App.css';
import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="wrapper">
        <Form/>
        <SearchBar/>
        <BookList/>
      </div>
    </div>
  );
};

export default App;
