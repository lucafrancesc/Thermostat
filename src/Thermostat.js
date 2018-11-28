'use strict';

function Thermostat() {
  this.temperature = 20
  this.minTemp = 10
}

Thermostat.prototype.minTemperature = function () {
  return this.minTemp
};

Thermostat.prototype.currentTemperature = function () {
  return this.temperature
};

Thermostat.prototype.up = function () {
  return this.temperature++
};

Thermostat.prototype.down = function () {
  if (this.temperature > this.minTemp) {
    return this.temperature--
  } else {
    return this.minTemp
  }
};

Thermostat.prototype.reset = function () {
  this.temperature = 20
};
