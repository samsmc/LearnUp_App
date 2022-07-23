import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  /* CardActions, */
  Chip,
} from "@material-ui/core";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccessibilityNew from '@material-ui/icons/AccessibilityNew';

import useStyles from "./activity-details-styles";

const ActivityDetails = ({ activity, selected, refProp }) => {
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 200 }}
        image={
          activity.imageUrl
            ? activity.imageUrl
            : "https://source.unsplash.com/random/896x504"
        }
        title={activity.activity}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {activity.activity}
        </Typography>

        <Chip key={activity.type} size="small" label={activity.type} className={classes.chip} />

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Participants</Typography>
          <Typography gutterBottom variant="subtitle1">
            {activity.participants}
          </Typography>
        </Box>
        
        <Box display="flex" justifyContent="space-between">
          <AttachMoneyIcon />
          <Typography gutterBottom variant="subtitle1">
            {activity.price}
          </Typography>
        </Box>

        {activity?.accessibility && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <Typography variant="subtitle2">accessibility</Typography>
            <AccessibilityNew /> {activity.accessibility} 
          </Typography>
        )}
        
      </CardContent>
    </Card>
  );
};

export default ActivityDetails;
