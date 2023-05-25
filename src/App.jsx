import { useState } from 'react';
import { peopleList } from './data.js';
import List from './assets/List.jsx';

const App = () => {
  const [people, setPeople] = useState(peopleList);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type='button' className='btn' onClick={handleClick}>
          Reset
        </button>
      </section>
    </>
  );
};
export default App;
