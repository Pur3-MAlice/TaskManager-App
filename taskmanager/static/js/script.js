// sidenav init
document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

// modal init
document.addEventListener('DOMContentLoaded', function() {
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
});

// datepicker calender init
document.addEventListener('DOMContentLoaded', function() {
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy", 
    i18n: {done: "Select"}
  });
});

// dropdown init
document.addEventListener('DOMContentLoaded', function() {
  let categoryselect = document.querySelectorAll('select');
  M.FormSelect.init(categoryselect);
});

// collapsible init
document.addEventListener('DOMContentLoaded', function() {
  let collapsible = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsible);
});
