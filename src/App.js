import React from 'react'
import Leftcontent from './Container/Leftcontent/leftcontent';
import Rightcontent from './Container/Rightcontent/rightcontent';
import './App.css';

function App() {
  return (
    <div className="cv">
     <section className='left'>
     <Leftcontent/>
     </section>

     <section className='right'>
    <Rightcontent/>
     </section>
    </div>
  );
}

export default App;
