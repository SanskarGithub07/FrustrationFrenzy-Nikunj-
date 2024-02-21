import React from "react";
import Image from "next/image";
import Link from "next/link";
import bamboo from "../../public/bamboo.jpg";
import tranquil from "../../public/tranquil.jpg";
import drum from "../../public/drum.jpg";
import candle from "../../public/candle.jpg";
import Foooter from "../Components/Foooter";

const products = [
  {
    id: 1,
    image: bamboo,
    heading: "TriadCascade Bamboo Fountain | Without Basebowl",
    description:
      "Experience the serenity of our Bamboo Water Fountain, meticulously handcrafted from sustainably sourced bamboo. Its timeless design, inspired by Zen aesthetics, seamlessly integrates into any space, serving as both a striking decor piece and a meditation tool. Beyond its aesthetic appeal, this fountain offers a myriad of health benefits, acting as an air purifier by releasing negative ions to cleanse the atmosphere and as a humidity balancer, providing moisture to dry environments, beneficial for skin and overall well-being. Let the gentle trickle of water lull you into relaxation, promoting better sleep and enhancing your daily living experience with its natural beauty and functionality.",
    price: 800,
  },
  {
    id: 2,
    image: tranquil,
    heading: "Home Spa Kit: Tranquil Retreat at Home",
    description:
      "Transform your home into a haven of relaxation with our Home Spa Kit, curated to elevate your self-care routine. Immerse yourself in a tranquil ambiance as our Serene Soy Wax Candle fills the air with soothing fragrance, setting the stage for a peaceful spa-like experience. Indulge in the luxurious bliss of our Lotus Bliss Body SPA Oil, crafted to provide tranquil and tension-relieving effects, leaving your skin nourished and your senses rejuvenated. Enhance your well-being with the harmonizing effects of our Kansa Wand, promoting balance and rejuvenation with every use. Embrace tranquility, indulge in bliss, and harmonize your mind and body with our rejuvenating Home Spa Kit.",
    price: 850,
  },
  {
    id: 3,
    image: candle,
    heading: "Zen Candles",
    description:
      "Elevate your space with our Zen Stone Candle Holders, meticulously crafted from genuine pumice stones, ensuring each piece bears a unique texture, guaranteeing no two holders are alike. Rooted in Zen symbolism, these candle holders transcend mere illumination, fostering an atmosphere of reflection and mindfulness. Their versatile design seamlessly integrates into any space, whether adorning meditation corners, living rooms, patios, or any area you desire to infuse with serene energy. Embrace the essence of Wabi Sabi elegance with their rustic and raw finish, making them the quintessential Zen decor accent for your home. Choose our Zen Stone Candle Holders to enrich your environment with natural craftsmanship, spiritual significance, and timeless charm.",
    price: 750,
  },
  {
    id: 4,
    image: drum,
    heading: "Hapi Drums: Sound of Serenity",
    description:
      "Immerse yourself in the captivating world of Hapi Drums, intricately crafted in India to reflect the nation's rich musical heritage. Designed for both beginners and professionals, these drums boast versatility and authenticity, making them a perfect companion for musical exploration. Their lightweight and portable design ensure you can take your rhythmic journey with you wherever you roam, while their unique craftsmanship makes them an ideal gift choice for music enthusiasts seeking a distinctive and heartfelt present. From fostering tranquility in meditation sessions to adding an exotic touch to musical performances, from facilitating therapeutic sound healing sessions to providing moments of personal relaxation and enjoyment, Hapi Drums offer a multifaceted experience that enriches every aspect of musical expression and beyond.",
    price: 900,
  },
];

export default function Page() {
  return (
    <>
      <div className="w-full bg-white-green">
        <div className="w-full bg-white-green drop-shadow-xl mb-8">
          <h1 className="text-center text-black text-6xl font-dancing py-4">
            PRODUCTS...
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-32 place-content-center w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-1/3 h-1/3 flex flex-col gap-4 place-content-center"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full drop-shadow-2xl object-cover">
                  <div className="w-full flex place-content-center">
                    <Image
                      src={product.image}
                      height={400}
                      alt="No image"
                      width={400}
                    />
                  </div>
                </div>
              </div>
              <div className="text-black w-full text-center p-2">
                <h2 className="text-2xl font-bold font-dancing mb-2">
                  {product.heading}
                </h2>
                <p className="text-dark-green font-normal mb-2 text-md font-crimson">
                  {product.description}
                  <br />
                  <br />
                  <strong className="text-sec-red text-md font-crimson">
                    Available For Just Rs.{product.price}
                  </strong>
                </p>
              </div>
              <Link href="/cart">
                <div className="text-black w-full flex justify-center">
                  <button className="p-2 w-1/2 bg-sec-red text-white-green hover:bg-black hover:text-white hover:ease-in">
                    Add To Cart
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Foooter />
        </div>
      </div>
    </>
  );
}
