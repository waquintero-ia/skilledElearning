import Card from "./Card"
import cards from "../cards.json"

const Content = () => {
  return (
    <div className="content-container px-5 pt-16 pb-20 bg-gradient-to-b from-another-start-2 to-another-end-2 md:px-11 md:pb-36 xl-custom:px-20">
      <div className="content flex flex-col gap-8 md:grid grid-cols-2 gap-y-8 gap-x-6 xl-custom:grid-cols-3 xl-custom:w-1120 xl-custom:mx-auto xl-custom:gap-y-14 xl-custom:gap-x-8">
        <a className="bg-gradient-to-b from-custom-start to-custom-end h-122 rounded-[15px] text-white font-extrabold text-2xl flex items-center p-8 shadow-card-shadow md:mt-7 md:pt-16 md:pb-10 md:h-322 md:items-start xl-custom:text-3xl">
          Check out our most popular courses!
        </a>

        {
          cards.map(card => (
            <Card 
              key={card.title} 
              svg={card.svg}
              title={card.title}
              description={card.description}
              button={card.buttom} 
            />
          ))
        }
      </div>
    </div>
  )
}

export default Content