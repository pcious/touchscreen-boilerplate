import uuid from 'uuid';
import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import { createHashHistory, createMemoryHistory } from 'history';

export const memoryHistory = createMemoryHistory();
export const hashHistory = createHashHistory();

export const getFilePath = (fileName) =>
  (process.env.NODE_ENV === 'development' ? `/${fileName}` : `./${fileName}`);

export const fetchFacade = (url, options) =>
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => response);

const handleUrl = (url) => {
  if (/^http:\/\//.test(url)) {
    // ต่อ corsproxy
    if (process.env.NODE_ENV === 'development') {
      return `http://localhost:1337/${url.replace(/^http:\/\//g, '')}`;
    }
    return url;
  }
  return `${url}`;
};

export const fetchJson = (url) => {
  const xhttp = new XMLHttpRequest(); //  eslint-disable-line
  return new Promise((resolve, reject) => {
    xhttp.onreadystatechange = () => {
      if (this.readyState === 4 && this.status === 200) {
        try {
          const data = xhttp.response;
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      }
    };
    xhttp.open('GET', handleUrl(url), true);
    xhttp.send();
  });
};

export const generateUniqueId = () => uuid();

export const toEntities = (items, keyName) =>
  _.reduce(
    items,
    (result, item) => {
      const key = _.get(item, keyName, generateUniqueId());
      return {
        ...result,
        [key]: item
      };
    },
    {}
  );

export const toFacility = (items) => {
  const groupTest = _.groupBy(items.facilities, (item) => item.floorIndex); // `F-${item.floorIndex}`
  return _.map(groupTest, (item, key) => ({
    [`F-${key}`]: item
  }));
};

export const containSomeKey = (object) => Object.keys(object).length > 0;

export const isEmpty = (data) => {
  if (_.isNull(data)) return true;
  if (_.isUndefined(data)) return true;
  if (_.isEmpty(data)) return true;
  return false;
};

export const isNotEmpty = (data) => !isEmpty(data);

export const escapeRegExp = (str) =>
  str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'); // eslint-disable-line

export const replaceAll = (str, find, replace) =>
  str.replace(new RegExp(escapeRegExp(find), 'g'), replace);

export const setDebounce = _.debounce((callback) => {
  if (callback) callback();
}, _.get(window, 'appSetting.refreshTime', 60) * 1000); // 120 sec

export default {};
