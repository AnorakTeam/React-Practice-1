"use client";

import { useEffect, useState } from "react";
import Character from "../components/Character";

const API_BASE_URL = "https://thesimpsonsapi.com/api";

const MAX_NUMBER_OF_CHARACTERS = 503

export default function SimpsonsPage() {
  const [index, setIndex] = useState(1);
  //   const listOfUrls = [];

  //   for (let i = 1; i <= 100; i++) {
  //     listOfUrls.push();
  //   }
  const onClickRight = () => {
    setIndex( (index + 1) % MAX_NUMBER_OF_CHARACTERS )
  }

  const onClickLeft = () => {
    setIndex( Math.abs( (index - 1) === 0 ? 1 : (index - 1) ) % MAX_NUMBER_OF_CHARACTERS)
  }

  return (
    <div className="flex flex-col gap-4 m-20">
        <div className="flex flex-row gap-4 ">
            <button onClick={onClickLeft} className="w-25 rounded-lg shadow-md outline outline-black/5 hover:bg-red-600 active:bg-red-800 bg-red-400">Anterior</button>
            <input
                type="number"
                min="1"
                max={`${MAX_NUMBER_OF_CHARACTERS}`}
                className="border text-xl w-20"
                onChange={(e) => {
                    setIndex(e.target.value);
                }}
                value={index}
            />
            <button onClick={onClickRight} className="w-25 rounded-lg shadow-md outline outline-black/5 hover:bg-green-600 active:bg-green-800 bg-green-400">Siguiente</button>
        </div>
        <hr />
        <Character url={`${API_BASE_URL}/characters/${index}`}></Character>
    </div>
  );
}