'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('its starting temperature is 20', function() {
    expect(thermostat.currentTemperature()).toEqual(20)
  });

  it('its min temperature is 10', function() {
    expect(thermostat.minTemperature()).toEqual(10)
  });

  it('raises the temperature', function() {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21)
  });

  it('decrease the temperature', function() {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19)
  });

  it('resets the temperature to 20', function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(20)
  });

  it('decrease the temperature', function() {
    for(var i = 1; i < 10; i++) { thermostat.down(); }
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(10)
  });


});
