import './App.css';
import Header from './components/Header';
import WelcomeInvite from './components/WelcomeInvite';
import Grid from '@material-ui/core/Grid';
function App() {
  return (
    <Grid container >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}  >
        <WelcomeInvite></WelcomeInvite>
      </Grid>
    </Grid>
  );
}

export default App;
