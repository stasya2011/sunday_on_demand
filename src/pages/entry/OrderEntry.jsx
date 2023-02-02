import Options from "./Options";

const OrderEntry = () => {
    return (
        <> 
            <h2>Scoops: </h2>
            <Options optionType="scoops" />
            <h2>Toppings: </h2>
            <Options optionType="toppings" />
        </>
    );
};

export default OrderEntry;
