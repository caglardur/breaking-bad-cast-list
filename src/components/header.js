import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Grid container sx={{ borderBottom: 1, mb: 5, borderColor: "#616161", alignItems: "center" }}>
      <Grid item xs={2} sx={{ m: 2 }}>
        <Link to="/">
          <img src="/bblogo.png" alt="breaking bad" loading="lazy" fit="crop" height={80} />
        </Link>
      </Grid>
      <Grid item ml="20%">
        <Link to="/">
          <Typography sx={{ color: "black", fontWeight: "400" }} variant="h6">
            Cast Members
          </Typography>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Header
