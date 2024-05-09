import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: plannedLessonById(id: "$id") {   
      __typename
      id
      name
      order
      changedby {
        changedby {
          fullname
        }
        email
        id
        valid
      }
      semester {
        name
      }
      topic {
        name
      }
      type {
        name
      }
      users {
        fullname
        valid
      }
    }
  }
}`

export const FetchLessonsByIdAsyncAction = CreateAsyncActionFromQuery(query)