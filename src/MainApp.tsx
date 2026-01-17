import { Routes, Route, Navigate } from "react-router-dom"
import { Box } from "@mui/material"
import TopBar from "./ui/TopBar/TopBar"
import AllTasks from "./pages/AllTasks/AllTasks"
import AddNew from "./pages/AddNew/AddNew"
import TaskView from "./pages/TaskView/TaskView"

const MainApp = () => {
  return (
    <Box>
      <TopBar />
      <Routes>
        <Route path="/" element={<Navigate to="/all" />} />
        <Route path="/all" element={<AllTasks />} />
        <Route path="/add" element={<AddNew />} />
        <Route path="/task/:tid" element={<TaskView />} />
      </Routes>
    </Box>
  )
}

export default MainApp
