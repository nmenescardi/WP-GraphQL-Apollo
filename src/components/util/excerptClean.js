const excerptClean = excerpt => {
  return excerpt
    .replace('<p>', '')
    .replace('</p>', '')
    .replace('[&hellip;]', '')
    .slice(0, 90)
    .concat('...');
};

export default excerptClean;
