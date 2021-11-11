import './App.css';
import Person from './components/no-containers/persons/Person.js'
import Counter from './components/containers/counters/Counter'

function App() {
  return (
    <div>
      <Person name="Gustavo"  surname="Sierra" age={22} />
      <Person name="Brajin"  surname="Hanna" age={27} />
      <Person name="Manu"  surname="Mendoza" age={30} />
      <Person name="Gonzalo"  surname="Garcia" age={32} />
      <Person name="Stefano"  surname="Martin" age={25} />
      <Person name="Raul"  surname="Sanchez" age={29} />
      <Person name="Guille" surname="" age={29} />

      <Counter />
    </div>
  );
}

export default App;
