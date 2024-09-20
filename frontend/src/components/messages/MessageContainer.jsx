import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col max-h-[525px] bg-gradient-to-b from-slate-700 to-slate-800 text-white">
      <>
        {/* Header */}
        <div className="bg-slate-600 px-4 py-2 mb-2">
          <span className="text-slate-300">To:</span>{" "}
          <span className="text-white font-bold">John doe</span>
        </div>

        {/* Messages */}
        <div className="flex-grow overflow-auto">
          <Messages />
        </div>

        {/* Message Input */}
        <MessageInput />
      </>
    </div>
  );
};

export default MessageContainer;
