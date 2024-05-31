import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";


export const FacilityLink = ({facility}) => {
    return (
        <ProxyLink to={"/facilities/facility/view/" + facility?.id}>{facility?.name}</ProxyLink>
    )
}