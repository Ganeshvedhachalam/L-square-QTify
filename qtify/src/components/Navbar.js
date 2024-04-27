import React from 'react';
import "./Navbar.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SaveIcon from "@mui/icons-material/Save";
import { useSnackbar } from 'notistack';
import Logo from './Logo';
import Buttonforproject from './Button';

function Navbar() {
    const { enqueueSnackbar } = useSnackbar();
   
    return (
        <>
         <nav className="navbar">
            <div className="container">
                <div ><Logo/></div>

               

                
                    <div className="search-container">
                        <input type="text" className="form-control" placeholder="Search a song of your choice" />

                        <Button className="search-button">
                            <SearchIcon />
                        </Button>
                    </div>
                    
                    
                    {/* <Button 
                        variant="outlined" 
                        sx={{ backgroundColor: 'black', color:"chartreuse", '&:hover': { backgroundColor: 'chartreuse', color: 'black', } }} 
                        className='muiButton' 
                        startIcon={<SaveIcon/>}
                    >
                        Give feedback
                    </Button> */}
                <Buttonforproject/>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
