/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GroupLink_ } from './GroupLink';

// export const PspMediumCardGroups = ({ plan }) => {
//     const lessons = plan?.lessons || [];

//     const allGroups = [];
//     lessons.forEach((lesson) => {
//         lesson.groups.forEach((group) => {
//             if (!allGroups.find((g) => g.id === group.id)) {
//                 allGroups.push(group);
//             }
//         });
//     });

//     return (
//         <CardCapsule title={"Skupiny"}>
//             <ul>
//                 {allGroups.map((group) => (
//                     <li key={group.id}>{group.name}</li>
//                 ))}
//             </ul>
//         </CardCapsule>
//     );
// };

export const PspMediumCardGroups = ({ plan }) => {
    const lessons = plan?.lessons || [];

    // Collect all unique groups
    const allGroups = [];
    lessons.forEach((lesson) => {
        lesson.groups.forEach((group) => {
            if (!allGroups.find((g) => g.id === group.id)) {
                allGroups.push(group);
            }
        });
    });

    return (
        <CardCapsule title={"Skupiny"}>
            <ul>
                {allGroups.map((group) => (
                    <li key={group.id}>
                        <GroupLink_ group={group} />
                    </li>
                ))}
            </ul>
        </CardCapsule>
    );
};