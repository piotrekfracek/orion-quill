Quill = this.Quill;

ReactiveTemplates.onCreated('attribute.quill', function() {
  this.quillConfig = this.data.atts.quill;
  delete this.data.atts.quill;
})

ReactiveTemplates.onRendered('attribute.quill', function() {

  var defaultConfig = {
    modules: {
      toolbar: true
    },
    theme: 'snow',
  }

  var element = this.$('.quill').get(0);
  var quill   = new Quill(element, $.extend(defaultConfig, this.quillConfig));

  quill.pasteHTML(this.data.value);
});

ReactiveTemplates.helpers('attributePreview.quill', {
  preview: function () {
    var value = this.value;
    var tmp = document.createElement("DIV");
    var content = value.replace(/<(?:.|\n)*?>/gm, ' ');
    if(content.length > 50) content = content.substring(0, 47).trim() + '...';
    return content;
  }
});
