"use strict";

(function (root) {
  "use strict";

  var updateCharacterCount = function updateCharacterCount(selectedElement, maxCharacterCount, isRichTextEditor) {
    var characterCount = isRichTextEditor ? selectedElement.text().length : selectedElement.val().length;
    var charactersRemaining = parseInt(maxCharacterCount) - parseInt(characterCount);

    if (isRichTextEditor) {
      if (charactersRemaining < 0) {
        selectedElement.parent().addClass('govuk-textarea--error');
      } else {
        selectedElement.parent().removeClass('govuk-textarea--error');
      }
    }

    var parentElementToSelect = isRichTextEditor ? selectedElement.parent().parent() : selectedElement.parent();
    parentElementToSelect.find(".nhsuk-hint-character-count-".concat(charactersRemaining >= 0 ? 'toomany' : 'remaining')).hide();
    parentElementToSelect.find(".nhsuk-hint-character-count-".concat(charactersRemaining >= 0 ? 'remaining' : 'toomany')).show();
    parentElementToSelect.find(".nhsuk-character-count-".concat(charactersRemaining >= 0 ? 'remaining' : 'toomany')).text(charactersRemaining >= 0 ? charactersRemaining : -1 * charactersRemaining);
  };

  function characterCount() {
    var characterCountTextAreas = $('.js-enabled .nhsuk-form-group .nhsuk-textarea-character-count');
    var characterCounts = characterCountTextAreas.each(function (i, el) {
      var maxCharacterCount = $(el).attr('class').split(' ').find(function (className) {
        return className.includes('nhsuk-textarea-character-count-max-');
      }).replace('nhsuk-textarea-character-count-max-', '');
      var isRichTextEditor = $(el).attr('class').includes('text-editor-2');
      updateCharacterCount($(el), maxCharacterCount, isRichTextEditor);
      var elementToUpdate = isRichTextEditor ? $(el).parent().find('.trumbowyg-editor') : $(el);
      elementToUpdate.keyup(function () {
        return updateCharacterCount(elementToUpdate, maxCharacterCount, isRichTextEditor);
      });
    });
  } // ES6 or Vanilla JavaScript


  characterCount();
})(void 0);