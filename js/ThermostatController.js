$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  status();

  $('#up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.savingModeOn();
    updateTemperature();
    status();
  });

  $('#powersaving-off').click(function() {
    thermostat.savingModeOff();
    updateTemperature();
    status();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
  };
  
  function status() {
    $('#power-saving-status').text(thermostat.powerMode());
  };
});
