/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateLessonsAsyncAction } from '../../Queries/UpadateLessonsAsyncAction'

export const EventEditCard = ({event}) => {//Záměna user za event

    const eventEx = {...event, eventType_id: event?.eventType?.id}

    return (
        <CardCapsule title={"Událost - atributy" + event?.name}>
            
            <Row>
                <Col>Název</Col>
                <Col>{Event?.name}</Col>
            </Row>
            <Row>
                 <Col>
                      <EditableAttributeText item={event} attributeName="name" label="Název" asyncUpdater={UpdateEventAsyncAction}/>
                 </Col>
            </Row>
            <Row>
                 <Col>
                        <EditableAttributeSelect item={event} attributeName="eventType_id" label="Název" asyncUpdater={UpdateEventAsyncAction}>
                            <option value="69ec2b0b-a39d-40df-9cea-e295b36749c9"> Školni rok</option>
                            <option value="a517c2fd-8dc7-4a2e-a107-cbdb88ba2aa5"> semestr</option>
                        </EditableAttributeSelect>
                 </Col>
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
