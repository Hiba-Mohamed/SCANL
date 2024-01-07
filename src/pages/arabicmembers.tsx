import ArabicHeader from "../components/arabicHeader";
import ArabicFooter from "../components/arabicFooter";
export function ArabicMembers() {
  return (
    <div>
      <ArabicHeader />
      <div
        lang="ar"
        dir="rtl"
        className="flex flex-col items-center min-h-screen py-10"
      >
        <h1 className="text-4xl sm:text-6xl p-12 font-bold">الاعضاء</h1>
        <h2 className="text-2xl sm:text-3xl py-12">أعضاء المكتب التنفيذي</h2>
        <div className="flex flex-col items-center ">
          <div className="flex flex-col sm:flex-row items-center w-full lg:gap-32">
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\abdalazizadam.JPG" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">رئيس مجلس الإدارة</p>
                <p>عبد العزيز آدم إدريس</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\murtada.JPG" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">نائب رئيس مجلس الإدارة</p>
                <p>مرتضى عبدين الحاج</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full lg:gap-32">
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\haroon.JPG" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">الأمين العام</p>
                <p>هارون إبراهيم محمد</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\ahmedishaq.JPG" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">نائب الأمين العام</p>
                <p>أحمد إسحاق أحمد</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full lg:gap-32">
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\abdalazizishaq.JPG" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">أمين شؤون مالية</p>
                <p>عبد العزيز إسحاق عبد الله</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">نائب أمين شؤون مالية </p>
                <p>محمد إسحاق حسين</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full lg:gap-32">
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\nasraldeen.JPG" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">أمين الشؤون الاجتماعية</p>
                <p>نصر الدين آدم</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img
                src="img\ahmedmuhamadain.JPG"
                className="w-28 rounded-full"
              />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">أمين شؤون البرامج والتنمية</p>
                <p>أحمد إسحاق مهدين</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full lg:gap-32">
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">أمين الشؤون الثقافية</p>
                <p>نادية عدلان أبو راس</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\faris.JPG" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">أمين الشؤون الإعلامية</p>
                <p>فارس عثمان أحمد</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full lg:gap-32">
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">أمين شؤون الرياضية والشباب</p>
                <p>حسن يونس</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">أمين شؤون المرأة والأطفال </p>
                <p>حنان علي</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full lg:gap-32">
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">أمين شؤون المنزلية</p>
                <p>سهير مصطفى علي</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p className="font-bold">أمين شؤون الهجرة </p>
                <p>زكريا آدم عبد الله</p>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
            <img src="img\icon.png" className="w-28 rounded-full" />
            <div className="flex flex-col text-lg w-56">
              <p className="font-bold">أمين الشؤون الأكاديمية</p>
              <p> أبو بكر حامد</p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl py-12 lg:mt-24">
            أعضاء المكتب الاستشاري
          </h2>
          <div className="flex flex-col sm:flex-row items-center w-full lg:gap-32">
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p>فيصل عبد الله</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p>زيد دفع الله كافي</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full lg:gap-32">
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p>سعد محمد</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p>علاء الدين كنجوم</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full lg:gap-32">
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p>فيصل الطاهر</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p>عاصم عبد الله</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full lg:gap-32">
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p>أحمد عزالدين</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-4 flex flex-row items-center gap-8 m-4 lg:w-520">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg w-56">
                <p>ياسر إسماعيل</p>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col sm:flex-row">
            <div className="shadow-lg rounded-xl px-2 py-8 flex flex-row items-center gap-8 m-4">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg">
                <p className="font-bold">General Secretary</p>
                <p> Haroun Ibrahim Mohammed</p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl px-2 py-8 flex flex-row items-center gap-8 m-4">
              <img src="img\icon.png" className="w-28 rounded-full" />
              <div className="flex flex-col text-lg">
                <p className="font-bold">Deputy General Secretary</p>
                <p> Ahmed Ishaq Ahmed</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <ArabicFooter />
    </div>
  );
}

export default ArabicMembers;
