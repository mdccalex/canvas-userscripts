// ==UserScript==
// @name         Rubric Exporter
// @namespace    https://github.com/mdccalex
// @description  Export a Canvas rubric in the format used to import.
// @include      https://*.instructure.com/accounts/*/rubrics/*
// @include      https://*.instructure.com/courses/*/rubrics/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @grant        none
// @run-at       document-idle
// @version      1.0.0
// ==/UserScript==

/* globals $ */

function exportRubric() {
  
}

function waitForElement(selector, callback) {
    if ($(selector).length) {
        callback();
    } else {
        setTimeout(function() {
            waitForElement(selector, callback);
        }, 100);
    }
}

(function() {
    'use strict';

    waitForElement('div#rubrics.raw_listing', function() {
        //$('#App > nav > div > div.ViewerControls--title').append('<span id="swc_display" style="margin-right: 1em">Word count:</span>');
        //dothething();

        $('div#right-side-wrapper > aside#right-side').append('<a href="#" class="Button button-sidebar-wide" id="export_rubric_button"><i class="icon-edit" aria-hidden="true">::before</i>" Export Rubric"</a>');
        $("#export_rubric_button").click(function () {
          exportRubric();
        });
    });
})();
