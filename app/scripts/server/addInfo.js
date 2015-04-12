(function ($) {
  'use strict';

  $('#tags').on('focus', function () {
    $(this).popover({
      container: 'body',
      content: 'Entrez les mots nécessaires pour effectuer une recherche sur cette information.' + 
        ' Séparez chaque mot du suivant par un point-virgule.',
      html: true,
      placement: 'right',
      trigger: 'manual'
    }).popover('show');
  });

  $('#tags').on('blur', function () {
    $(this).popover('destroy');
  });

})(jQuery);