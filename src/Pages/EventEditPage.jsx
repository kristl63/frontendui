// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchUserByIdAsyncAction } from "../Queries"
import { FetchEventByIdAsyncAction } from "../Queries/FetchEventByIdAsyncAction copy"
import { EventLargeCard } from "../Components/Event/EventLargeCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const EventEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [event, userPromise] = useFreshItem({id}, FetchEventByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (event) {
        return (
            //<UserLargeCard user={user} />
            //<div>Project name here
            //    {JSON.stringify(event)}
            //</div>
            <EventLargeCard event={event}>
                <EventLargeCard event={event}>
                     Heureka
                </EventLargeCard>
            </EventLargeCard>
        )
    } else {
        return (
            <div>Nahravam Udalost...</div>
        )
    }
    
}