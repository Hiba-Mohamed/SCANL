import ArabicFooter from "../components/arabicFooter";
import ArabicHeader from "../components/arabicHeader";

export function ArabicContact() {
  return (
    <div>
      <ArabicHeader />
      <div
        lang="ar"
        dir="rtl"
        className="flex flex-col items-center min-h-screen py-10"
      >
        
        <h1 className="text-4xl sm:text-6xl p-12 font-bold">تواصل معنا</h1>
        <div className="sm: text-lg p-1 bg-slate-950 rounded-3xl shadow-lg">
          <div className="p-1 bg-green-600 rounded-3xl">
            <div className="p-1 bg-rose-600 rounded-3xl">
              {" "}
              <div className="flex flex-col gap-2 items-center p-4 bg-white rounded-3xl shadow-lg">
                <p>فارس عثمان احمد</p>
                <p>سكرتير الاتصالات</p>
                <p dir="ltr">+1(709) 219-3840</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArabicFooter />
    </div>
  );
}

export default ArabicContact;
