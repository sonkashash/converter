import './App.css';
import CurrencyBlock from './components/CurrencyBlock';
import { useSelector } from 'react-redux';


function App() {

  const { dollars, euros } = useSelector(state => state.converter);

  return (
    <div className='converter-container'>
      <h1 className='converter-container__title'>Converter</h1>
      <CurrencyBlock currency="USD" value={dollars}/>
      <CurrencyBlock currency="EUR" value={euros} />
    </div>
  );
}

export default App;
