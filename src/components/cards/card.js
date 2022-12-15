import "./card.css";

export function Cards() {
  const cardsArr = [
    {
      title: "Unresolved",
      son: 60,
    },
    {
      title: "Overdue",
      son: 16,
    },
    {
      title: "Open",
      son: 43,
    },
    {
      title: "On hold",
      son: 64,
    },
  ];

  return (
    (<h1>sssss</h1>),
    cardsArr.map((item) => (
      <li key={item.id} className='cards-item'>
        <span className='cards__title'>{item.title}</span>
        <h3 className='card__son'>{item.son}</h3>
      </li>
    ))
  );
}
