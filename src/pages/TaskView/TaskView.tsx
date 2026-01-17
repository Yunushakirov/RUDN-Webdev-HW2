import { Box, Typography, Button } from "@mui/material"
import { useParams, useNavigate } from "react-router-dom"
import { useAllTasks, useSaveTasks } from "../../hooks/useAllTasks"

const TaskView = () => {
  const { tid } = useParams()
  const { data } = useAllTasks()
  const saveTasks = useSaveTasks()
  const nav = useNavigate()
  if (!data) return null
  const t = data.find(x => x.tid === Number(tid))
  if (!t) return null

  const changeState = (s: number) => {
    saveTasks(data.map(x => x.tid === t.tid ? {...x, state: s} : x))
    nav("/all")
  }

  const deleteTask = () => {
    saveTasks(data.filter(x => x.tid !== t.tid))
    nav("/all")
  }

  return (
    <Box sx={{ 
      p: 4,
      maxWidth: 700,
      mx: "auto",
      mt: 4,
      backgroundColor: "#FFFFFF",
      borderRadius: 3,
      boxShadow: "0 4px 16px rgba(0,185,86,0.15)",
      borderLeft: "6px solid #E4002B"
    }}>
      <Typography sx={{ mb: 2, color: "#E4002B", fontWeight: 600 }}>Номер: {t.tid}</Typography>
      <Typography sx={{ mb: 2, fontSize: "1.3rem", fontWeight: 600, color: "#008A3F" }}>Название: {t.name}</Typography>
      <Typography sx={{ mb: 2, color: "#4A5568" }}>Описание: {t.note || ""}</Typography>
      <Typography sx={{ mb: 2, color: "#4A5568" }}>Дата создания: {t.created}</Typography>
      <Typography sx={{ mb: 3, color: "#4A5568" }}>Статус: {t.state}</Typography>
      <Box sx={{ mt: 3, display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Button 
          variant="outlined" 
          onClick={() => changeState(0)}
          sx={{
            borderColor: "#00B956",
            color: "#00B956",
            "&:hover": {
              borderColor: "#008A3F",
              backgroundColor: "#F0FDF4"
            }
          }}
        >
          К выполнению
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => changeState(1)}
          sx={{
            borderColor: "#FFC107",
            color: "#FFC107",
            "&:hover": {
              borderColor: "#FFB300",
              backgroundColor: "#FFFBF0"
            }
          }}
        >
          В работе
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => changeState(2)}
          sx={{
            borderColor: "#00B956",
            color: "#00B956",
            "&:hover": {
              borderColor: "#008A3F",
              backgroundColor: "#F0FDF4"
            }
          }}
        >
          Выполнено
        </Button>
        <Button 
          variant="contained" 
          onClick={deleteTask}
          sx={{
            backgroundColor: "#E4002B",
            "&:hover": {
              backgroundColor: "#B0001F"
            }
          }}
        >
          Удалить
        </Button>
      </Box>
    </Box>
  )
}

export default TaskView
