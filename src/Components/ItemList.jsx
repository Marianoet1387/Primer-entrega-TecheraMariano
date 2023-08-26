import Item from './Item'

const ItemList = ({ products }) => {
  return (
    <div className='itemList'>
      {products.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          name={prod.name}
          description={prod.description}
          price={prod.price}
          image={prod.image}
        />
      ))}
    </div>
  )
}

export default ItemList