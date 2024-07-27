'use client'
import React, { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AppContext } from './AppContext';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Full Name ', width: 220 },
  { field: 'phone', headerName: 'Phone Number', width: 150 },
  {
    field: 'email',
    headerName: 'Email ID',
    width: 250,
  },
  {
    field: 'hobbies',
    headerName: 'Hobbies',
    width: 500,
  },
];


const Table = () => {
  const { formData } = useContext(AppContext);
  const { setSelectedRow } = useContext(AppContext);
  //initialize rows to formData
  const rows = formData;

  const handleSelectionChange = (selectionModel) => {
    const selectedData = selectionModel.map((id) => formData.find((row) => row.id === id));
    // console.log("Selected row data is", selectedData);
    setSelectedRow(selectedData);
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={(selectionModel) => handleSelectionChange(selectionModel)}
      />
    </div>
  )
}

export default Table
