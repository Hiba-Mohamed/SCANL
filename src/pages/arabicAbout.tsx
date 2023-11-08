import ArabicFooter from "../components/arabicFooter";
import ArabicHeader from "../components/arabicHeader";
export function ArabicAbout() {
  return (
    <div lang="ar" dir="rtl">
      <ArabicHeader />
      <div className="flex flex-col items-center min-h-screen py-10">
        <h1 className="text-4xl sm:text-6xl p-12 font-bold">عن الجمعية</h1>

        <div className="flex flex-col rounded-3xl shadow-lg m-6 p-4 md:text-xl sm:text-lg md:max-w-3xl sm:mb-24">
          <p>تهدف SCANL الى:</p>
          <ul className="list-disc p-4 flex flex-col gap-4">
            <li>
              الحفاظ على اللغات واللهجات والثقافات والتراث السوداني ونقلها
            </li>

            <li>
              إنشاء وتعزيز العلاقات الاجتماعية بين المهاجرين واللاجئين والطلاب
              السودانيين في نيوفاوندلاند و لابرادور
            </li>
            <li>توفير الخدمات الاجتماعية للأعضاء وأسرهم</li>
            <li>
              وتعزيز فهم أفضل لمجتمع سكانل والقوانين والخدمات من أجل تكامل
              اجتماعي أفضل
            </li>
            <li>
              {" "}
              تقديم خدمات اجتماعية متنوعة. المساعدة والخدمات للمهاجرين الجدد
              واللاجئين والطلاب و ربطهم مع عائلات SCANL السودانية الاخرى
            </li>
          </ul>
        </div>
        <p
          lang="ar"
          className="flex flex-col rounded-3xl shadow-lg m-6 p-4 md:text-xl sm:text-lg md:max-w-3xl sm:mb-24"
        >
          العضوية مفتوحة لجميع السودانيين وأزواجهم والمهاجرين واللاجئين والطلاب
          (SCANL) المقيمين في نيوفاوندلاند ولابرادور الذين يؤمنون والعمل على
          تحقيق أهداف والتي تشمل تعزيز والحفاظ على اللغات واللهجات والثقافات
          والتراث السوداني ونقلها إلى الأجيال الجديدة ومجتمع سكانل ككل.
        </p>
      </div>
      <ArabicFooter />
    </div>
  );
}

export default ArabicAbout;
