import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const ClientHeader = ({ userID, setUserID, setLocalUserID }) => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        sx={{
          backgroundImage:
            "red",
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Client Side
          </Typography>

          { userID ? (
            <> <Button color="inherit">
            <Link to={"/"}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/basket"}>Basket</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/login"}>login</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/register"}>register</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/clientproducts"}>clientproducts</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/contact"}>Contact</Link>
          </Button>
          <Button
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      setUserID(null);
                      setLocalUserID(null);
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                      }).then(() => {
                        navigate("/login");
                      });
                    }
                  });
                }}
                color="inherit"
              >
                Log Out
              </Button>
            </>
          ) :
<>
          <Button color="inherit">
            <Link to={"/"}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/login"}>login</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/register"}>register</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/clientproducts"}>clientproducts</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/contact"}>Contact</Link>
          </Button>
          </>
          }
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ClientHeader;
