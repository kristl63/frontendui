/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PspMediumCardFacilities = ({ plan}) => {//Záměna user za event
    return (
        <CardCapsule title={"Facilities - atributy" + plan?.name}>
            
            <Row>
                <Col>Lesson ID</Col>
                <Col>{plan?.facilities?.id}</Col>
            </Row>
            <Row>
                <Col>Lesson name</Col>
                <Col>{plan?.lessons?.name}</Col>
            </Row>
            <Row>
                <Col>Lesson lenght</Col>
                <Col>{plan?.facilities?.label}</Col>
            </Row>
        </CardCapsule>
    )
}
