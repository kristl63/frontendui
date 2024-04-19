// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchUserByIdAsyncAction } from "../Queries"
//import { FetchEventByIdAsyncAction } from "../Queries/FetchEventByIdAsyncAction copy"
import { FetchPspByIdAsyncAction } from "../Queries/FetchPspByIdAsyncAction"
import { PspLargeCard } from "../Components/Psp/PspLargeCard"
import { PspEditCard} from "../Components/Psp/PspEditCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst lessons", success: "Načtení lessons se povedlo"})
export const PspViewPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [psp, userPromise] = useFreshItem({id}, FetchPspByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (psp) {
        return (
            //<UserLargeCard user={user} />
            //<div>Project name here
            //    {JSON.stringify(event)}
            //</div>
            <PspLargeCard psp={psp}>
                <PspEditCard psp = {psp}/>
            </PspLargeCard>
        )
    } else {
        return (
            <div>Nahravam Udalost...</div>
        )
    }
    
}