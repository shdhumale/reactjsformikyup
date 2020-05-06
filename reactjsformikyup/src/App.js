import React from 'react';
import './App.css';
import FormikComponent from './component/FormikComponent'
import FormikFormComponent from './component/FormikFormComponent'
import FormikYupFunction from './component/FormikYupFunction'

function App() {
  return (
    <div className="App">
      {/* <FormikComponent /> */}
      {/* <FormikFormComponent /> */}
      <FormikYupFunction />
    </div>
  );
}

export default App;
