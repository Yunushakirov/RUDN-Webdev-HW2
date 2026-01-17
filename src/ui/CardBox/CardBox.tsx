import { Card, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import type { TaskType } from "../../types/TaskType"

type Props = { t: TaskType }

const CardBox = ({ t }: Props) => {
  const nav = useNavigate()
  return (
    <Card sx={{ 
      mb: 1,
      borderLeft: "4px solid #E4002B",
      transition: "all 0.3s",
      "&:hover": {
        transform: "translateX(4px)",
        boxShadow: "0 4px 12px rgba(228,0,43,0.25)",
        borderLeftColor: "#00B956"
      }
    }}>
      <CardContent>
        <Typography 
          sx={{ 
            cursor: "pointer",
            color: "#E4002B",
            fontWeight: 600,
            "&:hover": {
              color: "#00B956"
            }
          }} 
          onClick={() => nav(`/task/${t.tid}`)}
        >
          #{t.tid}
        </Typography>
        <Typography sx={{ color: "#1A1A1A", mt: 1 }}>{t.name}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardBox
