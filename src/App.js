import logo from './logo.svg';
import './App.css';
import List from './List';






function App() {
  const user = [
    {
      id: 0,
      name: 'Thais'
    },
    {
      id:1,
      name: 'Danii'
    },
    {
      id:2,
      name:'Vini'
    }
  ];


  return (
    <div className="App">
      <List itens={user}/>
   
      
    </div>
  );
}

export default App;
