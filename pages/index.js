import Head from "next/head";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import SmallCard from "../components/smallcard/SmallCard";
import MediumCard from "../components/mediumcard/MediumCard";
import LargeCard from "../components/largecard/LargeCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>NOT actually Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header goes here */}
      <Header />

      {/* banner goes here */}
      <Banner className="bg-gray-800" />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Inspiration for future getaways
          </h2>

          {/* pull images from server using server-side rendering (SSR) -> API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <div>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
            <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 ml-3">
              {cardsData.map(({ img, title }) => (
                <MediumCard key={img} img={img} title={title} />
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="relative">
            <LargeCard
              img="https://links.papareact.com/4cj"
              title="Enjoy The Great Outdoors"
              description="Check out our wishlists."
              buttonText="Get inspired"
            />
          </div>
        </section>

        <section>
          <footer>
            <div>
              <Footer />
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // pulls JSON data for small cards -> img, location and distance
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json() // return result to functional component
  );

  // pulls json data for large cards -> img, location,
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    // properties
    props: {
      exploreData,
      cardsData,
    },
  };
}
