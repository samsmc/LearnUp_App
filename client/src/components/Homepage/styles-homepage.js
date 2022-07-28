import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
    marginTop: "30px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  randomButton: {
    marginTop: "15px",
    marginLeft: "10px",
    color: "#3f51b5",
    borderColor: "#3f51b5",
  },
  imBoredButton: {
    marginTop: "15px",
    marginLeft: "10px",
    color: "#3f51b5",
    borderColor: "#3f51b5",
  },
}));
