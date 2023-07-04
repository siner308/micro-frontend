// this content meta must be load from database later

import { ContentMeta } from './mfeCore';

const contentMetas: Array<ContentMeta> = [
  {
    'scope': 'remote1',
    'url': 'http://localhost:4000/remote1/f0b4e86/remoteEntry.js',
    'module': './Layout'
  },
  {
    'scope': 'remote2',
    'url': 'http://localhost:4000/remote2/9e23954/remoteEntry.js',
    'module': './Layout'
  },
]

export default contentMetas;
