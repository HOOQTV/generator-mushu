/** @module Index */
import { install } from 'source-map-support'; install();

import <%= className %> from './<%= filename %>';
import { <%= className %>Error } from './error.js';

// Exposes main entrypoint to the lib.
export default <%= className %>;

// Exposes the lib error.
export { <%= className %>Error };
