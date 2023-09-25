import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Cards({ img, title, desc, git, live }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 5,
      }}
    >
      <CardMedia component="img" alt="green iguana" height="300" image={img} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontFamily: "Titillium Web", fontSize: 35, fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontFamily: "Titillium Web", fontSize: 18 }}
        >
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={git}>
          <Button size="small">Github</Button>
        </Link>
        <Link href={live}>
          <Button size="small">Live</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
