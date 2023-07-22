// sidenav init
document.addEventListener('DOMContentLoaded', function () {
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // modal init
  let modal = document.querySelectorAll('.modal');
  M.Modal.init(modal);

  // datepicker calender init
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {
      done: "Select"
    }
  });

  // dropdown init
  let categoryselect = document.querySelectorAll('select');
  M.FormSelect.init(categoryselect);

  // collapsible init
  let collapsible = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsible);
});
