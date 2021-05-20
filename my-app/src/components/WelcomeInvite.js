import introImage from '../images/sindoor.png'
import { makeStyles } from '@material-ui/core/styles';
import Image from '../images/image1.jpg'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    imageIcon: {
        width: 200,
        marginTop: 4,
    },
    welcomeMain: {
        backgroundImage: `url(${Image})`,
        color: 'blue',
        marginTop: 2,
        backgroundSize: 'cover',
        height: 700
    }
}));

const WelcomeInvite = () => {
    const classes = useStyles();
    return (
        <Card className={classes.welcomeMain}>
            <CardContent align="center">
                <img src={introImage} alt="sindoor" className={classes.imageIcon}></img>
                <Typography className={classes.title} component="h1" variant="h3">
                    PATHOORI's
        </Typography>
                <Typography component="h2" variant="h3">
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