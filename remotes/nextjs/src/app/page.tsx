'use client'

import { KeyboardEventHandler, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([
    "Learn React",
    "Learn Next.js",
    "Learn Tailwind CSS",
  ]);
  const [todo, setTodo] = useState<string>("");

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  }

  // enter key
  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  function removeTodo(index: number) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className={'h-full p-10'}>
      <div
        className={'text-4xl font-bold text-gray-700 mb-4 text-center transition duration-200 ease-in-out hover:text-gray-900 hover:scale-110 transform cursor-pointer hover:underline'}
      >
        TODO
      </div>
      <div className={'flex mb-4'}>
        <input
          type="text"
          className={'border border-gray-200 rounded-md p-4 text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:scale-100 disabled:bg-blue-500 disabled:text-white disabled:outline-none focus:disabled:ring-2 focus:disabled:ring-blue-600 focus:disabled:ring-opacity-50 focus:disabled:ring-offset-2 focus:disabled:ring-offset-gray-100 focus:disabled:shadow-none focus:disabled:scale-100 focus:disabled:bg-blue-500 focus:disabled:text-white focus:disabled:outline-none'}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={addTodo}
          className={'text-lg ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out hover:scale-110 transform cursor-pointer hover:underline hover:shadow-lg active:shadow-none active:scale-100 active:bg-blue-700 active:text-white active:outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:scale-100 disabled:bg-blue-500 disabled:text-white disabled:outline-none focus:disabled:ring-2 focus:disabled:ring-blue-600 focus:disabled:ring-opacity-50 focus:disabled:ring-offset-2 focus:disabled:ring-offset-gray-100 focus:disabled:shadow-none focus:disabled:scale-100 focus:disabled:bg-blue-500 focus:disabled:text-white focus:disabled:outline-none'}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={'flex gap-4 items-center p-4 border border-gray-200 rounded-md mb-4 hover:bg-gray-100 transition duration-200 ease-in-out'}
          >
            <div
              className={'index w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700'}
            >
              {index + 1}
            </div>
            <div
              className={'flex-1 text-lg font-semibold text-gray-700 overflow-ellipsis overflow-hidden'}
            >{todo}</div>
            <button
              className={'ml-auto px-4 py-2 bg-red-500 text-white rounded-md'}
              onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
