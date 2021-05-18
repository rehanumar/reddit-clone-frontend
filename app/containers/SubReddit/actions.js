/*
 *
 * SubReddit actions
 *
 */

import {
  LOAD_SUB_REDDIT,
  LOAD_SUB_REDDIT_SUCCESS,
  SET_ERROR,
} from './constants';

export function loadSubReddit(topic) {
  return {
    type: LOAD_SUB_REDDIT,
    topic,
  };
}

export function loadSubRedditSuccess(data) {
  return {
    type: LOAD_SUB_REDDIT_SUCCESS,
    data,
  };
}

export function setError(data) {
  return {
    type: SET_ERROR,
    data,
  };
}
