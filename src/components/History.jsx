import { RiChatNewLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import HistoryItem from "./HistoryItem";
function History() {
    const historyLabels = [
        { id: 1, label: "محادثة حول تطوير الويب" },
        { id: 2, label: "استفسارات حول React.js" },
        { id: 3, label: "أسئلة عن واجهات المستخدم" },
        { id: 4, label: "مناقشة حول أفضل الممارسات" },
        { id: 5, label: "استشارة حول أدوات التطوير" },
        { id: 10, label: "نصائح لتحسين الكود" },
        { id: 7, label: "أسئلة حول أداء التطبيقات" },
        { id: 9, label: "استكشاف أخطاء وإصلاحها" },
        { id: 10, label: "نصائح لتحسين الكود" },
        { id: 6, label: "نقاش عن أنظمة التصميم" },
        { id: 8, label: "حوار عن تقنيات جديدة" },
        { id: 10, label: "نصائح لتحسين الكود" },
    ];
    return (
        <div className="bg-white w-[300px] h-screen px-4 flex flex-col items-center ">
            <div className="border-b-2 border-gray-300 h-[13%] flex justify-center items-center">
                <button className="bg-[#5661f6] w-[250px] p-2 sm:p-3 rounded-full text-white text-base sm:text-2xl m-5 cursor-pointer flex flex-row gap-2 justify-center items-center">
                    <span>محادثة جديدة </span>
                    <RiChatNewLine />
                </button>
            </div>
            <div className="border-gray-300 h-[87%] w-full ">
                <div className="flex flex-row justify-between items-center p-2">
                    <span className="text-gray-800">محاداثاتك</span>
                    <span className="text-red-400 cursor-pointer" >مسح الكل</span>
                </div>
                <ul className="overflow-y-auto h-[90%] ">
                    {historyLabels.map((item) => (
                        <HistoryItem key={item.id} label={item.label} />
                    ))}    
                    <Tooltip 
                        id="history-tooltip" 
                        className="z-50 max-w-[300px]"
                        delayShow={300}
                    />
                </ul>
            </div>
        </div>
    )
}

export default History