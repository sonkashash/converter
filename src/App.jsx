import './App.css';
import CurrencyBlock from './components/CurrencyBlock';
import { useSelector } from 'react-redux';


function App() {

  const { dollars, euros } = useSelector(state => state.converter);


  return (
    <div className='converter-container'>
      <h1 className='converter-container__title'>Converter</h1>
      <CurrencyBlock currency="USD" value={dollars} onChange={(value) => console.log(value)} />
      <CurrencyBlock currency="EUR" value={euros} onChange={(value) => console.log(value)} />
    </div>
  );
}

export default App;
