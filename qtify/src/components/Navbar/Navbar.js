import React from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../Logo";
import Buttonforproject from "../Button/Button";

function Navbar({ handleSetToken ,handleTheme,themeState}) {

    const handleThemeToggle = () => {       
      handleTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };
  const handleLogout = () => {
    // Logic for logout
    localStorage.removeItem("spotify_token");
    localStorage.removeItem("code_verifier");
    // window.location.reload();    
    // window.location.href = "/";

    handleSetToken(null);
    //  navigate("/");
    // return <SpotifyLogin/>;
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div>
            <Logo />
          </div>

          <div className="search-container">
            <input
              type="text"
              className="form-control"
              placeholder="Search a song of your choice"
            />

            <Button
              size="10px"
              className="search-button"
              sx={{
                backgroundColor: "white",
                minWidth: "45px",
                border: " 1px solid black",
                color: "black",
              }}
            >
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
          <Buttonforproject
            onClick={() => handleThemeToggle()}
            message={themeState==="dark"?"Light Mode":"Dark Mode"}
          />
          <Buttonforproject message={"give feedback"} />
          <Buttonforproject onClick={() => handleLogout()} message={"logOut"} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
