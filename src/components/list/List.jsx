import React from "react";
import Grid from "@mui/material/Grid";
import { CardContent, Typography, Card } from "@mui/material";

const list = [{ name: "achintya" }, { name: "himnish" }, { name: "ram" }];
const List = () => {
  return (
    <Grid container direction="column" spacing="8" >
      {list.map((places, i) => (
        <Grid item key={i}>
          <Card>
            <CardContent>
              <Typography>{places.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default List;
