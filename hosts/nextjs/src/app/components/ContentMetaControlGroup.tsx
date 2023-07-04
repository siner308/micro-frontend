'use client'

import contentMetas from '@/app/contentMetas';
import React from 'react';
import Link from 'next/link';

export default function ContentMetaControlGroup() {
  return (
    <div className={'flex gap-2'}>
      {contentMetas.map((info) => {
        return (
          <Link
            key={info.scope}
            href={info.scope}
          >
            {info.scope}
          </Link>
        )
      })}
    </div>

  )
}
