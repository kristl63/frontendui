/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SemesterLink } from './SemesterLink';

export const PspMediumCard = ({ plan}) => {//Záměna user za event
    return (
        <CardCapsule title={"Plán"}>
            <Row>
                <Col>Semestr</Col>
                <Col>{plan?.semester?.order}</Col>
                <Col><SemesterLink semester={plan?.semester} /></Col>
            </Row>
            <Row>
                <Col>Název plánu</Col>
                <Col>{plan?.semester?.subject?.name}</Col>
            </Row>
            <Row>
                <Col>Id plánu</Col>
                <Col>{plan?.semester?.id}</Col>
            </Row>
        </CardCapsule>
    )
}
