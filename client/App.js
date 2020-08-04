import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import "./style.css";

const faces = [
  "http://i.pravatar.cc/300?img=46",
  "http://i.pravatar.cc/300?img=50",
  "http://i.pravatar.cc/300?img=39",
  "http://i.pravatar.cc/300?img=63"
];

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    borderRadius: "10px"
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    padding: "60px",
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});

function App({ classes }) {
  return (
    <div className="App">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            "https://github.githubassets.com/images/modules/site/social-cards/actions.png"
          }
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h4"}
            gutterBottom
          >
            IES Demo Days - Aug 4, 930 hrs
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"h6"}
          >
            This React app is being served from a CDN that was provisioned by Terraform and deployed with GitHub Actions.
          </Typography>
          <Divider className={classes.divider} light />
          {faces.map(face => (
            <Avatar className={classes.avatar} key={face} src={face} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

const WrappedApp = withStyles(styles)(App);

export default WrappedApp;