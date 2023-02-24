import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
    links: string[];
  }

const DraweComp: React.FC<Props> = ({links}) => {

    const [open, setOpen] = useState(false)

    return(
        <>
        <Drawer 
            PaperProps={{
                sx: {backgroundColor: "rgba(49,49,116,1)"}
            }} 
            open={open} 
            onClose={() => setOpen(false)}
        >
            <List>
               {links.map((link, index)=>(
                <ListItemButton onClick={()=> setOpen(false)} key={index} divider>
                    <ListItemIcon>
                        <ListItemText sx={{color:"white"}}>{link}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
               ))}
            </List>
            </Drawer>
        <IconButton 
            sx={{marginLeft:"auto", color:"white"}} 
            onClick={() =>setOpen(!open)}
        >
            <MenuIcon/>
        </IconButton>
        </>
    )
}
export default DraweComp;
