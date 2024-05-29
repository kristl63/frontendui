/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PspMediumCard = ({ plan}) => {//Záměna user za event
    return (
        <CardCapsule title={"Plan"}>
            
            <Row>
                <Col>Plan name</Col>
                <Col>{plan?.semester?.subject?.name}</Col>
            </Row>
            <Row>
                <Col>Subject order</Col>
                <Col>{plan?.semester?.order}</Col>
            </Row>
            <Row>
                <Col>Id plan</Col>
                <Col>{plan?.semester?.id}</Col>
            </Row>
        </CardCapsule>
    )
}
