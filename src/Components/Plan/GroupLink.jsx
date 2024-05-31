import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";


export const GroupLink_ = ({group}) => {
    return (
        <ProxyLink to={"/group/view/" + group?.id}>{group?.name}</ProxyLink>
    )
}