/**
 *
 * Asynchronously loads the component for SubReddit
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
