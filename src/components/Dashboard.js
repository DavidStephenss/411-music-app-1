
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';

export default function Switches() {
  //switch for card number1
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const valuetext = (value) => {
  return `${value}°C`;
}
  

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      {/* <Box
        component="span"
        m={10}
        display="flex "
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-evenly"
      >
      </Box> */}
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Online Mode
        </Typography>
        <Typography variant="h5" component="h2">
         Is this application connected to the internet?
        </Typography>
        <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </CardContent>
    </Card>
    {/* second card */}
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
       Master Volume
        </Typography>
        <Typography variant="h5" component="h2">
         Overrides all other sound settings in this application
        </Typography>
        <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <Typography id="discrete-slider" gutterBottom>
        Disabled
      </Typography>
      </CardContent>
    </Card>
    {/* Third card */}
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Sound Quality
        </Typography>
        <Typography variant="h5" component="h2">
        Manually control the music quality in event of poor connection
        </Typography>
        <Select></Select>
      </CardContent>
    </Card>
    </div>
  );
}
// const dashboard = () => {
//   return (
//     <div>
//       <p>hello</p>
//     </div>
//     );
// }
 
// export default dashboard;




