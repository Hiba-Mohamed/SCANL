import Header from "../components/header";
import Footer from "../components/footer";
export function ArabicMembers() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen py-10">
        <h1 className="text-4xl sm:text-6xl p-12 font-bold">ArabicMembers Us</h1>
        <div className="sm: text-lg p-1 bg-slate-950 rounded-3xl shadow-lg">
          <div className="p-1 bg-green-600 rounded-3xl">
            <div className="p-1 bg-rose-600 rounded-3xl">
              {" "}
              <div className="flex flex-col gap-2 items-center p-4 bg-white rounded-3xl shadow-lg">
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ArabicMembers;
