import get from 'lodash/get';

export const getValue = (value, data) => {
  if (Array.isArray(value)) {
    const result = value.map(it => get(data, it, ''));
    return result.join(' ').trim();
  }

  return get(data, value, '');
};

export const resolveLink = (link, data) => {
  const result = String(link).split('/').map(it => {
    if (it.startsWith(':')) {
      const propToSearch = it.replace(':', '');
      return get(data, propToSearch, propToSearch);
    }
    return it;
  }).join('/');

  return result;
};
