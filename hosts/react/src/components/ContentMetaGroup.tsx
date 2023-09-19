import React from 'react';
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { contentMetaStates } from "../atom/contentMetaStates";

export default function ContentMetaGroup() {
  const contentMetas = useRecoilValue(contentMetaStates);

  return (
    <div>
      {contentMetas.map((info) => {
        return (
          <Link
            key={info.scope}
            className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"}
            to={`/${info.scope}`}
          >
            {info.scope}
          </Link>
        );
      })}
    </div>
  )
}
