import babyimage1 from '../images/ganesh.jpg'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    imageIcon:{
        width: '3%'
    }
  }));
const Header = () => {
    const classes = useStyles();
    const navBarList = [{ id: 3, title: 'INVITATION' }, { id: 2, title: 'GALLERY' }, { id: 1, title: 'CONTACT' },
    ]
    const listItem = navBarList.map((list, i) =>
        // <li className="header-list" key={list.id}>
            // <Link to={list.title.toLowerCase()} className="navbar-content" key={list.id}>{list.title}</Link>
            // {<a href={(list.title).toLowerCase()} className="navbar-content"><span>{list.title}</span></a> }
            <Typography variant="h6" color="inherit" key={list.id} className={classes.title}>
            {list.title}
            </Typography>
        // </li>
    )

    return (
        // <header>
            // {/* <div className="container">
            //     <img src={babyimage1} alt="Logo"></img>
            //     <ul className="invite-navbar" >
            //         {listItem}
            //     </ul>
            // </div> */}
            <div>

            <AppBar position="static">
        <Toolbar variant="dense">
        <IconButton edge="start"  color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <img src={babyimage1} alt="Logo"  className={classes.imageIcon}></img>
         {listItem}
        </Toolbar>
      </AppBar>
       
        </div>

    )
}

export default Header;