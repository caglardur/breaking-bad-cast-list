import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Grid, Paper, Avatar, Typography, Box, CircularProgress } from "@mui/material"

const CastList = () => {
  const [cast, setCast] = useState(null)

  useEffect(() => {
    axios.get("https://www.breakingbadapi.com/api/characters").then(response => setCast(response.data))
  }, [])

  return (
    <Grid container spacing={1}>
      {cast ? (
        cast.map(char => (
          <Grid item key={char.char_id} xs={12} sm={6} md={4} xl={3}>
            <Link to="char" state={char}>
              <Grid container mx="auto" justifyContent="center">
                <Grid item>
                  <Paper sx={{ display: "flex" }}>
                    <Avatar alt={char.name} src={char.img} sx={{ width: 72, height: 92, mx: 1, my: 1 }} variant="rounded" loading="lazy" />
                  </Paper>
                </Grid>
                <Grid item xs={7} sx={{ display: "flex", flexDirection: "column", my: "auto" }} mx={1}>
                  <Typography sx={{ display: "inline", color: "black", fontWeight: "bold" }} variant="subtitle2" component="div" color="primary" underline="none">
                    {char.portrayed}
                  </Typography>
                  <Typography sx={{ display: "inline", color: "#616161" }} variant="body2" component="div" color="primary" underline="none">
                    as {char.name}
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          </Grid>
        ))
      ) : (
        <Box sx={{ mx: "auto", mt: "50px" }}>
          <CircularProgress sx={{ color: "#616161" }} />
        </Box>
      )}
    </Grid>
  )
}

export default CastList
