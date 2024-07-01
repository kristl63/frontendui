import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";


export const SemesterLink = ({semester}) => {
    return (
        <ProxyLink to={"/granting/semester/view/" + semester?.id}>{semester?.order}</ProxyLink>
    )
}