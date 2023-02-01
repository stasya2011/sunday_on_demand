import{useEffect, useState} from 'react';
import axios from 'axios';
import ScoopOption from './ScoopOption'
import { Row } from 'react-bootstrap';

const Options = ({optionType}) => {
    // *  optionType is 'scope' or 'toppings
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
        .then(response => {
            console.log(response.data)
            setItems(response.data)
        })
        .catch(err => {
            // TODO: handle error response
        })
    }, [optionType]);
    //TODO: replace 'null' with ToppingOption when available
    const ItemComponent = optionType === "scoops" ? ScoopOption : null;
    const optionItems = items.map(item => <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
        />)
    return (
        <Row>
            { optionItems}
        </Row>
    );
};



export default Options;
