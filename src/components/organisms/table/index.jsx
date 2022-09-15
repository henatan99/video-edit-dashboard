import React, { useMemo } from "react";
import Image from "next/image.js";

import DataTable from "react-data-table-component";

const Table = (props) => {

  const columns = [
    {
      name: "Customer",
      selector: "customer",
      sortable: true,
      grow: 2
    },
    {
      name: "OrderId",
      selector: "order_id",
      sortable: true,
      hide: "sm"
    },
    {
      name: "Photo",
      selector: "photo",
      sortable: true,
      cell: (row) =>
         (
          <>
            <span
                style={{position: 'relative'}}
            >
                <Image src={row.photo} width='20px' height='20px' />
            </span>
          </>
        ) 
    },
    {
      name: "Product",
      selector: "product.name",
      sortable: true,
      hide: "md"
    },
    {
      name: "Quantity",
      selector: "product.quantity",
      sortable: true,
      hide: "md"
    },
    {
        name: "Date",
        selector: "date",
        sortable: true,
        hide: "md"
    },
    {
        name: "Status",
        selector: "status",
        sortable: true,
        hide: "md",
        cell: (row) =>
         (
          <>
            <span
                style={{background: row.status === 'Pending' ? 'grey' : 'blue', color: 'white'}}
            >
              {row.status}
            </span>
          </>
        ) 
    },
    {
      name: "Buttons",
      button: true,
      cell: (row) =>
        row.showButtons ? (
          <>
            <button
              onClick={() => alert(row.id)}
              style={{ marginRight: "5px", border: 'none', background: 'none' }}
            >
              <Image src='/assets/edit-icon.png' width='20px' height='20px'/>
            </button>
            <button 
                onClick={() => alert(row.id)}
                style={{border: 'none', background: 'none'}}
            >
                <Image src='/assets/delete_icon.png' width='20px' height='20px'/>
            </button>
          </>
        ) : null
    }
  ];

  const [filterText, setFilterText] = React.useState("");

  const filteredItems = props.data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  return (
    <DataTable
      title="Latest Order"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
    />
  );
};

export default Table;
