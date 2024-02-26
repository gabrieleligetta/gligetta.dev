$(document).ready(function () {
  const userLanguage = $('html').attr('lang');
  const langButton = $('#mylanguageBtn');
  if (userLanguage === 'it') {
    langButton.text('🇬🇧');
    langButton.attr('href', '?lang=en');
  } else {
    langButton.text('🇮🇹');
    langButton.attr('href', '?lang=it');
  }
  console.log(userLanguage);
  if ($(window).width() < 991) {
    $('.container').removeClass('container').addClass('container-fluid');
  } else {
    $('.container-fluid').removeClass('container-fluid').addClass('container');
  }
  $(window).resize(function () {
    if ($(window).width() < 991) {
      $('.container').removeClass('container').addClass('container-fluid');
    } else {
      $('.container-fluid')
        .removeClass('container-fluid')
        .addClass('container');
    }
  });
  document.getElementById('myBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const content = $('#pdf_print');
    content.addClass('pdf-print');
    // Set the PDF options
    const options = {
      margin: 0,
      filename: 'CV_Ligetta.pdf',
      image: { type: 'jpeg', quality: 1 },
      jsPDF: { unit: 'mm', format: 'a3', orientation: 'portrait' },
    };

    // Generate the PDF from the HTML
    html2pdf(content.html(), options);
    content.removeClass('pdf-print');
  });
});
