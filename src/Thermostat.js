'use strict';

function Thermostat() {
  this.temperature = 20
  this.minTemp = 10
  this.savingMode = 'On'
  this.maxTemp = 25

}
// TEMPERATURE
Thermostat.prototype.minTemperature = function () {
  return this.minTemp
};

Thermostat.prototype.maxTemperature = function () {
  return this.maxTemp
};

Thermostat.prototype.currentTemperature = function () {
  return this.temperature
};

// MODES
Thermostat.prototype.powerMode = function () {
  return this.savingMode
};

Thermostat.prototype.savingModeOn = function () {
  this.maxTemp = 25
  return this.savingMode = 'On'
};

Thermostat.prototype.savingModeOff = function () {
  this.maxTemp = 32
  return this.savingMode = 'Off'
};

// TEMPERATURE REGULATORS
Thermostat.prototype.up = function () {
  if (this.savingMode === 'On') {
    if (this.temperature < this.maxTemp) {
      this.temperature++;
      return this.temperature;
    } else {
      return this.maxTemp;
    }
  } else if (this.savingMode === 'Off') {
    if (this.temperature < this.maxTemp) {
      this.temperature++;
      return this.temperature;
    } else {
      return this.maxTemp;
    }
  }
};

Thermostat.prototype.down = function () {
  if (this.temperature > this.minTemp) {
    this.temperature--
  } else {
    return this.minTemp
  }
};

Thermostat.prototype.reset = function () {
  this.temperature = 20
};
