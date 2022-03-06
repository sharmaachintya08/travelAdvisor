import React,{useState}from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function DenseAppBar() {
    const [options,setOption] = useState('Restaurants');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'black'}} >
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ marginLeft: "auto", marginRight: "auto" }}
          >
            TravelAdvisor
          </Typography>
          <FormControl size='medium' sx={{width:'150px',border:'1px solid white',height:'30px'}}>
            <InputLabel sx={{color:'white'}} id='demo-simple-select-label'>{options}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value='age'
              label="Age"
              onChange={(e)=>setOption(e.target.value)}
              sx={{border:'none',height:'30px',width:'150px',textDecoration:'none',color:'white'}}
            >
              <MenuItem value='Restaurants'>Restaurants</MenuItem>
              <MenuItem value='Hotels'>Hotels</MenuItem>
              <MenuItem value='Monuments'>Monuments</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
