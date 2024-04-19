/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PspMediumCard = ({psp}) => {//Záměna user za event
    return (
        <CardCapsule title={"Událost - atributy" + psp?.name}>
            
            <Row>
                <Col>Název</Col>
                <Col>{psp?.name}</Col>
            </Row>
            <Row>
                <Col>Počátek</Col>
                <Col>{psp?.startdate}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{psp?.enddate}</Col>
            </Row>
        </CardCapsule>
    )
}
