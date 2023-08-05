import Item from './Item'

const ItemList = ({products}) => {
  return (
      <div className='itemList'>
          {products.map((prod) => {
              return (
                  <Item
                      key={prod.id}
                      id={prod.id}
                      name={prod.name}
                      description={prod.description}
                      amount={prod.amount}
                      image={prod.image}
                  />
              )
          })
          }
      </div>
  )
}

export default ItemList