import Button from './button/Button'
import './widgetLg.scss'

const WidgetLg = () => {
  return (
    <div className='widgetLgComponent'>
      <h3 className="title">Latest Transactions</h3>
      <table>
        <tr className='firstTr'>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" alt="" />
            <span>Caroline Ennes</span>
          </td>
          <td className='date'>2 Jun 2021</td>
          <td className='amount'>$122.00</td>
          <td className='status'><Button type='Approved' /></td>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" alt="" />
            <span>Caroline Ennes</span>
          </td>
          <td className='date'>2 Jun 2021</td>
          <td className='amount'>$122.00</td>
          <td className='status'><Button type='Declined' /></td>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" alt="" />
            <span>Caroline Ennes</span>
          </td>
          <td className='date'>2 Jun 2021</td>
          <td className='amount'>$122.00</td>
          <td className='status'><Button type='Pending' /></td>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" alt="" />
            <span>Caroline Ennes</span>
          </td>
          <td className='date'>2 Jun 2021</td>
          <td className='amount'>$122.00</td>
          <td className='status'><Button type='Approved' /></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg