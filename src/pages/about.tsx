import Header from "../components/header";
import Footer from "../components/footer";
export function About() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen py-10">
        <h1 className="text-4xl sm:text-6xl p-12 font-bold">About</h1>

        <div className="flex flex-col rounded-3xl shadow-lg m-6 p-4 md:text-xl sm:text-lg md:max-w-3xl sm:mb-24">
          <p> SCANL aims to:</p>
          <ul className="list-disc p-4 flex flex-col gap-4">
            <li>
              promoting and preserving Sudanese languages, dialects, cultures,
              heritage, and passing them on to new generations and the Scanl
              society at large
            </li>

            <li>
              Establish and enhance social relations among Sudanese immigrants,
              refugees, and students in NL.
            </li>
            <li>Provide social services for members and their families.</li>
            <li>
              Enhance a better understanding of Scanl society, laws, and
              services for better social integration
            </li>
            <li>
              {" "}
              Offer diverse social assistance and services to new immigrants,
              refugees, and students, and connect them with other Sudanese-SCANL
              families.
            </li>
          </ul>
        </div>

        <p className="flex flex-col rounded-3xl shadow-lg m-6 p-4 md:text-xl sm:text-lg md:max-w-3xl sm:mb-24">
          Membership is open to all Sudanese, their spouses, landed immigrants,
          refugees, and students residing in NL who believe in and work towards
          the objectives of SCANL, which include promoting and preserving
          Sudanese languages, dialects, cultures, heritage, and passing them on
          to new generations and the Scanl society at large
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
