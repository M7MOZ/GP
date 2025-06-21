import { useState } from "react";

function QestionsTypes() {
    const [selectedOption, setSelectedOption] = useState('essay');

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4 flex-col md:flex-row">
                <label className="flex items-center gap-1 cursor-pointer text-xl">
                    <input 
                    type="radio" 
                    name="option" 
                    value="essay" 
                    checked={selectedOption === 'essay'} 
                    onChange={() => setSelectedOption('essay')}
                    className="h-4 w-4"
                    />
                    <span>مقالي</span>
                </label>
                
                <label className="flex items-center gap-1 cursor-pointer text-xl">
                    <input 
                    type="radio" 
                    name="option" 
                    value="TF" 
                    checked={selectedOption === 'TF'} 
                    onChange={() => setSelectedOption('TF')}
                    className="h-4 w-4"
                    />
                    <span>صح ام خطأ</span>
                </label>
                
                <label className="flex items-center gap-1 cursor-pointer text-xl">
                    <input 
                    type="radio" 
                    name="option" 
                    value="MCQ" 
                    checked={selectedOption === 'MCQ'} 
                    onChange={() => setSelectedOption('MCQ')}
                    className="h-4 w-4"
                    />
                    <span>اختيار من متعدد</span>
                </label>
            </div>
            
            <button 
            className="bg-indigo-500 text-white rounded px-4 py-2 text-xl hover:bg-indigo-600 transition-colors"
            >
                توليد الأسئلة
            </button>
        </div>
    )
}

export default QestionsTypes