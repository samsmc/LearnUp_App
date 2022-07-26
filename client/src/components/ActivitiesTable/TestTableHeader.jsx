import React from "react";
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";

export default function TableHeader(props) {

  const { valueToOrderBy, orderDirection, handleRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell align="center" key="activity">
          <TableSortLabel
            active={valueToOrderBy === "activity"}
            direction={valueToOrderBy === "activity" ? orderDirection : "asc"}
            onClick={createSortHandler("activity")}
          >
            activity
          </TableSortLabel>
        </TableCell>
        <TableCell key="price">
          <TableSortLabel
            active={valueToOrderBy === "price"}
            direction={valueToOrderBy === "price" ? orderDirection : "asc"}
            onClick={createSortHandler("price")}
          >
            price
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
