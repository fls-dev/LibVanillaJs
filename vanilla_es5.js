function vAll(selector) {
    var elements = document.querySelectorAll(selector);
    return new allElements(elements);
}

function vSing(selector) {
    var element = document.querySelector(selector);
    return new singleElements(element);
}

function allElements(element) {
    // add Event
    this.event = function (eventName, callback) {
        for (var i = 0; i < element.length; i++) {
            element[i].addEventListener(eventName, callback.bind());
        }

        return this;
    }; // add class


    this.aClass = function (name) {
        for (var i = 0; i < element.length; i++) {
            element[i].classList.add(name);
        }

        return this;
    }; // remove class


    this.dClass = function (name) {
        for (var i = 0; i < element.length; i++) {
            element[i].classList.remove(name);
        }

        return this;
    };
}

function singleElements(element) {
    // add Event
    this.event = function (eventName, callback) {
        element.addEventListener(eventName, callback.bind());
        return this;
    }; // add class


    this.aClass = function (name) {
        element.classList.add(name);
        return this;
    }; // remove class


    this.dClass = function (name) {
        element.classList.remove(name);
        return this;
    };
}