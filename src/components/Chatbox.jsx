import { useState } from 'react';
import './App.css';
import Tabs from './Tabs';
import QestionsTypes from './QestionsTypes';

function Chatbox() {
    const [inputText, setInputText] = useState('');

    return (
        <div className="p-8 flex flex-col items-center">
            
            <div className="mb-8 text-center p-5">
                <h1 className="text-4xl font-semibold text-gray-800">
                مرحبا بك ! ما الموضيع التي تريد السؤال عنها اليوم ؟
                </h1>
            </div>

            <div className="w-full max-w-6xl bg-white rounded-lg shadow-sm p-4">
                
                <Tabs />
            
                <textarea 
                    className="w-full h-[350px] p-3 border border-gray-200 rounded resize-none text-xl mb-4 outline-none"
                    placeholder="أدخل النص هنا لتوليد الأسئلة..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            
                <QestionsTypes />
            </div>
        </div>
    );
}

export default Chatbox;