const MessagesClient = () => {
    return (
        
      <div className="flex flex-row h-screen bg-gray-200">
        {/* Left section */}
        <div className="w-1/4 h-full bg-white border-r border-gray-300">
          <div className="bg-gray-100 px-4 py-2 border-b border-gray-300 font-bold text-lg">
            Conversations
          </div>
          <div className="p-4">
            {/* List of conversations */}
            <div className="mb-4">
              <div className="flex items-center cursor-pointer">
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center cursor-pointer">
              </div>
            </div>
          </div>
        </div>
  
        {/* Right section */}
        <div className="w-3/4 h-full bg-white">
          <div className="bg-gray-100 px-4 py-2 border-b border-gray-300 font-bold text-lg">
            Messages
          </div>
          <div className="p-4 h-full flex flex-col-reverse">
            {/* Messages */}
            <div className="mb-4 text-right">
            </div>
            <div className="mb-4">
            </div>
            <div className="mb-4 text-right">
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MessagesClient;
  