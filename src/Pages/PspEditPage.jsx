// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
//import { FetchUserByIdAsyncAction } from "../Queries"
import { FetchPlanByIdAsyncAction } from "../Queries/FetchLessonsByIdAsyncAction"
import { PspLargeCard } from "../Components/Psp/PspLargeCard"
import { PspEditCard } from "../Components/Psp/PspEditCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const PspEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [lessons, userPromise] = useFreshItem({id}, FetchPlanByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (lessons) {          ////"a5085468-394f-4a8b-bf23-4e72a6a6d415" ID
        return (
            //<UserLargeCard user={user} />
            //<div>Project name here
            //    {JSON.stringify(event)}
            //</div>
            <PspLargeCard lesson={lessons}>
                <PspEditCard lesson = {lessons}/>
                
            </PspLargeCard>
        )
    } else {
        return (
            <div>Nahravam Udalost...</div>
        )
    }
    
}