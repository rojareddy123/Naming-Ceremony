import babyimage1 from '../images/ganesh.jpg'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

  title: {
    flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
        }
  },
  imageIcon: {
    borderRadius: 100,
    width: 50,
    height: 60,
  }
}));
const Header = () => {
  const classes = useStyles();
  const navBarList = [{ id: 1, title: 'INVITATION' }, { id: 2, title: 'GALLERY' }, { id: 3, title: 'CONTACT' },
  ]
  const listItem = navBarList.map((list, i) =>
    <Typography component="span" color="inherit" key={list.i} className={classes.title} >
      {list.title}
    </Typography>
  )

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography component="span" style={{ flex: 4 }}>
            <img src={babyimage1} alt="Logo" className={classes.imageIcon}></img>
          </Typography>
           {listItem} 
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    {/* <div className={classes.offset} /> */}
    </>
  )
}

export default Header;