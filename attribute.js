orion.attributes.registerAttribute('quill', {
  template:        'orionAttributesQuill',
  previewTemplate: 'orionAttributesQuillColumn',
  getSchema: function(options) {
    return {
      type: String
    };
  },
  valueOut: function() {
    if(this.find('.quill .ql-editor *').length <= 1) {
      return this.find('.quill .ql-editor > p').html();
    }else{
      return this.find('.quill .ql-editor').html();
    }
  }
});
