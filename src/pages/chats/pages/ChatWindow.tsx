import { useParams } from "react-router-dom";

const ChatWindow = () => {
  const { chatId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Chat ID: {chatId}
      </h1>

      <div className="mt-4">
        Messages will be shown here...
      </div>
    </div>
  );
};

export default ChatWindow;