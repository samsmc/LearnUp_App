import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TablePagination,
} from "@material-ui/core";
import TestTableHeader from "./TestTableHeader";

import useStyles from "./activities-table-styles";

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

const sortedRowInformation = (rowArray, comparator) => {
  const stabilizedArray = rowArray.map((el, index) => [el, index]);
  stabilizedArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedArray.map((el) => el[0]);
};

export default function Content({ allActivities }) {
  const classes = useStyles();

  const numberOfRows = [10, 20];

  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("activity");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(numberOfRows[page]);

  const handleRequestSort = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value), 10);
    setPage(0);
  };

  return (
    <>
      <Paper className={classes.pageContent}>
        <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
          <Table className={classes.table}>
            <TestTableHeader
              valueToOrderBy={valueToOrderBy}
              orderDirection={orderDirection}
              handleRequestSort={handleRequestSort}
            />
            <TableBody>
              {sortedRowInformation(
                allActivities,
                getComparator(orderDirection, valueToOrderBy)
              )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) /* (page*rowsPerPage, (page+1)*rowsPerPage) */
                .map((activity, i) => (
                  <TableRow key={i}>
                    <TableCell align="center">{activity.activity}</TableCell>
                    {/* <TableCell align="center">{activity.accessibility}</TableCell>
                  <TableCell align="center">{activity.type}</TableCell>
                  <TableCell align="center">{activity.participants}</TableCell> */}
                    <TableCell>
                      {activity.price === 0 ? "free" : "$ " + activity.price}
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
          count={allActivities.length}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
