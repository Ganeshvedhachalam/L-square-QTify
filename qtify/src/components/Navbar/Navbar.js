import React from 'react';
import "./Navbar.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Logo from '../Logo';
import Buttonforproject from '../Button/Button';

function Navbar() {

   
    return (
        <>
         <nav className="navbar">
            <div className="container">
                <div ><Logo/></div>

               

                
                    <div className="search-container">
                        <input type="text" className="form-control" placeholder="Search a song of your choice" />

                        <Button size='10px' className="search-button"
                        sx={{ backgroundColor:"white" ,minWidth:"45px" ,border:" 1px solid black" ,color : "black"} }
                        >
                            <SearchIcon/>
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
