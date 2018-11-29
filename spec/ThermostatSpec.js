'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('initial settings', function(){
    it('its starting temperature is 20', function() {
      expect(thermostat.currentTemperature()).toEqual(20)
    });

    it('its min temperature is 10', function() {
      expect(thermostat.minTemperature()).toEqual(10)
    });
  });

  describe('saving mode on', function(){
    it('energy saving mode on by default', function() {
      expect(thermostat.powerMode()).toEqual(thermostat.savingModeOn())
    });

    it('energy saving mode on', function() {
      expect(thermostat.savingModeOn()).toEqual('On')
    });

    it('it can\'t increase the temperature above 25', function() {
      expect(thermostat.maxTemperature()).toEqual(25)
    });

    it('it can\'t increase the temperature above 25', function() {
      for(var i = 1; i < 5; i++) { thermostat.up(); }
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(25)
    });
  });

  describe('saving mode off', function(){
    it('energy saving mode off', function() {
      expect(thermostat.savingModeOff()).toEqual('Off')
    });

    it('energy saving mode off', function() {
      thermostat.savingModeOff()
      expect(thermostat.maxTemperature()).toEqual(32)
    });

    it('it can\'t increase the temperature above 32', function() {
      thermostat.savingModeOff()
      for(var i = 1; i < 12; i++) { thermostat.up(); }
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(32)
    });
  });

  describe('reset', function(){
    it('resets the temperature to 20', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.currentTemperature()).toEqual(20)
    });
  });

  describe('increase the temperature', function(){
    it('raises the temperature', function() {
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(21)
    });
  });

  describe('decrease the temp until the min', function(){
    it('decrease the temperature by one', function() {
      thermostat.down();
      expect(thermostat.currentTemperature()).toEqual(19)
    });

    it('it can\'t decrease the temperature below 10', function() {
      for(var i = 1; i < 10; i++) { thermostat.down(); }
      thermostat.down();
      expect(thermostat.currentTemperature()).toEqual(10)
    });
  });

  describe('energy usage', function(){
    it('return low usage if temp below 18', function(){
      for(var i = 1; i < 3; i++) { thermostat.down(); }
      thermostat.down();
      expect(thermostat.currentTemperature()).toEqual(17)
      expect(thermostat.usage()).toEqual('Low')
    });

    it('return medium usage if temp below 25', function(){
      expect(thermostat.usage()).toEqual('Medium')
    });

    it('return high usage if temp above 25', function(){
      thermostat.savingModeOff()
      for(var i = 1; i < 6; i++) { thermostat.up(); }
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(26)
      expect(thermostat.usage()).toEqual('High')
    });
  });
});
// describe('', function(){
//
// });
