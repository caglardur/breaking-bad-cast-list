import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Paper, Grid, Avatar, Box, CircularProgress, Typography, Chip, Button } from "@mui/material"

const Char = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const char = location.state

  useEffect(() => {
    setTimeout(() => {
      if (char === null) {
        navigate("/")
      }
    }, 500)
  }, [char, navigate])

  return (
    <Grid container spacing={1}>
      {char ? (
        <Grid container>
          <Grid item>
            <Paper sx={{ display: "flex" }}>
              <Avatar alt={char.name} src={char.img} sx={{ width: 272, height: "auto", mx: 1, my: 1 }} variant="rounded" loading="lazy" />
            </Paper>
          </Grid>
          <Grid item ml={2}>
            <Grid item my={2}>
              <Typography variant="h3">{char.portrayed}</Typography>
              <Typography>{char.birthday !== "Unknown" && "Birthday: " + char.birthday}</Typography>
            </Grid>
            <Grid item my={2}>
              <Typography display="inline" variant="subtitle1" mr={1}>
                as
              </Typography>
              <Typography display="inline" variant="h6" mr={1}>
                {char.name}
              </Typography>
              <Typography display="inline" variant="subtitle1" mr={1}>
                a.k.a.
              </Typography>
              <Typography display="inline" variant="h6">
                {char.nickname}
              </Typography>
            </Grid>
            <Grid item my={2}>
              <Grid container>
                <Grid item my={1}>
                  <Typography display="inline">Season(s):</Typography>
                </Grid>
                {char.appearance.map(season => (
                  <Grid item ml={1} my={1} key={season}>
                    <Avatar sx={{ width: 24, height: 24, backgroundColor: "#454545" }}>
                      <Typography variant="subtitle2">{season}</Typography>
                    </Avatar>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item my={2}>
              <Typography display="inline">Role(s):</Typography>
              {char.occupation.map((role, index) => (
                <Chip label={role} key={index} sx={{ marginLeft: "10px" }} />
              ))}
            </Grid>
            <Grid item my={2}>
              Character status: {char.status}
            </Grid>
            <Grid item my={2}>
              <Button variant="outlined" onClick={() => navigate("/")}>
                Back to list
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Box sx={{ mx: "auto", mt: "50px" }}>
          <CircularProgress sx={{ color: "#616161" }} />
        </Box>
      )}
    </Grid>
  )
}

export default Char
