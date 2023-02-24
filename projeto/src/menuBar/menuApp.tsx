import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DraweComp from "./DrawerComp";

type Props = {
  links: string[];
}

const MenuApp: React.FC<Props> = ({links}: Props) =>{

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg') );
  const [value, setValue] = useState(0);

  return(
  <>
  <AppBar>
    <Toolbar>
    { isMatch ? (
      <>
        <DraweComp links={links}/>
      </>
      ) : (
      <Grid2 sx={{placeItems:'center'}} container>
        <Grid2 xs={4}>
        </Grid2>
        <Grid2 xs={15}>
          <Tabs 
            value={value} 
            textColor="inherit" 
            indicatorColor="secondary" 
            onChange={(e, val) => setValue(val)}
          >
            {links.map((link, index)=> (
              <Tab key={index} label={link}/>
            ))};
          </Tabs>
        </Grid2>
          <Grid2 xs={2}/>
          <Grid2 xs={3}>
          </Grid2>
      </Grid2>
    )}
    </Toolbar>
  </AppBar>
  </>
  )
}
export default MenuApp;