// import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function Search() {
  return (
    <div className="h-screen">
      <Header />

      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays for 5 Guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">stays in mars</h1>
          <div className="">
            <p className="px-4 py-2  border rounded-full cursor-pointer active:scale-95 active:bg-gray-200 transition transform duration-100 ease-out">
              Cancellation Flexibility
            </p>
            <p className="px-4 py-2  border rounded-full cursor-pointer active:scale-95 active:bg-gray-200 transition transform duration-100 ease-out">
              Type of Stay
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
