import './userList.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { DeleteOutline } from '@mui/icons-material';
import { rows } from '../../dummyData';
import { Link } from 'react-router-dom';


const UserList = () => {

  const [data, setData] = useState(rows) 

  const handleDelete = (id: string | number) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns: any[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user', headerName: 'Username', width: 200, renderCell: (params: { row: { avatar: string | undefined; username: string | undefined }; }) => {
      return (
        <div className='userListField'>
          <img src={params.row.avatar} alt="avatar" />
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="editButton ">Edit</button>
            </Link>
            <DeleteOutline className='deleteButton' onClick={() => handleDelete(params.row.id)}/>
          </>
        )
      }
    }
  ];
  
  return (
    <div className='userListPage'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={13}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList