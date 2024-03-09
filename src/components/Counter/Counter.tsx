import React from 'react'
import {useAppDispatch, useAppSelector} from "../../hooks/appDispatch.ts";
import {decrement, increment} from "../../store/reducers/counterSlice.ts";



export function Counter() {
    const count = useAppSelector(state => state.counterReducer.value);
    console.log(count)
    const dispatch = useAppDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}