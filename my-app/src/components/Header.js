import babyimage1 from '../images/ganesh.jpg'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
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
    <Typography component="span" color="inherit" key={list.id} className={classes.title} >
      {list.title}
    </Typography>
  )

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography component="span" style={{ flex: 4 }}>
            <img src={babyimage1} alt="Logo" className={classes.imageIcon}></img>
          </Typography>
          {listItem}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;