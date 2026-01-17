import { Box, TextField, Button } from "@mui/material"
import { useState } from "react"
import { useAllTasks, useSaveTasks } from "../../hooks/useAllTasks"
import type { TaskType } from "../../types/TaskType"
import { useNavigate } from "react-router-dom"

const AddNew = () => {
  const { data } = useAllTasks()
  const saveTasks = useSaveTasks()
  const nav = useNavigate()
  const [name, setName] = useState("")
  const [note, setNote] = useState("")

  const addTask = () => {
    if (!data) return
    const newTask: TaskType = {
      tid: data.length + 100,
      name: name,
      note: note,
      created: new Date().toISOString(),
      state: 0
    }
    saveTasks([...data, newTask])
    nav("/all")
  }

  return (
    <Box sx={{ 
      p: 4,
      maxWidth: 600,
      mx: "auto",
      mt: 4,
      backgroundColor: "#FFFFFF",
      borderRadius: 3,
      boxShadow: "0 4px 16px rgba(0,185,86,0.15)",
      border: "2px solid #00B956"
    }}>
      <TextField 
        fullWidth 
        label="Название" 
        value={name} 
        onChange={e => setName(e.target.value)} 
        sx={{ mb: 2 }}
        focused
      />
      <TextField 
        fullWidth 
        label="Описание" 
        value={note} 
        onChange={e => setNote(e.target.value)} 
        sx={{ mb: 3 }}
        multiline
        rows={4}
      />
      <Button 
        variant="contained" 
        onClick={addTask}
        sx={{
          backgroundColor: "#00B956",
          "&:hover": {
            backgroundColor: "#008A3F"
          }
        }}
      >
        Создать
      </Button>
    </Box>
  )
}

export default AddNew
