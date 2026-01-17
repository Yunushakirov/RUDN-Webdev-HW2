import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import type { TaskType } from "../types/TaskType"

let myTasks: TaskType[] | null = null

export const useAllTasks = () => {
  return useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      if (myTasks) return myTasks
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
      myTasks = res.data.slice(0, 10).map((x: any) => ({
        tid: x.id,
        name: x.title,
        note: "",
        created: new Date().toISOString(),
        state: x.completed ? 2 : 0
      }))
      return myTasks
    }
  })
}

export const useSaveTasks = () => {
  const qc = useQueryClient()
  return (tasks: TaskType[]) => {
    myTasks = tasks
    qc.setQueryData(["allTasks"], tasks)
  }
}
