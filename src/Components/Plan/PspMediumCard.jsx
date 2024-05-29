/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PspMediumCard = ({ plan}) => {//Záměna user za event
    return (
        <CardCapsule title={"Plán"}>
            
            <Row>
                <Col>Název plánu</Col>
                <Col>{plan?.semester?.subject?.name}</Col>
            </Row>
            <Row>
                <Col>Pořadí plánu</Col>
                <Col>{plan?.semester?.order}</Col>
            </Row>
            <Row>
                <Col>Id plánu</Col>
                <Col>{plan?.semester?.id}</Col>
            </Row>
        </CardCapsule>
    )
}
