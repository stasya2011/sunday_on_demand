import{useEffect, useState} from 'react';
import axios from 'axios';
import ScoopOption from './ScoopOption';
import TopingOption from './TopingOption';
import AlertBanner from '../common/AlertBanner';
import { Row } from 'react-bootstrap';

const Options = ({optionType}) => {
    // *  optionType is 'scope' or 'toppings
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
        .then(response => {
            console.log(response.data);
            setItems(response.data);
        })
        .catch(err => setError(true))
    }, [optionType]);

    if(error) {
        return <AlertBanner />
    }

    //TODO: replace 'null' with ToppingOption when available
    const ItemComponent = optionType === "scoops" ? ScoopOption : TopingOption;
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
