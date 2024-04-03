$(document).ready(function () {
  const userLanguage = $('html').attr('lang');
  const langButton = $('#mylanguageBtn');
  const saveButton = $('#myBtn');
  if (userLanguage === 'it') {
    saveButton.append('<span class="icon-save" style="color: white">💾</span>');
    langButton.append(
      '<span class="icon-language" style="color: white">🇬🇧</span>',
    );
    langButton.attr('href', '?lang=en');
  } else {
    saveButton.append('<span class="icon-save" style="color: white">💾</span>');
    langButton.append(
      '<span class="icon-language" style="color: white">🇮🇹</span>',
    );
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

function fadeIn() {
  const image = document.querySelector('.img-fluid');
  const placeHolder = document.querySelector('#placeholder');
  image.style.display = image.style.display === 'block' ? 'none' : 'block';
  console.log('image.style.display');
  console.log(image.style.display);
  placeHolder.style.display =
    placeHolder.style.display === 'none' ? 'block' : 'none';
  console.log('placeHolder.style.display');
  console.log(placeHolder.style.display);
}
