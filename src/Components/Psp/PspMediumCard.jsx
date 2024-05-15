/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PspMediumCard = ({ plan}) => {//Záměna user za event
    return (
        <CardCapsule title={"Lesson - atributy" + plan?.name}>
            
            <Row>
                <Col>Id</Col>
                <Col>{plan?.id}</Col>
            </Row>
            <Row>
                <Col>Subject name</Col>
                <Col>{plan?.semester?.subject?.name}</Col>
            </Row>
            <Row>
                <Col>Id semestru</Col>
                <Col>{plan?.semester?.id}</Col>
            </Row>
        </CardCapsule>
    )
}
