import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDollars, setEuros } from '../store/action';


const CurrencyBlock = ({ currency }) => {
    const dispatch = useDispatch();
    const inputValue = useSelector(state => currency === 'USD' ? state.converter.dollars : state.converter.euros);
    const inputRef = useRef(null);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        if (currency === 'USD') {
            dispatch(setDollars(newValue));
        } else if (currency === 'EUR') {
            dispatch(setEuros(newValue));
        }
    };

    return (
        <div className="currency">
            <h3 className="currency__title">{currency}</h3>
            <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef}
            />
        </div>
    );
};

export default CurrencyBlock;




