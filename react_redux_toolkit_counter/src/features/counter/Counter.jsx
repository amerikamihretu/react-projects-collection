import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice';
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    // Resets both the Redux state and the input field
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <div className="max-w-sm mx-auto mt-20 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Counter</h2>
            
            {/* Display count */}
            <div className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
                {count}
            </div>

            {/* + and - buttons */}
            <div className="flex justify-center gap-6 mb-6">
                <button
                    onClick={() => dispatch(decrement())}
                    className="w-16 h-16 text-3xl bg-red-500 hover:bg-red-600 text-white rounded-full transition"
                >
                    -
                </button>
                <button
                    onClick={() => dispatch(increment())}
                    className="w-16 h-16 text-3xl bg-green-500 hover:bg-green-600 text-white rounded-full transition"
                >
                    +
                </button>
            </div>

            {/* Input and Add Amount button */}
            <div className="flex items-center justify-center gap-3 mb-4">
                <input
                    type="number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                    className="w-24 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-center text-xl"
                />
                <button
                    onClick={() => dispatch(incrementByAmount(addValue))}
                    className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
                >
                    Add Amount
                </button>
            </div>

            {/* Reset button – uses resetAll */}
            <button
                onClick={resetAll}
                className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition"
            >
                Reset
            </button>
        </div>
    )
}

export default Counter;