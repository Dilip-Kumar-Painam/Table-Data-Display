import React from "react";

const Table = (props) => {
  const { tableHeaders, tableData } = props;
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr>
            {Object.values(row).map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
