import React from "react";
import "./table.scss";
import Text from "../Text/Text";

interface Column {
  header: string;
  accessor: string;
}

interface Row {
  [key: string]: string;
}

interface TableProps {
  columns: Column[];
  rows: Row[];
}

const Table: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <div className="table">
      <div className="table-grid">
        <div className="table-header">
          {columns.map((column) => (
            <div key={column.accessor} className="table-cell">
              <Text body6>{column.header}</Text>
            </div>
          ))}
        </div>
        <div className="table-body">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="table-row">
              {columns.map((column) => (
                <div key={column.accessor} className="table-cell">
                  <Text body3>{row[column.accessor]}</Text>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
