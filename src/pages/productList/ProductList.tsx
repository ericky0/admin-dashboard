import './productList.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { DeleteOutline } from '@mui/icons-material';
import { productsRows as rows } from '../../dummyData';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [data, setData] = useState(rows)

  const handleDelete = (id: string | number) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns: any[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'product', headerName: 'Product', width: 200, renderCell: (params: { row: { img: string; name: string | undefined }; }) => {
      return (
        <div className='productListField'>
          <img src={params.row.img} alt="" />
          {params.row.name}
        </div>
      )
    } },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="editButton ">Edit</button>
            </Link>
            <DeleteOutline className='deleteButton' onClick={() => handleDelete(params.row.id)}/>
          </>
        )
      }
    }
  ];

  return (
    <div className='productListPage'>
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

export default ProductList