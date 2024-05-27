/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PspMediumCardUsers = ({ plan}) => {//Záměna user za event
    return (
        <CardCapsule title={"Users - atributy" + plan?.lessons?.users?.name}>
            
            <Row>
                <Col>User ID</Col>
                <Col>
                
                </Col>
            </Row>
            <Row>
                <Col>Lesson name</Col>
                <Col>{plan?.lessons?.users?.name}</Col>
            </Row>
            <Row>
                <Col>Lesson lenght</Col>
                <Col>{plan?.lessons?.users?.surname}</Col>
            </Row>
            <Row>
                <Col>Lesson type ID</Col>
                <Col>{plan?.lessons?.users?.fullname}</Col>
            </Row>
            <Row>
                <Col>Lessons type name</Col>
                <Col>{plan?.lessons?.users?.email}</Col>
            </Row>
        </CardCapsule>
    )
}
