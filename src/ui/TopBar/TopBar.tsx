import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import AssignmentIcon from "@mui/icons-material/Assignment"

const TopBar = () => {
  const nav = useNavigate()
  return (
    <AppBar position="static">
      <Toolbar>
        <AssignmentIcon sx={{ mr: 1, fontSize: 28 }} />
        <Typography sx={{ 
          flexGrow: 1,
          fontSize: "1.3rem",
          fontWeight: 600
        }}>
          Доска задач
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => nav("/all")}>Все</Button>
          <Button color="inherit" onClick={() => nav("/add")}>Новая</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
