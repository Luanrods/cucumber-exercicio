const Person = require('../../src/shouty.js')
const { Given, When, Then } = require('@cucumber/cucumber')
//const { assertThat, is} = require('hamjest')
const assert = require('assert')

Given('Lucy is located {int} metres from Sean', function (distance) {
    this.lucy = new Person
    this.sean = new Person
    this.lucy.moveTo(distance)
    });

    When('Sean shouts {string}', function (message) {
        this.sean.shout(message)
        this.message = message
    });

    Then('Lucy hears Sean\'s message', function () {
        assert.deepEqual(this.lucy.messagesHeard(), [this.message])
    });