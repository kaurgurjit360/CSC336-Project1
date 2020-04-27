import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    minWidth: 25,
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="body2" component="p">
         Song: 
        </Typography>
        <Typography variant="body2" component="p">
          Album: 
        </Typography>
        <Typography variant="body2" component="p">
          Artist: 
        </Typography>
      </CardContent>
      <CardActions>
         <IconButton aria-label="add to favorites">
         <FavoriteIcon/>
         </IconButton>
      </CardActions>
    </Card>
  );
}
