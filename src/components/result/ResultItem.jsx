export const ResultItem = ({ title, answer, options, userAnswer }) => {
    return (
        <div className="w-92 bg-white shadow-md shadow-white/50 rounded-lg flex items-center p-4 flex-col">
            <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
            <div className="w-full grid grid-cols-2 grid-rows-2 mt-4">
                {
                    options.map((option, index) => (
                        <div key={index} className="w-full flex items-center">
                            <input disabled type="radio" value={option} checked={option === userAnswer} />
                            <p
                                className={`text-2xl ml-3 
                              ${option === answer ? 'text-green-600'
                                        : option === userAnswer
                                            ? 'text-red-500' : 'text-gray-600'}`}>{option}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
