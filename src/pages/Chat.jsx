import Chatbox from "../components/Chatbox"
import History from "../components/History"
function Chat() {
  return (
    <div className="bg-gray-100 flex flex-row">
      <History />
      <div className="flex-1 text-center">
        <Chatbox />
      </div>
    </div>
  )
}

export default Chat