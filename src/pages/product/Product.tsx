import { Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import './product.scss'

const Product = () => {
  return (
    <div className="productPage">
      <div className="titleContainer">
        <h1>Product</h1>
        <Link to="/newProduct">
          <button>Create</button>
        </Link>
      </div>

      <div className="top">
        <div className="topLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Perfomance"
            grid
          />
        </div>
        <div className="topRight">
          <div className="topInfo">
            <img
              src="https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_cloud_alpha_blackred_1_main.jpg?v=1655969550"
              alt=""
            />
            <span>HyperX Cloud ALPHA</span>
          </div>
          <div className="bottomInfo">
            <div className="infoItem">
              <span className="key">id:</span>
              <span className="value">123</span>
            </div>
            <div className="infoItem">
              <span className="key">sales:</span>
              <span className="value">5123</span>
            </div>
            <div className="infoItem">
              <span className="key">active:</span>
              <span className="value">yes</span>
            </div>
            <div className="infoItem">
              <span className="key">in stock:</span>
              <span className="value">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <form>
          <div className="left">
            <label>Product Name</label>
            <input type="text" placeholder="HyperX Cloud ALPHA" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="right">
            <div className="upload">
              <label htmlFor="file"><img src="https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_cloud_alpha_blackred_1_main.jpg?v=1655969550" alt=""/><Publish className='publish'/></label>
              <input type="file" id="file" style={{display: 'none'}} />
            </div>
          </div>
        </form>
        <div className="buttonWrapper">
          <button>Update</button>
        </div>
      </div>
    </div>
  )
}

export default Product
