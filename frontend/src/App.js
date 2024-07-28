import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import "./App.css";
import AuthForm from './components/AuthFrom';
import store from './redux/store/store';
import LoginForm from './components/LoginForm';
import Dashboard from './components/DashBoard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoteCreater from './components/NoteCreater';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={ <LoginForm  />} />
            <Route exact path="/register" element={<AuthForm />} />
            <Route exact path="/note-creates" element={<NoteCreater />} />
            <Route exact path="/note-creates/:id" element={<NoteCreater />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
          <ToastContainer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
