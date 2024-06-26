export default function Item({item}) {
  return (
      <section className="bg-green-500 p-5 rounded">
          <h3 className="text-xl">Name : {item.name}</h3>
          <p>Quantity : {item.quantity}</p>
          <p>Category : {item.category}</p>
      </section>
  );

}