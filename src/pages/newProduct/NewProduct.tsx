import './newProduct.scss'

const NewProduct = () => {
  return (
    <div className="newProductPage">
      <h1>New Product</h1>
      <form>
        <div className="item">
          <label>Image</label>
          <input type='file' id='file' />
        </div>
        <div className="item">
          <label>Name</label>
          <input type="text" placeholder='HyperX Cloud ALPHA'/>
        </div>
        <div className="item">
          <label>Stock</label>
          <input type="text" placeholder='123'/>
        </div>
        <div className="item activeContainer">
          <label> Active </label>
          <select name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button>Create</button>
      </form>
    </div>
  )
}

export default NewProduct