import { Box, Typography } from "@mui/material"
import CardBox from "../CardBox/CardBox"
import type { TaskType } from "../../types/TaskType"

type Props = { title: string, tasks: TaskType[] }

const Section = ({ title, tasks }: Props) => {
  return (
    <Box sx={{ 
      width: "32%",
      border: "2px solid #00B956",
      borderRadius: 2,
      p: 2,
      backgroundColor: "#F0FDF4",
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: "linear-gradient(90deg, #00B956 0%, #E4002B 50%, #00B956 100%)",
        borderRadius: "2px 2px 0 0"
      }
    }}>
      <Typography sx={{ 
        mb: 2, 
        fontWeight: 600,
        color: "#008A3F",
        fontSize: "1.2rem"
      }}>
        {title}
      </Typography>
      {tasks.map(t => <CardBox key={t.tid} t={t} />)}
    </Box>
  )
}

export default Section
