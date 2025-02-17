
import Card from './Card';

export default function ScrollSnap() {

  const cards = [
    {
      image: "../../../../assets/image/P1.jpg",
      title: "Card 1",
      description: "Description for card 1",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Card 2",
      description: "Description for card 2",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Card 2",
      description: "Description for card 2",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Card 2",
      description: "Description for card 2",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Card 2",
      description: "Description for card 2",
    },
    // Ajoutez plus de cartes ici
  ];


  return (
    <>
      <div className="snap-y snap-mandatory h-screen ">
        <div className="flex flex-nowrap snap-x snap-mandatory">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}
