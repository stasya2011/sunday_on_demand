import React from 'react';
import {Col} from "react-bootstrap"

const ScoopOption = ({name, imagePath}) => {
    return (
            <Col xs={12} sm={6} md={4} lg={3} style={{textAlign: 'center'}}  >
                <img alt={`${name} scoop`} src={`http://localhost:3030/${imagePath}`} />
                <h3>{name}</h3>
            </Col>
            

    );
};

export default ScoopOption;
