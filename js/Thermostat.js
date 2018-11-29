'use strict';

function Thermostat() {
  this.temperature = 20
  this.minTemp = 10
  this.savingMode = 'On'
  this.maxTemp = 25
}

// TEMPERATURE
Thermostat.prototype.currentTemperature = function () {
  return this.temperature
};

Thermostat.prototype.minTemperature = function () {
  return this.minTemp
};

Thermostat.prototype.maxTemperature = function () {
  return this.maxTemp
};

// MODES
Thermostat.prototype.powerMode = function () {
  return this.savingMode
};

Thermostat.prototype.savingModeOn = function () {
  this.maxTemp = 25
  if (this.temperature > this.maxTemp) {
    this.resetTo25();
  }
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
    return this.minTemp
  } else {
    return this.minTemp
  }
};

Thermostat.prototype.reset = function () {
  this.temperature = 20
};

Thermostat.prototype.resetTo25 = function () {
  this.temperature = 25
};

//  THERMOSTAT USAGE

Thermostat.prototype.usage = function () {
  if (this.temperature < 18 ) {
    return this.energyUsage = 'Low'
  } else if (this.temperature < 25 ){
    return this.energyUsage = 'Medium'
  } else {
    return this.energyUsage = 'High'
  }
};
