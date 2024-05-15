// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchUserByIdAsyncAction } from "../Queries"
//import { FetchEventByIdAsyncAction } from "../Queries/FetchEventByIdAsyncAction copy"

import { PspLargeCard } from "../Components/Psp/PspLargeCard"
import { PspEditCard} from "../Components/Psp/PspEditCard"
import { FetchPlanByIdAsyncAction } from "../Queries/FetchLessonsByIdAsyncAction"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst lessons", success: "Načtení lessons se povedlo"})
export const PspViewPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [plan, userPromise] = useFreshItem({id}, FetchPlanByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (plan) {
        return (
            //<UserLargeCard user={user} />
            //<div>Project name here
            //    {JSON.stringify(event)}
            //</div>
            <PspLargeCard plan={plan}/>
        )
    } else {
        return (
            <div>Nahravam Udalost...</div>
        )
    }
    
}