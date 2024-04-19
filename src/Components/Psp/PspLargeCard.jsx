import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PspMediumCard } from './PspMediumCard'
//import { UserRolesCard } from './UserRolesCard'
//import { UserRawCard } from './UserRawCard'
//import { UserMediumCard } from './UserMediumCard'

export const PspLargeCard = ({psp, children}) => {
    return (
        <CardCapsule title={"Událost " + psp?.name}>
            <Row>
                <Col md={3}>
                    <PspMediumCard psp = {psp}/>
                   {/*  <UserMediumCard user={user} /> */}
                </Col>
                <Col md={6}>
                    {children}
                </Col>
                <Col md={3}>
                    <PspMediumCard psp = {psp}/>
                   {/*  <UserRolesCard user={user} /> */}
                </Col>

            </Row>
            <br />
            <Row>
                <Col>
                   {/*  <UserRawCard user={user} /> */}
                    {JSON.stringify(psp)}
                </Col>
            </Row>
        </CardCapsule>

    )
}
