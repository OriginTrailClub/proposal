import { styled } from "stitches.config";

const TableCellContainer = styled("td", {
  textStyle: "$table-cell",
  textAlign: "left",
  p: "$small",
});

function TableCell({ children }) {
  return <TableCellContainer>{children}</TableCellContainer>;
}

const TableColumnHeaderContainer = styled("th", {
  textStyle: "$table-head",
  textAlign: "left",
  p: "$small",
  borderWidth: 0,
  borderBottomWidth: 2,
  borderBottomStyle: "solid",
  borderColor: "$gray-300",
});

function TableColumnHeader({ children }) {
  return <TableColumnHeaderContainer>{children}</TableColumnHeaderContainer>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableHeaderRow({ children }) {
  return <tr>{children}</tr>;
}

function TableHeader({ children }) {
  return (
    <thead>
      <TableHeaderRow>{children}</TableHeaderRow>
    </thead>
  );
}

const TableContainer = styled("div", {
  width: "100%",
  maxWidth: "100%",
  overflowX: "auto",
  overflowY: "hidden",
});

const TableBase = styled("table", {
  width: "100%",
  borderCollapse: "collapse",
});

function Table(props) {
  return (
    <TableContainer>
      <TableBase>{props.children}</TableBase>
    </TableContainer>
  );
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Column = TableColumnHeader;
Table.Cell = TableCell;
Table.Row = TableRow;

export default Table;
