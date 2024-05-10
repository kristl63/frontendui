import {CreateAsyncActionFromMutation} from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
mutation($id: UUID!, $lastchange: DateTime!, $name: String,
  $order: Int, $topic_name: String, $type_name: String
  ){
    result: plannedLessonUpdate(lesson: {
      id: $id,
      lastchange: $lastchange,
      name: $name,
      order: $order,
      topic_name: $topic_name,
      type_name: $type_name
      })
      {
      id
      msg
      result: lesson
      {
        id
        lastchange
        name
        order
        Topic
        {
          name
        }
         Type 
        {
          name
        }
      }
    
      
    }  
  }
`

export const UpdateLessonsAsyncAction = CreateAsyncActionFromMutation(mutation)
