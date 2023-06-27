
$(document).ready(function() {
  var prizes = [];

  // Function to handle the spin button click
  $('#spin-btn').on('click', function() {
    var spinChoice = Math.floor(Math.random() * 8) + 1; // Random duration between 1 and 8

    if (spinChoice >= 1 && spinChoice <= 8) {
      var prize = prizes[spinChoice - 1];
      var className = 'spin' + spinChoice;

      $('#pizza').addClass(className);

      setTimeout(function() {
        alert('Congratulations, You won a prize: ' + prize + '!!!');
        $('#pizza').removeClass(className);
      }, 7000);
    }
  });

  // Function to handle saving the prizes
  $('#save-btn').on('click', function() {
    prizes = [];
    $('.prize-input').each(function() {
      var prize = $(this).val();
      prizes.push(prize);
    });
    alert('Prizes saved!');
  });
});
