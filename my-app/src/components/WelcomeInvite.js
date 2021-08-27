import introImage from '../images/sindoor.png'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    imageIcon: {
        width: 100,
        marginTop: 4,
    },
    welcomeMain: {
        
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(https://i.pinimg.com/564x/04/1e/40/041e403ccfdfcf80f301b5528e7c025a.jpg)`,
        color: 'white',
        marginTop: 2,
        backgroundSize: 'cover',
        height: 300,
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center',
        fontSize: '4rem',
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            height: 1000,
        }
    },
title:{
    fontFamily: '"Lucida Handwriting", sans-serif',
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
    }
},
welcome:{
    top: '35%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',

    }
}));

const WelcomeInvite = () => {
    const classes = useStyles();
    return (
        <Box className={classes.welcomeMain}>
            <Box align="center" className={classes.welcome}>
                <Typography>
                    <img src={introImage} alt="sindoor" className={classes.imageIcon}></img>
                </Typography>

                <Typography className={classes.title} component="h1" >
                    PATHOORI's
        </Typography>
                <Typography component="h2" className={classes.title}>
                    Little Princess's
        </Typography>
                <Typography className={classes.title}>
                    Naming Ceremony
        </Typography>
            </Box>
        </Box>





        // <AppBar position="static">

        // {/* <Card className={classes.welcomeMain} >
        //     <CardContent align="center" style={{justifyContent: 'center', dispaly:'flex'}}>
        //     <Typography>
        //     <img src={introImage} alt="sindoor" className={classes.imageIcon}></img>
        //     </Typography>

        //         <Typography className={classes.title} component="h1" >
        //             PATHOORI's
        // </Typography>
        //         <Typography component="h2" >
        //             Little Princess's
        // </Typography>
        //         <Typography >
        //             Naming Ceremony
        // </Typography>
        //     </CardContent>
        // </Card>
        //  */}
        // </AppBar>
    )
}

export default WelcomeInvite