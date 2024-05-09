/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PspMediumCard = ({lesson}) => {//Záměna user za event
    return (
        <CardCapsule title={"Lesson - atributy" + lesson?.name}>
            
            <Row>
                <Col>Posledni změna</Col>
                <Col>{lesson?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Typ</Col>
                <Col>{lesson?.type?.name}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{lesson?.topic?.name}</Col>
            </Row>
        </CardCapsule>
    )
}
