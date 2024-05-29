/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const PspMediumCardLessons = ({ plan}) => {//Záměna user za event
    const lessons = plan?.lessons || []
    const sortedLessons = lessons.toSorted((a, b) => a.order - b.order)
    return (
        <CardCapsule title={"Lessons"}>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Name</th>
                        <th>Length</th>
                        <th>User-fullname</th>
                        <th>Group-name</th>
                        <th>Facility-name</th>
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