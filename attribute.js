orion.attributes.registerAttribute('quill', {
  template:        'orionAttributesQuill',
  previewTemplate: 'orionAttributesQuillColumn',
  getSchema: function(options) {
    return {
      type: String
    };
  },
  valueOut: function() {
    return this.find('.quill .ql-editor > p').html();
  },
});
