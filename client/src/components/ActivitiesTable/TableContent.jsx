import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TablePagination,
  Typography,
  Button,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import TableHeader from "./TableHeader";

import useStyles from "./styles-activities-table";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function sortedRowInformation(rowArray, comparator) {
  const stabilizedThis = rowArray.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function TableContent({ mergedActivitiesData }) {
  const classes = useStyles();

  const numberOfRows = [10, 20];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(numberOfRows[page]);

  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const handleSortRequest = (cellId) => {
    const isAscending = orderBy === cellId && order === "asc";
    setOrderBy(cellId);
    setOrder(isAscending ? "desc" : "asc");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value), 10);
    setPage(0);
  };

  return (
    <div>
      <Paper className={classes.pageContent}>
        <Typography variant="h4" align="center">
          Complete list of Activities
        </Typography>
        <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
          <Table className={classes.table}>
            <TableHeader
              orderBy={orderBy}
              order={order}
              handleSortRequest={handleSortRequest}
            />
            <TableBody>
              {sortedRowInformation(
                mergedActivitiesData,
                getComparator(order, orderBy)
              )
                .slice(
                  page * rowsPerPage,
                  (page + 1) * rowsPerPage
                ) /* (page * rowsPerPage, page * rowsPerPage + rowsPerPage) */
                .map((activity, i) => (
                  <TableRow key={i}>
                    <TableCell align="center">{activity.activity}</TableCell>
                    <TableCell align="center">
                      {activity.accessibility}
                    </TableCell>
                    <TableCell align="center">{activity.type}</TableCell>
                    <TableCell align="center">
                      {activity.participants}
                    </TableCell>
                    <TableCell align="center">
                      {activity.price === 0 ? "free" : activity.price}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          page={page}
          rowsPerPageOptions={numberOfRows}
          rowsPerPage={rowsPerPage}
          count={mergedActivitiesData.length}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Button component={Link} to="/" variant="contained" color="primary">
          <HomeIcon />
        </Button>
      </Paper>
    </div>
  );
}
