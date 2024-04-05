/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const EventMediumCard = ({event}) => {//Záměna user za event
    return (
        <CardCapsule title={"Událost - atributy" + event?.name}>
            
            <Row>
                <Col>Název</Col>
                <Col>{event?.name}</Col>
            </Row>
            <Row>
                <Col>Počátek</Col>
                <Col>{event?.startdate}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{event?.enddate}</Col>
            </Row>
        </CardCapsule>
    )
}
