import React from "react";
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";

const headCells = [
  { id: "activity", label: "Activity Name" },
  { id: "accessibility", label: "Accessibility" },
  { id: "type", label: "Type" },
  { id: "participants", label: "Participants" },
  { id: "price", label: "Price" },
];

export default function TableHeader(props) {
  const { orderBy, order, handleSortRequest } = props;

  return (
    <>
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              align="center"
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              {headCell.disableSorting ? (
                headCell.label
              ) : (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={() => {
                    handleSortRequest(headCell.id);
                  }}
                >
                  {headCell.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
}
