import logo from "../img/SCANL-LOGO.png"

export function Homepage() {
  return (
    <div className="flex flex-col items-center min-h-screen py-10">
      <h1 className="text-4xl sm:text-6xl p-12 font-bold">Coming soon!</h1>
      <img className="p-6" src={logo} alt="Logo of the Sudanese Community Association of Newfoundland and Labrador inc."/>
    </div>
  );
}

export default Homepage;
