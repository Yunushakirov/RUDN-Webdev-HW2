import { Box } from "@mui/material"
import { useAllTasks } from "../../hooks/useAllTasks"
import Section from "../../ui/Section/Section"

const AllTasks = () => {
  const { data } = useAllTasks()
  if (!data) return null

  return (
    <Box sx={{ 
      display: "flex", 
      justifyContent: "space-between", 
      p: 3,
      minHeight: "calc(100vh - 64px)",
      background: "linear-gradient(135deg, #F0FDF4 0%, #FEF2F2 100%)"
    }}>
      <Section title="К выполнению" tasks={data.filter(x => x.state === 0)} />
      <Section title="В работе" tasks={data.filter(x => x.state === 1)} />
      <Section title="Выполнено" tasks={data.filter(x => x.state === 2)} />
    </Box>
  )
}

export default AllTasks
