// ES6 or Vanilla JavaScript
document.getElementById('toggle-filter').addEventListener('click', () => {

    document.getElementById('filter-column').classList.toggle('nhsbsa-hide-filter')
    document.getElementById('table-column').classList.toggle('nhsuk-grid-column-three-quarters')
    document.getElementById('table-column').classList.toggle('nhsuk-grid-column-full')


    if (document.getElementById("toggle-filter").innerHTML === "Show filter") {
        document.getElementById("toggle-filter").innerHTML = "Hide filter";
    } else {
        document.getElementById("toggle-filter").innerHTML = "Show filter";
    }

});