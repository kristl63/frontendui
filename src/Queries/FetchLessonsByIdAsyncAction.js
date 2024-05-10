import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: plannedLessonById(id: $id) {   
      __typename
      id
      name
      order
      semester {
        id
      }
      topic {
        name
      }
      type {
        name
      }
      users {
        fullname
      }
      lastchange
    }
  }`
//SEMESTER NEMA NAME, 
export const FetchLessonsByIdAsyncAction = CreateAsyncActionFromQuery(query)