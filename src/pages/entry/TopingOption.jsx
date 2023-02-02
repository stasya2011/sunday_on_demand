import {Col} from "react-bootstrap"

const TopingOption = ({name, imagePath}) => {
    return (
            <Col xs={12} sm={6} md={4} lg={3} style={{textAlign: 'center'}}  >
                <img alt={`${name} toping`} src={`http://localhost:3030/${imagePath}`} />
            <h3>{name}</h3>
            </Col>
            

    );
};

export default TopingOption;
