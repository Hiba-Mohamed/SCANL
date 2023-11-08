import logo from "../img/SCANL-LOGO.png"
import Header from "../components/header";
import Footer from "../components/footer";

export function Homepage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen py-10">
        <h1 className="text-3xl sm:text-6xl pt-12 font-bold">
          Welcome to SCANL
        </h1>
        <div className="flex flex-col-reverse sm:flex-row items-center p-4 gap-4 sm:p-12">
          <p className="text-lg text-center sm:text-xl sm:max-w-2xl lg:text-3xl">
            Sudanese Community Association of Newfoundland and Labrador (SCANL)
            is a nonprofit association based in St. John's, Newfoundland and
            Labrador, since 2023.
          </p>
          <img
            className="w-56 md:w-96"
            src={logo}
            alt="Logo of the Sudanese Community Association of Newfoundland and Labrador inc."
          />
        </div>
 
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
