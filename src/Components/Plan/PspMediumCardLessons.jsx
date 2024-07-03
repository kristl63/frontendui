/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserLink } from './UserLink'
import { GroupLink_ } from './GroupLink'
import { FacilityLink } from './FacilityLink'

/*
export const PspMediumCardLessons = ({ plan}) => {//Záměna user za event
    const lessons = plan?.lessons || []
    const sortedLessons = lessons.toSorted((a, b) => a.order - b.order)
    return (
        <CardCapsule title={"Lekce"}>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Pořadí</th>
                        <th>Název</th>
                        <th>Délka</th>
                        <th>Učitelé</th>
                        <th>Skupiny</th>
                        <th>Zázemí</th>
                    </tr>        
                </thead>
                <tbody>
                    {sortedLessons.map(
                        (L)=> <tr>
                            <td>{L.order}</td>
                            <td>{L.name}</td>
                            <td>{L.length}</td>
                            <td>{L.users.map((U)=>U.fullname).join(", ")}</td>
                            <td>{L.groups.map((G)=>G.name).join(", ")}</td>
                            <td>{L.facilities.map((F)=>F.name).join(", ")}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </CardCapsule>
    )
}
*/
export const PspMediumCardLessons = ({ plan }) => {
    const lessons = plan?.lessons || [];
    const sortedLessons = lessons.toSorted((a, b) => a.order - b.order);

    return (
        <CardCapsule title={"Lekce"}>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Pořadí</th>
                        <th>Název</th>
                        <th>Délka</th>
                        <th>Učitelé</th>
                        <th>Skupiny</th>
                        <th>Zázemí</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedLessons.map((lesson) => (
                        <tr key={lesson.order}>
                            <td>{lesson.order}</td>
                            <td>{lesson.name}</td>
                            <td>{lesson.length}</td>
                            <td>
                                {lesson.users.map((user) => (
                                    <UserLink key={user.id} user={user}>
                                        {user.fullname}
                                    </UserLink>
                                )).reduce((prev, curr) => prev === '' ? [curr] : [prev, ', ', curr], '')}
                            </td>
                            <td>
                                {lesson.groups.map((group) => (
                                    <GroupLink_ key={group.id} group={group}>
                                        {group.name}
                                    </GroupLink_>
                                )).reduce((prev, curr) => prev === '' ? [curr] : [prev, ', ', curr], '')}
                            </td>
                            <td>
                                {lesson.facilities.map((facility) => (
                                    <FacilityLink key={facility.id} facility={facility}>
                                        {facility.name}
                                    </FacilityLink>
                                )).reduce((prev, curr) => prev === '' ? [curr] : [prev, ', ', curr], '')}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </CardCapsule>
    );
};