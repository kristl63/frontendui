/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FacilityLink } from './FacilityLink';

// export const PspMediumCardFacilities = ({ plan}) => {//Záměna user za event
//     const lessons = plan?.lessons || [];

//     // Collect all unique facilities
//     const allFacilities = [];
//     lessons.forEach((lesson) => {
//         lesson.facilities.forEach((facility) => {
//             if (!allFacilities.find((f) => f.id === facility.id)) {
//                 allFacilities.push(facility);
//             }
//         });
//     });

//     return (
//         <CardCapsule title={"Zázemí"}>
//             <ul>
//                 {allFacilities.map((facility) => (
//                     <li key={facility.id}>
//                         {facility.name} - {facility.label}
//                     </li>
//                 ))}
//             </ul>
//         </CardCapsule>
//     );
// };

export const PspMediumCardFacilities = ({ plan }) => {
    const lessons = plan?.lessons || [];

    // Collect all unique facilities
    const allFacilities = [];
    lessons.forEach((lesson) => {
        lesson.facilities.forEach((facility) => {
            if (!allFacilities.find((f) => f.id === facility.id)) {
                allFacilities.push(facility);
            }
        });
    });

    return (
        <CardCapsule title={"Zázemí"}>
            <ul>
                {allFacilities.map((facility) => (
                    <li key={facility.id}>
                        <FacilityLink facility={facility} /> - {facility.label}
                    </li>
                ))}
            </ul>
        </CardCapsule>
    );
};
