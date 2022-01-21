import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import InfoCard from "../components/infocard/InfoCard";
import Map from "../components/map/Map";
import { useRouter } from "next/router";
import format from "date-fns/format";

function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "MMMM dd, yyyy");
  const formattedEndDate = format(new Date(endDate), "MMMM dd, yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guest(s)`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - {numberOfGuests} guest(s)
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Stay</p>
            <p className="button">Price</p>
            <p className="button">Rooms & Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ id, img, location, title, description, stars, price, total }) => (
                <InfoCard
                  key={img}
                  id={id}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  stars={stars}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

// for server side rendering
export async function getServerSideProps() {
  // retrieve data from api endpoint
  const searchResults = await fetch(
    "https://airbnb-clone-flask.herokuapp.com/properties"
  ).then((res) => res.json());

  return {
    props: {
      searchResults: searchResults,
    },
  };
}
