import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Grid container sx={{ borderBottom: 1, mb: 5, borderColor: "#616161", justifyContent: "space-between" }}>
      <Link to="/">
        <Grid item xs={2} sx={{ m: 2 }}>
          <img src="/bblogo.png" alt="breaking bad" loading="lazy" fit="crop" height={80} />
        </Grid>
      </Link>
      <Link to="/">
        <Grid item sx={{ alignItems: "flex-end", display: "flex", height: "100%" }}>
          <Typography sx={{ color: "black", fontWeight: "400" }} variant="subtitle1">
            Cast Members
          </Typography>
        </Grid>
      </Link>
    </Grid>
  )
}

export default Header
