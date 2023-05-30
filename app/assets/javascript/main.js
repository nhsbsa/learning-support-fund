// ES6 or Vanilla JavaScript
document.getElementById('toggle-filter').addEventListener('click', () => {

    document.getElementById('filter-column').classList.toggle('nhsbsa-hide-filter')
    document.getElementById('table-column').classList.toggle('nhsuk-grid-column-three-quarters')


    if (document.getElementById("toggle-filter").innerHTML === "Show filter") {
        document.getElementById("toggle-filter").innerHTML = "Hide filter";
    } else {
        document.getElementById("toggle-filter").innerHTML = "Show filter";
    }

});

// Select all checkboxes and change text to deselect
$('#js-select-all').click(function() {
  if($(this).text() == 'Select all') {
    $('.nhsuk-checkboxes__input').prop('checked', true);
    $(this).text('Deselect all')
  } else {
    $('.nhsuk-checkboxes__input').prop('checked', false);
    $(this).text('Select all')
  }
})

// Select all previously not downloaded checkboxes and change text to deselect
$('#js-select-all-not-downloaded').click(function() {
  if($(this).text() == 'Select all not downloaded') {
    $('.nhsuk-checkboxes__input').prop('checked', true);
    $(this).text('Deselect all not downloaded')
  } else {
    $('.nhsuk-checkboxes__input').prop('checked', false);
    $(this).text('Select all not downloaded')
  }
})


// Select all checkboxes
$("#js-check-all").change(function() {
  if (this.checked) {
    $(".js-check-all-group input[type=checkbox]").each(function() {
      this.checked=true;
    });
    } else {
      $(".js-check-all-group input[type=checkbox]").each(function() {
      this.checked=false;
    });
  }
});

$(".js-check-all-group input[type=checkbox]").not("#js-check-all").click(function () {
  if ($(this).is(":checked")) {
    var isAllChecked = 0;

    $(".js-check-all-group input[type=checkbox]").not("#js-check-all").each(function() {
      if (!this.checked)
        isAllChecked = 1;
    });

    if (isAllChecked == 0) {
      $("#js-check-all").prop("checked", true);
    }

  } else {
    $("#js-check-all").prop("checked", false);
  }
});
