import { useState } from "react";

function Tabs() {
    const [selectedTab, setSelectedTab] = useState('text');
    return (
        <div className="flex border-b border-gray-200 mb-4">
            <button 
            className={`px-4 py-2 text-xl ${selectedTab === 'text' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('text')}
            >
                نص
            </button>
            <button 
            className={`px-4 py-2 text-xl ${selectedTab === 'image' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('image')}
            >
                صورة
            </button>
            <button 
            className={`px-4 py-2 text-xl ${selectedTab === 'pdf' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-600'}`}
            onClick={() => setSelectedTab('pdf')}
            >
                ملف PDF
            </button>
        </div>
    )
}

export default Tabs