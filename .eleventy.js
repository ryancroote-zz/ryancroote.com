module.exports = (config) => {
  return {
    dir                    : {
      input    : 'src/11ty',
      includes : 'includes',
      layouts  : 'layouts',
      data     : 'data',
      output   : 'dist'
    },
    passthroughFileCopy    : true,
    templateFormats        : [
      'njk',
      'md'
    ],
    htmlTemplateEngine     : 'njk',
    markdownTemplateEngine : 'njk'
  };
};
