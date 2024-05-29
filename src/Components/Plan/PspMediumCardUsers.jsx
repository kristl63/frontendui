/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PspMediumCardUsers = ({ plan}) => {//Záměna user za event
    const lessons = plan?.lessons || [];

    // Collect all unique users
    const allUsers = [];
    lessons.forEach((lesson) => {
        lesson.users.forEach((user) => {
            if (!allUsers.find((u) => u.id === user.id)) {
                allUsers.push(user);
            }
        });
    });

    return (
        <CardCapsule title={"Users"}>
            <ul>
                {allUsers.map((user) => (
                    <li key={user.id}>{user.fullname}</li>
                ))}
            </ul>
        </CardCapsule>
    );
};

