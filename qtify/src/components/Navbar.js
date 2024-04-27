import React from 'react';
import "./Navbar.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SaveIcon from "@mui/icons-material/Save";
import { useSnackbar } from 'notistack';

function Navbar() {
    const { enqueueSnackbar } = useSnackbar();
   
    return (
        <>
         <nav className="navbar">
            <div className="container">

                <a href="/" className="navbar-brand">
                    <img src="https://th.bing.com/th?id=OIP.L1dgSDIjuIZAZvEAf5_cMgAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                     alt="Qtify Music" className="logo-image" />
                </a>

                
                    <div className="search-container">
                        <input type="text" className="form-control" placeholder="Search for a song" />

                        <Button className="search-button">
                            <SearchIcon />
                        </Button>
                    </div>
                    
                    
                    <Button 
                        variant="outlined" 
                        sx={{ backgroundColor: 'black', color:"chartreuse", '&:hover': { backgroundColor: 'chartreuse', color: 'black', } }} 
                        className='muiButton' 
                        startIcon={<SaveIcon/>}
                    >
                        Give feedback
                    </Button>
                
            </div>
        </nav>
        </>
    );
}

export default Navbar;
