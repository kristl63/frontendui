import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PspMediumCard } from './PspMediumCard'
import { PspMediumCardLessons } from './PspMediumCardLessons'
import {PspMediumCardUsers} from './PspMediumCardUsers'
import {PspMediumCardGroups} from './PspMediumCardGroups'
import {PspMediumCardFacilities} from './PspMediumCardFacilities'
//import { UserRolesCard } from './UserRolesCard'
//import { UserRawCard } from './UserRawCard'
//import { UserMediumCard } from './UserMediumCard'

export const PspLargeCard = ({plan, children}) => {
    return (
        <CardCapsule title={"Lesson"}>
            <Row>
                <Col md={3}>
                    <PspMediumCard plan = {plan}/>
                   {/*  <UserMediumCard user={user} /> */}
                </Col>
                <Col md={6}>
                    {children}
                    <PspMediumCardLessons plan = {plan}/>
                </Col>
                <Col md={3}>
                    <PspMediumCardFacilities plan = {plan}/>
                    <PspMediumCardUsers plan = {plan}/>
                    <PspMediumCardGroups plan = {plan}/>
                   {/*  <UserRolesCard user={user} /> */}
                </Col>

            </Row>
            <br />
            <Row>
                <Col>
                   {/*  <UserRawCard user={user} /> */}
                    {JSON.stringify(plan)}
                </Col>
            </Row>
        </CardCapsule>

    )
}
