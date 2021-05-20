import introImage from '../images/sindoor.png'
import { makeStyles } from '@material-ui/core/styles';
import Image from '../images/image1.jpg'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    imageIcon:{
        width: '10%',
        marginTop: 4,
    },
    welcomeMain:{
        backgroundImage: `url(${Image})`,
        color: 'blue',
        marginTop: 2,
        backgroundSize: 'cover',
  
// background-size: cover;
height:700
    }
  }));
const WelcomeInvite = () => {
    const classes = useStyles();
    return (


        // <div className={classes.welcomeMain}>
        //     <div className="display-table">
        //         <div className="display-table-cell">
        //             <img className="sindoor" src={introImage} alt="sindoor" className={classes.imageIcon}></img>
        //             <h1 className="naming-title">PATHOORI's</h1>
        //             <h2 className="naming-title">Little Princess's</h2>
        //             <h3 className="naming-title">Naming Ceremony</h3>
        //         </div>

        //     </div>

        // </div>

<Card className={classes.welcomeMain}>
<CardContent>
<img className="sindoor" src={introImage} alt="sindoor" className={classes.imageIcon}></img>
<Typography className={classes.title}  component="h1" variant="h3">
PATHOORI's
        </Typography>
        <Typography  component="h2" variant="h3">
        Little Princess's
        </Typography>
        <Typography variant="h3">
        Naming Ceremony
        </Typography>
</CardContent>
</Card>

    )

}

export default WelcomeInvite