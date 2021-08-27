import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    root: {
       
        marginTop: 2,
        height:500,
        background:'#f8f9fa'
    },
    headerTitle:{
        '&::after': {
        content:'',
        backgroundColor:'red',
        height:5,
        width:100,
        marginLeft: 'auto',
        marginRight:'auto',
       display:'block'
        }  
    }
}))

const Invitation = ()=>{
    const classes = useStyles()
    return(
        <div>
           <Box className={classes.root}>
           <Typography align="center" variant="h4" className={classes.headerTitle}>Here We Go</Typography>
           <span>
           <i class="fas fa-heart"></i>
           </span>
           </Box>
           <Box>
<h1>i'm in invitation</h1>
<h1>i'm in invitation</h1>
<h1>i'm in invitation</h1>
<h1>i'm in invitation</h1>
<h1>i'm in invitation</h1>
<h1>i'm in invitation</h1>
<h1>i'm in invitation</h1>
<h1>i'm in invitation</h1>
<h1>i'm in invitation</h1>
</Box>
        </div>
        
    )
}

export default Invitation;