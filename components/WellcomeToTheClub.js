function ImageComponent(text) {
  return (
    <div className="max-w-xl mx-auto w-auto" key={text}>
      <div className="flex-1 h-auto p-2">
        <img
          src="https://www.work.mualif.my.id/climbingfish/wp-content/uploads/elementor/thumbs/7a69ec7d03314334d75e9ae2d583346d-scaled-pk76li0ky9cejyr0l2fmpnughohts03z7u35lx675k.jpgnesiamendesain.com/wp-content/uploads/2020/07/Example-of-computer-illustration-digital-art-oct16.jpg"
          className="h-40 w-40 object-cover align-middle mx-auto"
          alt=""
          srcSet=""
        />
        <h2 className=" font-light tablet:text-center desktop:text-left mobile:text-center">{text}</h2>
      </div>
    </div>
  )
}


export default function WellcomeToTheClub() {

  var text = [
    "10,000 Provably-rare Soekirman Token",
    "Fair Launch, fair distribution: All apes cost 0.08 ETH",
    "Ownership and commercial usage rights given to the consumer over their NFT",
    "The Bathroom: A member's-only graffiti board",
    "Gain additional benefits through roadmap activations",
  ]

  return (<div
    className="max-w-7xl mx-auto mt-14 border-solid border-gray-600 border-b-2 mobile:flex-col tablet:flex-col desktop:flex-row tablet:text-center desktop:text-left mobile:text-center"
  >
    <h1 className=" text-3xl font-montserrat font-bold italic">
      WELCOME TO THE CLUB
    </h1>
    <p
      className="py-5  font-montserrat font-light tablet:max-w-xl mobile:max-w-xl desktop:max-w-7xl mx-auto"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laborum,
      obcaecati atque dolorum aperiam omnis veniam nulla eligendi rem quaerat,
      eaque sapiente. Quibusdam atque odio tempore deserunt, facilis incidunt
      eum!
    </p>
    <div
      className="desktop:grid grid-cols-5 px-8 align-middle justify-center tablet:flex-col desktop:flex-row"
    >
      {text.map((item, index) => {
        return ImageComponent(item)
      })}
    </div>
  </div>
  )
}