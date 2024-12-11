const WebSocket = () => {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-[50%] h-[50%] p-2 rounded-xl bg-gray-300">
                    <iframe src="http://localhost:5173/" className="w-full h-[370px]" />
                </div>
                <div className="w-[50%] h-[50%] p-2 rounded-xl bg-gray-300">
                    <iframe src="http://localhost:5173/" className="w-full h-[370px]" />
                </div>
                <div className="w-[50%] h-[50%] p-2 rounded-xl bg-gray-300">
                    <iframe src="http://localhost:5173/" className="w-full h-[370px]" />
                </div>
                <div className="w-[50%] h-[50%] p-2 rounded-xl bg-gray-300">
                    <iframe src="http://localhost:5173/" className="w-full h-[370px]" />
                </div>
            </div>
        </>
    )
}

export default WebSocket;