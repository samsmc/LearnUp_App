import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccessibilityNew from "@material-ui/icons/AccessibilityNew";

import useStyles from "./styles-activity-details";

const ActivityDetails = ({ activity }) => {
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
        <Typography gutterBottom variant="h5" className={classes.maxTitle}>
          {activity.activity}
        </Typography>

        <Chip
          key={activity?.type}
          size="small"
          label={activity?.type}
          className={classes.chip}
        />

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Participants</Typography>
          <Typography gutterBottom variant="subtitle1">
            {activity?.participants}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <AttachMoneyIcon />
          <Typography gutterBottom variant="subtitle1">
            {activity.price === 0 ? "free" : activity.price}
          </Typography>
        </Box>
        <Typography
          gutterBottom
          variant="subtitle2"
          color="textSecondary"
          className={classes.subtitle}
        >
          Accessibility
          <AccessibilityNew /> {activity.accessibility || "0"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActivityDetails;
