import React,{useContext} from 'react'
import Items from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from './Cart';


const Home = () => {

    const {item, clearCart, totalItem, totalAmount} = useContext(CartContext);

    if(item.length === 0){
        return (
            <>
                 <header>
                <div className='continue-shopping'>
                    <img src='./images/arrow.png' alt='arrow' className='arrow-icon' />
                    <h3>continue-shopping</h3>
                </div>

                <div className='cart-icon'>
                    <img src='./images/cart.png' alt='cart' />
                    <p>0</p>
                </div>
            </header>

          <section className='main-cart-section'>
              <h1>Shopping Cart</h1>
              <p className='total-items'>you have <span className='total-items-count'>0</span> items in the shopping cart</p>
              </section>
            </>
        )
    }


    return (
        <>
            <header>
                <div className='continue-shopping'>
                    <img src='./images/arrow.png' alt='arrow' className='arrow-icon' />
                    <h3>continue-shopping</h3>
                </div>

                <div className='cart-icon'>
                    <img src='./images/cart.png' alt='cart' />
                    <p>{totalItem}</p>
                </div>
            </header>

          <section className='main-cart-section'>
              <h1>Shopping Cart</h1>
              <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span> items in the shopping cart</p>

              <div className='cart-items'>
                  <div className='cart-items-container'>
                    <Scrollbars >
                      {
                          item.map((currItem)=>{
                              return <Items key={currItem.id} {...currItem} />
                          }) 
                      }
                    </Scrollbars>
                  </div>

              </div>

              <div className='card-total'>
                   <h3>Cart Total: <span>{totalAmount}₹</span></h3>
                   <button>Checkout</button>
                   <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
              </div>
          </section>
        </>
    )
}

export default Home
