import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";


export const UserLink = ({user}) => {
    return (
        <ProxyLink to={"/user/view/" + user?.id}>{user?.fullname}</ProxyLink>
    )
}