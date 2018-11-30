$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  status();
  updateUsage();

  $('#up').click(function() {
    thermostat.up();
    updateTemperature();
    updateUsage();
  });

  $('#down').click(function() {
    thermostat.down();
    updateTemperature();
    updateUsage();
  });

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
    updateUsage();
  });

  $('#powersaving-on').click(function() {
    thermostat.savingModeOn();
    updateTemperature();
    status();
    updateUsage();
  });

  $('#powersaving-off').click(function() {
    thermostat.savingModeOff();
    updateTemperature();
    status();
    updateUsage();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
  };

  function status() {
    $('#power-saving-status').text(thermostat.powerMode());
  };

  function updateUsage() {
    $('#usage').text(thermostat.usage());
  };

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d5304678230fa3c9565b4803deacdd0e&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
})


});
