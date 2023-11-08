import logo from "../img/SCANL-LOGO.png";
import ArabicFooter from "../components/arabicFooter";
import ArabicHeader from "../components/arabicHeader";
export function ArabicHomePage() {
  return (
    <div lang="ar">
      <ArabicHeader />
      <div className="flex flex-col items-center min-h-screen py-10">
        <h1 className="text-3xl sm:text-6xl pt-12 font-bold">
          ترحب بكم (<span dir="ltr">SCANL</span>)
        </h1>
        <div className="flex flex-col-reverse sm:flex-row-reverse items-center p-4 gap-4 sm:p-12">
          <p
            lang="ar"
            className="text-lg text-center sm:text-xl sm:max-w-2xl lg:text-3xl"
          >
            جمعية الجالية السودانية في نيوفاوندلاند ولابرادور(
            <span dir="ltr">SCANL</span>) هي جمعية غير ربحية مقرها في سانت جونز
            ونيوفاوندلاند ولابرادور، منذ عام 2023
          </p>
          <img
            className="w-56 md:w-96"
            src={logo}
            alt="Logo of the Sudanese Community Association of Newfoundland and Labrador inc."
          />
        </div>

      </div>
      <ArabicFooter />
    </div>
  );
}

export default ArabicHomePage;
