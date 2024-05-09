/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateLessonsAsyncAction} from '../../Queries/UpadateLessonsAsyncAction'

export const PspEditCard = ({lesson}) => {

    //const eventEx = {...psp, eventType_id: psp?.eventType?.id}

    return (
        <CardCapsule title={"Lessons - atributy" + lesson?.name}>
            
            <Row>
                <Col>Název</Col>
                <Col>{lesson?.name}</Col>
            </Row>
            <Row>
                 <Col>
                      <EditableAttributeText item={lesson} attributeName="name" label="Název" asyncUpdater={UpdateLessonsAsyncAction}/>
                 </Col>
            </Row>
            <Row>
                 <Col>
                        <EditableAttributeSelect item={lesson} attributeName="id" label="Id" asyncUpdater={UpdateLessonsAsyncAction}>
                            <option value="704e7bc2-b1d6-4fe3-95ce-b008b352dd59"> Value1</option>
                            <option value="2042c68d-9b6f-4fce-9c35-d37bb36b4829"> Value2</option>
                        </EditableAttributeSelect>
                 </Col>
            </Row>
            <Row>
                <Col>Počátek</Col>
                <Col>{lesson?.type?.name}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{lesson?.topic?.name}</Col>
            </Row>
        </CardCapsule>
    )
}
