export const truncateStringByLength = (str, length) =>
  str.length > length ? str.substr(0, length - 1) + '...' : str;
