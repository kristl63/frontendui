/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdatePspAsyncAction } from '../../Queries/UpadatePspAsyncAction'

export const PspEditCard = ({psp}) => {//Záměna user za event

    const eventEx = {...psp, eventType_id: psp?.eventType?.id}

    return (
        <CardCapsule title={"Lessons - atributy" + psp?.name}>
            
            <Row>
                <Col>Název</Col>
                <Col>{psp?.name}</Col>
            </Row>
            <Row>
                 <Col>
                      <EditableAttributeText item={psp} attributeName="name" label="Název" asyncUpdater={UpdatePspAsyncAction}/>
                 </Col>
            </Row>
            <Row>
                 <Col>
                        <EditableAttributeSelect item={psp} attributeName="PspType_id" label="Název" asyncUpdater={UpdatePspAsyncAction}>
                            <option value="69ec2b0b-a39d-40df-9cea-e295b36749c9"> Value1</option>
                            <option value="a517c2fd-8dc7-4a2e-a107-cbdb88ba2aa5"> Value2</option>
                        </EditableAttributeSelect>
                 </Col>
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
