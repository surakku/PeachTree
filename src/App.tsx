import peach from './images/peach.png';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { ListAlt } from '@material-ui/icons';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';


const primary = deepPurple[300];

const theme = createTheme({
  palette: {
    primary: {
      main: '#c692fc',
    }
  }

});




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Typography variant="h4" gutterBottom>
          PeachTree
      </Typography>
        <img src={peach} className="App-logo" alt="logo"/>
        <MuiThemeProvider theme={theme}>
          <Fab color='primary' aria-label='Summarize' className='classes.fab'>
          <ListAlt>

          </ListAlt>
          </Fab>
        </MuiThemeProvider>
      </header>
    </div>
  );
}

export default App;
