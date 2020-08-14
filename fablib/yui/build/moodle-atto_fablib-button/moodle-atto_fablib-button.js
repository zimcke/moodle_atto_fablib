YUI.add('moodle-atto_fablib-button', function (Y, NAME) {

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_fablib
 * @copyright  2020 Zimcke Van de Staey <zimcke@fablabfactory.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_fablib-button
 */

/**
 * Atto text editor tutorials plugin.
 *
 * @namespace M.atto_fablib
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

var CSS = {
    ADDFILE: 'atto_fablib_addmore_files',
    CLOSE: 'atto_fablib_close',
    RESPONSIVE: 'img-responsive',
    INPUTADDFILE: 'atto_fablib_addfile',
    INPUTALIGNMENT: 'atto_fablib_bannerimage_alignment',
    INPUTALT: 'atto_fablib_bannerimage_altentry',
    INPUTHEIGHT: 'atto_fablib_bannerimage_heightentry',
    INPUTSUBMIT: 'atto_fablib_bannerimage_urlentrysubmit',
    INPUTURL: 'atto_fablib_bannerimage_urlentry',
    INPUTSIZE: 'atto_fablib_bannerimage_size',
    INPUTWIDTH: 'atto_fablib_bannerimage_widthentry',
    IMAGEALTWARNING: 'atto_fablib_bannerimage_altwarning',
    IMAGEBROWSER: 'atto_fablib_bannerimage_openimagebrowser',
    IMAGEPRESENTATION: 'atto_fablib_bannerimage_presentation',
    INPUTCONSTRAIN: 'atto_fablib_bannerimage_constrain',
    INPUTCUSTOMSTYLE: 'atto_fablib_bannerimage_customstyle',
    IMAGEPREVIEW: 'atto_fablib_bannerimage_preview',
    IMAGEPREVIEWBOX: 'atto_fablib_bannerimage_preview_box',
    ALIGNSETTINGS: 'atto_fablib_bannerimage_button'
    },

    SELECTORS = {
        INPUTURL: '.' + CSS.INPUTURL
    },

    ALIGNMENTS = [
        {
            name: 'verticalAlign',
            str: 'alignment_top',
            value: 'text-top',
            margin: '0 0.5em'
        }
    ],

    REGEX = {
        ISPERCENT: /\d+%/
    },

    COMPONENTNAME = 'atto_fablib',

    /** 
     * All machines that are part of FabLib
     */
    MACHINES = [
        {
            index: '0',
            category: 'machines',
            name: 'machine1'
        }, {
            index: '1',
            category: 'machines',
            name: 'machine2'
        }, {
            index: '2',
            category: 'machines',
            name: 'machine3'
        }, {
            index: '3',
            category: 'machines',
            name: 'machine4'
        }, {
            index: '4',
            category: 'machines',
            name: 'machine5'
        }, {
            index: '5',
            category: 'machines',
            name: 'machine6'
        }, {
            index: '6',
            category: 'machines',
            name: 'machine7'
        }, {
            index: '7',
            category: 'machines',
            name: 'machine8'
        }, {
            index: '8',
            category: 'machines',
            name: 'machine9'
        }
    ],

    /**
     * All sustainable development goals
     */
    SDG = [
        {
            index: '0',
            category: 'sdg',
            name: 'sdg1',
            icon: 'sdg1'
        }, {
            index: '1',
            category: 'sdg',
            name: 'sdg2',
            icon: 'sdg2'
        }, {
            index: '2',
            category: 'sdg',
            name: 'sdg3',
            icon: 'sdg3'
        }, {
            index: '3',
            category: 'sdg',
            name: 'sdg4',
            icon: 'sdg4'
        }, {
            index: '4',
            category: 'sdg',
            name: 'sdg5',
            icon: 'sdg5'
        }, {
            index: '5',
            category: 'sdg',
            name: 'sdg6',
            icon: 'sdg6'
        }, {
            index: '6',
            category: 'sdg',
            name: 'sdg7',
            icon: 'sdg7'
        }, {
            index: '7',
            category: 'sdg',
            name: 'sdg8',
            icon: 'sdg8'
        }, {
            index: '8',
            category: 'sdg',
            name: 'sdg9',
            icon: 'sdg9'
        }, {
            index: '9',
            category: 'sdg',
            name: 'sdg10',
            icon: 'sdg10'
        }, {
            index: '10',
            category: 'sdg',
            name: 'sdg11',
            icon: 'sdg11'
        }, {
            index: '11',
            category: 'sdg',
            name: 'sdg12',
            icon: 'sdg12'
        }, {
            index: '12',
            category: 'sdg',
            name: 'sdg13',
            icon: 'sdg13'
        }, {
            index: '13',
            category: 'sdg',
            name: 'sdg14',
            icon: 'sdg14'
        }, {
            index: '14',
            category: 'sdg',
            name: 'sdg15',
            icon: 'sdg15'
        }, {
            index: '15',
            category: 'sdg',
            name: 'sdg16',
            icon: 'sdg16'
        }, {
            index: '16',
            category: 'sdg',
            name: 'sdg17',
            icon: 'sdg17'
        }

    ],

    /**
     * All 21st century skills
     */
    CENTURY = [
        {
            index: '0',
            category: 'century',
            name: 'literacy',
            icon: 'literacy'
        }, {
            index: '1',
            category: 'century',
            name: 'scientific_literacy',
            icon: 'scientific_literacy'
        }, {
            index: '2',
            category: 'century',
            name: 'ict_literacy',
            icon: 'ict_literacy'
        }, {
            index: '3',
            category: 'century',
            name: 'financial_literacy',
            icon: 'financial_literacy'
        }, {
            index: '4',
            category: 'century',
            name: 'numeracy',
            icon: 'numeracy'
        }, {
            index: '5',
            category: 'century',
            name: 'civic_literacy',
            icon: 'civic_literacy'
        }, {
            index: '6',
            category: 'century',
            name: 'critical_thinking',
            icon: 'critical_thinking'
        }, {
            index: '7',
            category: 'century',
            name: 'communication',
            icon: 'communication'
        }, {
            index: '8',
            category: 'century',
            name: 'collaboration',
            icon: 'collaboration'
        }, {
            index: '9',
            category: 'century',
            name: 'creativity',
            icon: 'creativity'
        }, {
            index: '10',
            category: 'century',
            name: 'initiative',
            icon: 'initiative'
        }, {
            index: '11',
            category: 'century',
            name: 'adaptability',
            icon: 'adaptability'
        }, {
            index: '12',
            category: 'century',
            name: 'curiosity',
            icon: 'curiosity'
        }, {
            index: '13',
            category: 'century',
            name: 'leadership',
            icon: 'leadership'
        }, {
            index: '14',
            category: 'century',
            name: 'social_awareness',
            icon: 'social_awareness'
        }
    ],

    /** 
     * All computational thinking skills
     */
    CT = [
        {
            index: '0',
            category: 'ct',
            name: 'abstraction',
            icon: 'abstraction'
        }, {
            index: '1',
            category: 'ct',
            name: 'generalization',
            icon: 'generalization'
        }, {
            index: '2',
            category: 'ct',
            name: 'decomposition',
            icon: 'decomposition',
        }, {
            index: '3',
            category: 'ct',
            name: 'algorithmic_thinking',
            icon: 'algorithmic_thinking'
        }, {
            index: '4',
            category: 'ct',
            name: 'evaluation',
            icon: 'evaluation'
        }
    ],

    /**
     * Complete digital making profile matrix of Raspberry Pi
     */
    DIGITAL_MAKING = [
        {
            index: '0',
            category: 'digital_making',
            name: 'digital_making1',
            creator_help: 'digital_making1_creator_help',
            builder_help: 'digital_making1_builder_help',
            developer_help: 'digital_making1_developer_help',
            maker_help: 'digital_making1_maker_help'
        }, {
            index: '1',
            category: 'digital_making',
            name: 'digital_making2',
            creator_help: 'digital_making2_creator_help',
            builder_help: 'digital_making2_builder_help',
            developer_help: 'digital_making2_developer_help',
            maker_help: 'digital_making2_maker_help'
        }, {
            index: '2',
            category: 'digital_making',
            name: 'digital_making3',
            creator_help: 'digital_making3_creator_help',
            builder_help: 'digital_making3_builder_help',
            developer_help: 'digital_making3_developer_help',
            maker_help: 'digital_making3_maker_help'
        }, {
            index: '3',
            category: 'digital_making',
            name: 'digital_making4',
            creator_help: 'digital_making4_creator_help',
            builder_help: 'digital_making4_builder_help',
            developer_help: 'digital_making4_developer_help',
            maker_help: 'digital_making4_maker_help'
        }, {
            index: '4',
            category: 'digital_making',
            name: 'digital_making5',
            creator_help: 'digital_making5_creator_help',
            builder_help: 'digital_making5_builder_help',
            developer_help: 'digital_making5_developer_help',
            maker_help: 'digital_making5_maker_help'
        }
    ],

    /**
     * Array of the different proficiency levels in the digital making profile of Raspberry Pi
     */
    DIGITAL_MAKING_LEVELS = [
        {
            index: '0',
            category: 'digital_making_levels',
            name: 'digital_making_creator',
            icon: 'creator_icon'
        }, {
            index: '1',
            category: 'digital_making_levels',
            name: 'digital_making_builder',
            icon: 'builder_icon'
        }, {
            index: '2',
            category: 'digital_making_levels',
            name: 'digital_making_developer',
            icon: 'developer_icon'
        }, {
            index: '3',
            category: 'digital_making_levels',
            name: 'digital_making_maker',
            icon: 'maker_icon'

        }
    ],

    /**
     * Current languages that are supported to generate content from the FabLib plugin
     */
    LANGUAGES = [
        {
            code: 'EN',
            name: 'english'
        },
        {
            code: 'NL',
            name: 'dutch'
        }
    ],

    /**
     * The form template for the FabLib dialogue
     */
    TEMPLATE = '' +
        '<form class="atto_attoform">' +
        '<div class="container mt-3">' +

        /* LANGUAGE SELECTOR */
        '<div class="row">' +
        '<div class="col-4 mb-1">' +
        '<label for="language">' + M.util.get_string('language', COMPONENTNAME) + '</label>' +
        '</div>' +
        '<div class="col-8 mb-1">' +
        '<select name="language" id="language">' +

        '{{#each LANGUAGES}}' +
        '<option value="{{code}}">{{get_string name "atto_fablib"}}</option>'+
        '{{/each}}' +

        '</select>' +
        '</div>' +
        '</div>' +


        /* BANNER IMAGE */
        '<div class="row">' +
        '<div class="col-12 accordion" id="bannerimageAccordion">' +
        '<div class="card">' +
        '<div class="card-header" id="headingOne">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">' +
        'Banner image' +
        '</button>' +
        '</h5>' +
        '</div>' +

        '<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#bannerimageAccordion">' +
        '<div class="card-body">' +
        '<div clas="container">' +
        '<div class="row">' +
        '{{#if showFilepicker}}' +
        '<div class="col-4 mb-1">' +
        '<label for="{{elementid}}_{{CSS.INPUTURL}}">{{get_string "enterurl" component}}</label>' +
        '</div>' +
        '<div class="col-4 mb-1">' +
        '<div class="input-group input-append ">' +
        '<input class="form-control {{CSS.INPUTURL}}" type="url" id="{{elementid}}_{{CSS.INPUTURL}}" size="32"/>' +
        '</div>' +
        '</div>' +
        '<div class="col-4 mb-1">' +
        '<span class="input-group-append">' +
        '<button class="btn btn-secondary {{CSS.IMAGEBROWSER}}" type="button">' +
        '{{get_string "browserepositories" component}}</button>' +
        '</span>' +
        '</div>' +
        '{{else}}' +
        '<div class="col-4 mb-1">' +
        '<label for="{{elementid}}_{{CSS.INPUTURL}}">{{get_string "enterurl" component}}</label>' +
        '</div>' +
        '<div class="col-8 mb-1">' +
        '<input class="form-control fullwidth {{CSS.INPUTURL}}" type="url" id="{{elementid}}_{{CSS.INPUTURL}}" size="32"/>' +
        '</div>' +
        '{{/if}}' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-4 mb-1">' +
        '<label class="for="{{elementid}}_{{CSS.INPUTALIGNMENT}}">{{get_string "alignment" component}}</label>' +
        '</div>' +
        '<div class="col-8 mb-1">' +
        '<select class="custom-select {{CSS.INPUTALIGNMENT}}" id="{{elementid}}_{{CSS.INPUTALIGNMENT}}">' +
        '{{#each alignments}}' +
        '<option value="{{value}}">{{get_string str ../component}}</option>' +
        '{{/each}}' +
        '</select>' +
        '</div>' +
        '<input type="hidden" class="{{CSS.INPUTCUSTOMSTYLE}}"/>' +
        '</div class="row">' +

        '<div class="row">' +
        '<div class="col-12 mdl-align">' +
        '<div class="{{CSS.IMAGEPREVIEWBOX}}">' +
        '<img src="#" class="{{CSS.IMAGEPREVIEW}}" alt="" style="display: none;"/>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="row">' +

        '<div class="col-6">' +
        '<div class="accordion" id="leftAccordion">' +
        '<div class="card">' +
        '<div class="card-header" id="leftAccordionHeadingOne">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#leftAccordionCollapseOne" aria-expanded="true" aria-controls="leftAccordionCollapseOne">' +
        '{{get_string "duration" component}}' +
        '</button>' +
        '</h5>' +
        '</div>' +
        '<div id="leftAccordionCollapseOne" class="collapse show" aria-labelledby="leftAccordionHeadingOne" data-parent="#leftAccordion">' +
        '<div class="card-body">' +
        '<div clas="container">' +
        '<div class="row">' +
        '<div class="col-3 mb-1">' +
        '<label for="duration">{{get_string "select" component}}: </label>' +
        '</div>' +
        '<div class="col-9 mb-1">' +
        '<select name="duration" id="duration">' +
        '<option value="duration1">{{get_string "duration1" component}}</option>' +
        '<option value="duration2">{{get_string "duration2" component}}</option>' +
        '<option value="duration3">{{get_string "duration3" component}}</option>' +
        '<option value="duration4">{{get_string "duration4" component}}</option>' +
        '<option value="duration5">{{get_string "duration5" component}}</option>' +
        '<option value="duration6">{{get_string "duration6" component}}</option>' +
        '<option value="duration7">{{get_string "duration7" component}}</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="card">' +
        '<div class="card-header" id="leftAccordionHeadingTwo">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#leftAccordionCollapseTwo" aria-expanded="true" aria-controls="leftAccordionCollapseTwo">' +
        '{{get_string "difficulty" component}}' +
        '</button>' +
        '</h5>' +
        '</div>' +
        '<div id="leftAccordionCollapseTwo" class="collapse show" aria-labelledby="leftAccordionHeadingTwo" data-parent="#leftAccordion">' +
        '<div class="card-body">' +
        '<div clas="container">' +
        '<div class="row">' +
        '<div class="col-3 mb-1">' +
        '<label for="difficulty">Select: </label>' +
        '</div>' +
        '<div class="col-9 mb-1">' +
        '<select name="diffuculty" id="difficulty">' +
        '<option value="difficulty1">{{get_string "difficulty1" component}}</option>' +
        '<option value="difficulty2">{{get_string "difficulty2" component}}</option>' +
        '<option value="difficulty3">{{get_string "difficulty3" component}}</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="card">' +
        '<div class="card-header" id="leftAccordionHeadingThree">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#leftAccordionCollapseThree" aria-expanded="true" aria-controls="leftAccordionCollapseThree">' +
        '{{get_string "machines" component}}' +
        '</button>' +
        '</h5>' +
        '</div>' +
        '<div id="leftAccordionCollapseThree" class="collapse show" aria-labelledby="leftAccordionHeadingThree" data-parent="#leftAccordion">' +
        '<div class="card-body">' +
        '<div clas="container">' +
        '<div class="row">' +
        '<p>{{get_string "check_machines" component}}</p>' +
        '</div>' +
        '<fieldset>' +
        '{{#each MACHINES}}' +
        '<div class="row">' +
        '<div class="col-1">' +
        '<input type="checkbox" id="checkbox{{category}}{{index}}" name="{{category}}" value="{{name}}">' +
        '</div>' +
        '<div class="col-10">' +
        '<label for="checkbox{{category}}{{index}}">{{get_string name "atto_fablib"}}</label>' +
        '</div>' +
        '</div>' +
        '{{/each}}' +
        '</fieldset>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="card">' +
        '<div class="card-header" id="leftAccordionHeadingFour">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#leftAccordionCollapseFour" aria-expanded="true" aria-controls="leftAccordionCollapseFour">' +
        '{{get_string "materials" component}}' +
        '</button>' +
        '</h5>' +
        '</div>' +
        '<div id="leftAccordionCollapseFour" class="collapse show" aria-labelledby="leftAccordionHeadingFour" data-parent="#leftAccordion">' +
        '<div class="card-body">' +
        '<div clas="container">' +
        '<div class="row">' +
        '<div class="col-12 form-group">' +
        '<label for="materialsTextArea">{{get_string "help_materials" component}}</label>' +
        '<label><i>{{get_string "example_materials" component}}</i></label>' +
        '<textarea class="form-control" id="materialsTextArea" rows="3"></textarea>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="card">' +
        '<div class="card-header" id="leftAccordionHeadingFive">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#leftAccordionCollapseFive" aria-expanded="true" aria-controls="leftAccordionCollapseFive">' +
        '{{get_string "files" component}}' +
        '</button>' +
        '</h5>' +
        '</div>' +
        '<div id="leftAccordionCollapseFive" class="collapse show" aria-labelledby="leftAccordionHeadingFive" data-parent="#leftAccordion">' +
        '<div class="card-body">' +
        '<div id="filesContainer" class="container">' +

        '<div class="row {{CSS.ADDFILE}}">' +
        '<div class="col-12">'+
            '<button class="btn btn-secondary {{CSS.INPUTADDFILE}}" type="button">' + '' +
                '{{get_string "addfile" component}}</button>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="card">' +
        '<div class="card-header" id="leftAccordionHeadingSix">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#leftAccordionCollapseSix" aria-expanded="true" aria-controls="leftAccordionCollapseSix">' +
        '{{get_string "safety" component}}' +
        '</button>' +
        '</h5>' +
        '</div>' +
        '<div id="leftAccordionCollapseSix" class="collapse show" aria-labelledby="leftAccordionHeadingSix" data-parent="#leftAccordion">' +
        '<div class="card-body">' +
        '<div clas="container">' +
        '<div class="row">' +
        '<div class="col-12 form-group">' +
        '<label for="safetyTextArea" id="safetyHelpBlock">{{get_string "help_safety" component}}</label>' +
        '<label id="safetyExampleBlock"><i>{{get_string "example_safety" component}}</i></label>' +
        '<textarea class="form-control" id="safetyTextArea" rows="3"></textarea>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="card">' +
        '<div class="card-header" id="leftAccordionHeadingSeven">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#leftAccordionCollapseSeven" aria-expanded="true" aria-controls="leftAccordionCollapseSeven">' +
        'Credits' +
        '</button>' +
        '</h5>' +
        '</div>' +
        '<div id="leftAccordionCollapseSeven" class="collapse show" aria-labelledby="leftAccordionHeadingSeven" data-parent="#leftAccordion">' +
        '<div class="card-body">' +
        '<div clas="container">' +
        '<div class="row">' +
        '<div class="col-12 form-group">' +
        '<label for="creditsTextArea" id="creditsHelpBlock">{{get_string "help_credits" component}}</label>' +
        '<label id="creditsExampleBlock"><i>{{get_string "example_credits" component}}</i></label>' +
        '<textarea class="form-control" id="creditsTextArea" rows="3"></textarea>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '</div>' +

        '<div class="col-6">' +

        '<div class="accordion" id="rightAccordion">' +

        '<div class="card">' +
        '<div class="card-header" id="rightAccordionHeadingOne">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#rightAccordionCollapseOne" aria-expanded="true" aria-controls="rightAccordionCollapseOne">' +
        '{{get_string "introduction" component}}' +
        '</button>' +
        '</h5>' +
        '</div>' +
        '<div id="rightAccordionCollapseOne" class="collapse show" aria-labelledby="rightAccordionHeadingOne" data-parent="#rightAccordion">' +
        '<div class="card-body">' +
        '<div clas="container">' +
        '<div class="row">' +
        '<div class="col-12 form-group">' +
        '<label for="introductionTextArea" id="introductionHelpBlock">' +
        '{{get_string "help_introduction" component}}' +
        '</label>' +
        '<textarea class="form-control" id="introductionTextArea" rows="3"></textarea>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="card">' +
        '<div class="card-header" id="rightAccordionHeadingTwo">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#rightAccordionCollapseTwo" aria-expanded="true" aria-controls="rightAccordionCollapseTwo">' +
        '{{get_string "sdg" component}}' +
        '</button>' +
        '</h5>' +
        '</div>' +
        '<div id="rightAccordionCollapseTwo" class="collapse show" aria-labelledby="rightAccordionHeadingTwo" data-parent="#rightAccordion">' +
        '<div class="card-body">' +
        '<div clas="container">' +
        '<label>{{get_string "check_sdg" component}}</label>' +
        '<fieldset>' +
        '{{#each SDG}}' +
        '<div class="row">' +
        '<div class="col-1">' +
        '<input data-category="icon" type="checkbox" id="checkbox{{category}}{{index}}" name="{{category}}" value="{{name}}">' +
        '</div>' +
        '<div class="col-10">' +
        '<label for="checkbox{{category}}{{index}}">{{get_string name "atto_fablib"}}</label>' +
        '</div>' +
        '</div>' +
        '{{/each}}' +
        '</fieldset>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="card">' +
        '<div class="card-header" id="rightAccordionHeadingThree">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#rightAccordionCollapseThree" aria-expanded="true" aria-controls="rightAccordionCollapseThree">' +
        '{{get_string "century" component}}' +
        '</button>' +
        '</h5>' +
        '</div>' +
        '<div id="rightAccordionCollapseThree" class="collapse show" aria-labelledby="rightAccordionHeadingThree" data-parent="#rightAccordion">' +
        '<div class="card-body">' +
        '<div clas="container">' +
        '<label>{{get_string "check_century" component}}</label>' +
        '<fieldset>' +
        '{{#each CENTURY}}' +
        '<div class="row">' +
        '<div class="col-1">' +
        '<input data-category="icon" type="checkbox" id="checkbox{{category}}{{index}}" name="{{category}}" value="{{name}}">' +
        '</div>' +
        '<div class="col-10">' +
        '<label for="checkbox{{category}}{{index}}">{{get_string name "atto_fablib"}}</label>' +
        '</div>' +
        '</div>' +
        '{{/each}}' +
        '</fieldset>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="card">' +
            '<div class="card-header" id="rightAccordionHeadingFour">' +
                '<h5 class="mb-0">' +
                '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#rightAccordionCollapseFour" aria-expanded="true" aria-controls="rightAccordionCollapseFour">' +
                'Computational Thinking' +
                '</button>' +
                '</h5>' +
            '</div>' +
            '<div id="rightAccordionCollapseFour" class="collapse show" aria-labelledby="rightAccordionHeadingFour" data-parent="#rightAccordion">' +
                '<div class="card-body">' +
                    '<div clas="container">' +
                        '<label>{{get_string "check_computational_thinking" component}}</label>' +
                        '<fieldset>' +
                        '{{#each CT}}' +
                        '<div class="row">' +
                            '<div class="col-1">' +
                                '<input data-category="icon" type="checkbox" id="checkbox{{category}}{{index}}" name="{{category}}" value="{{name}}">' +
                            '</div>' +
                            '<div class="col-10">' +
                                '<label for="checkbox{{category}}{{index}}">{{get_string name "atto_fablib"}}</label>' +
                            '</div>' +
                        '</div>' +
                        '{{/each}}' +
                        '</fieldset>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +

        '<div class="card">' +
        '<div class="card-header" id="rightAccordionHeadingFive">' +
        '<h5 class="mb-0">' +
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#rightAccordionCollapseFive" aria-expanded="true" aria-controls="rightAccordionCollapseFive">' +
        '{{get_string "digital_making" component}}' +
        '</button>' +
        '</h5>' +
        '</div>' +
        '<div id="rightAccordionCollapseFive" class="collapse show" aria-labelledby="rightAccordionHeadingFive" data-parent="#rightAccordion">' +
        '<div class="card-body">' +
        '<div clas="container">' +
        '<label>{{get_string "check_digital_making" component}}</label>' +

        '{{#each DIGITAL_MAKING}}' +
        '<div class="row">' +
            '<p>{{get_string name "atto_fablib"}}</p>' +
        '</div>' +
        '<div class="row mb-3">' +
            '<fieldset>' +
            '<div class="btn-group btn-group-toggle" data-toggle="buttons">' +
                '<label class="btn btn-secondary active" for="radio{{category}}{{index}}digital_making_levels0" title="{{get_string creator_help "atto_fablib"}}">' +
                    '<input type="radio" data-category="digital_making_button" name="{{name}}" id="radio{{category}}{{index}}digital_making_levels0" value="digital_making_creator" title="{{get_string creator_help "atto_fablib"}}" checked>' +
                '{{get_string "digital_making_creator" "atto_fablib"}}</label>' +
                '<label class="btn btn-secondary" for="radio{{category}}{{index}}digital_making_levels1" title="{{get_string builder_help "atto_fablib"}}">' +
                '<input type="radio" data-category="digital_making_button" name="{{name}}" id="radio{{category}}{{index}}digital_making_levels1" value="digital_making_builder" title="{{get_string builder_help "atto_fablib"}}">' +
                '{{get_string "digital_making_builder" "atto_fablib"}}</label>' +
                '<label class="btn btn-secondary" for="radio{{category}}{{index}}digital_making_levels2" title="{{get_string developer_help "atto_fablib"}}">' +
                '<input type="radio" data-category="digital_making_button" name="{{name}}" id="radio{{category}}{{index}}digital_making_levels2" value="digital_making_developer" title="{{get_string developer_help "atto_fablib"}}">' +
                '{{get_string "digital_making_developer" "atto_fablib"}}</label>' +
                '<label class="btn btn-secondary" for="radio{{category}}{{index}}digital_making_levels3" title="{{get_string maker_help "atto_fablib"}}">' +
                '<input type="radio" data-category="digital_making_button" name="{{name}}" id="radio{{category}}{{index}}digital_making_levels3" value="digital_making_maker" title="{{get_string maker_help "atto_fablib"}}">' +
                '{{get_string "digital_making_maker" "atto_fablib"}}</label>' +
            '</div>' +
            '</fieldset>' +
        '</div>' +
        '{{/each}}' +

        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '</div>' +

        '</div>' +
        '</div>' +

        '<div class="row">' +
        '<div class="col-12 mdl-align">' +
        // Add the insert button.
        '<button class="btn btn-secondary {{CSS.INPUTSUBMIT}}" type="submit">' + '' +
        '{{get_string "insert" component}}</button>' +
        // Add the close button
        '<button class="btn btn-secondary {{CSS.CLOSE}}" type="button">' + '' +
        '{{get_string "close" component}}</button>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '</form>',

    /**
     * All templates for content generation
     */
    CONTENTWRAPPERTEMPLATE = '' +
        '<div id="fablib_contentwrapper" class="fablib contentwrapper">',

    LANGUAGEPRETEMPLATE = '' +
        '<div id="mlang_{{lang}}"><span>{mlang {{lang}} }</span><br>',

    LANGUAGEPOSTTEMPLATE = '' +
        '<span>{mlang}</span><br></div>',

    BANNERIMAGETEMPLATE = '' +
        '<img src="{{url}}" alt="Banner image" ' +
        'width="100%"' +
        'class="fablib_bannerimage mlang_{{lang}}"' +
        '{{#if id}}id="{{id}}" {{/if}}' +
        '/><br><p></p>',

    COLUMNHEADERTEMPLATE = '' +
        '<div class="mlang_{{lang}} icon-col col-md-2 col-sm-3 col-xs-6">' +
        '<p data-category="{{category}}">{{text}}</p>' +
        '</div>',

    ICONTEMPLATE = '' +
        '<div class="mlang_{{lang}} icon-col col-md-2 col-sm-3 col-xs-6">' +
        '<img src="{{url}}"  data-category="{{category}}" data-id="{{id}}" class="mlang_{{lang}} img-responsive" width="100%" alt="{{alt}}" title="{{title}}">' +
        '</div>',

    FLUIDCONTAINERPRETEMPLATE = '' +
        '<div class="container-fluid">',

    FLUIDCONTAINERPOSTTEMPLATE = '' +
        '</div>' +
        '<p><br></p>',

    CONTAINERPRETEMPLATE = '' +
        '<div class="container">',

    CONTAINERPOSTTEMPLATE = '' +
        '</div>' +
        '<p><br></p>',

    COLUMNPRETEMPLATE = '' +
        '<div class="{{classes}}">',

    COLUMNPOSTTEMPLATE = '' +
        '</div>',

    ROWPRETEMPLATE = '' +
        '<div class="row">',

    ROWPOSTTEMPLATE = '' +
        '</div>',

    FLUIDROWPRETEMPLATE = '' +
        '<div class="row-fluid">',

    LISTPRETEMPLATE = '' +
        '<ul>',

    LISTPOSTTEMPLATE = '' +
        '</ul><br>',

    ITEMTEMPLATE = '' +
        '<li class="mlang_{{lang}}" data-category="{{category}}" data-id="{{id}}">{{item}}</li>',
    
    TITLETEMPLATE = '' +
        '<h3 data-category="{{category}}">{{title}}</h3>',

    PARAGRAPHTEMPLATE = '' +
        '<p data-category="{{category}}" data-id="{{id}}" class="mlang_{{lang}}">{{text}}</p>',
        
    HYPERLINKITEMTEMPLATE = '' +
        '<li><a class="mlang_{{lang}}" data-category="{{category}}" href={{link}}>{{text}}</a></li>';



Y.namespace('M.atto_fablib').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    /**
    * A reference to the current selection at the time that the dialogue
    * was opened.
    *
    * @property _currentSelection
    * @type Range
    * @private
    */
    _currentSelection: null,

    /**
    * The most recently selected image.
    *
    * @param _selectedImage
    * @type Node
    * @private
    */
    _selectedImage: null,

    /**
    * A reference to the currently open form.
    *
    * @param _attoform
    * @type Node
    * @private
    */
    _attoform: null,

    /**
    * The dimensions of the raw image before we manipulate it.
    *
    * @param _rawImageDimensions
    * @type Object
    * @private
    */
    _rawImageDimensions: null,

    /**
     * The language code of the current selected language in the form of the dialogue
     * 
     * @param _currentLanguageCode
     * @type String | universal two-letter language code such as EN, NL, etc.
     * @private
     */
    _currentLanguageCode: null,

    /**
     * The css lanugage selector for the current selected language in the form of the dialogue
     * 
     * @param _currentLanguageSelector
     * @type String | selector for all content in the current language, e.g., mlang_EN, mlang_NL, etc.
     * @private
     */
    _currentLanguageSelector: null,

    /**
     * The number of files for the current selected language in the form of the dialogue
     * 
     * @param _numberOfFiles
     * @type Number
     * @private
     */
    _numberOfFiles: 0,

    initializer: function () {

        this.addButton({
            icon: M.util.image_url("ed/" + 'fablib_metadata', "atto_fablib"),
            callback: this._displayDialogue,
            tags: '.contentwrapper', 
            tagMatchRequiresAll: false
        });
        this.editor.delegate('dblclick', this._displayDialogue, '.contentwrapper', this); 
        this.editor.delegate('click', this._handleClick, '.contentwrapper', this);
        this.editor.on('drop', this._handleDragDrop, this);

        // e.preventDefault needed to stop the default event from clobbering the desired behaviour in some browsers.
        this.editor.on('dragover', function (e) {
            e.preventDefault();
        }, this);
        this.editor.on('dragenter', function (e) {
            e.preventDefault();
        }, this);
    },

    /**
    * Handle a drag and drop event with an image.
    *
    * @method _handleDragDrop
    * @param {EventFacade} e
    * @return mixed
    * @private
    */
    _handleDragDrop: function (e) {

        var self = this,
            host = this.get('host'),
            template = Y.Handlebars.compile(BANNERIMAGETEMPLATE);

        host.saveSelection();
        e = e._event;

        var languageCode = self._attoform.one('#language').get('value');

        // Only handle the event if an image file was dropped in.
        var handlesDataTransfer = (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length);
        if (handlesDataTransfer && /^image\//.test(e.dataTransfer.files[0].type)) {

            var options = host.get('filepickeroptions').image,
                savepath = (options.savepath === undefined) ? '/' : options.savepath,
                formData = new FormData(),
                timestamp = 0,
                uploadid = "",
                xhr = new XMLHttpRequest(),
                imagehtml = "",
                keys = Object.keys(options.repositories);

            e.preventDefault();
            e.stopPropagation();
            formData.append('repo_upload_file', e.dataTransfer.files[0]);
            formData.append('itemid', options.itemid);

            // List of repositories is an object rather than an array.  This makes iteration more awkward.
            for (var i = 0; i < keys.length; i++) {
                if (options.repositories[keys[i]].type === 'upload') {
                    formData.append('repo_id', options.repositories[keys[i]].id);
                    break;
                }
            }
            formData.append('env', options.env);
            formData.append('sesskey', M.cfg.sesskey);
            formData.append('client_id', options.client_id);
            formData.append('savepath', savepath);
            formData.append('ctx_id', options.context.id);

            // Insert spinner as a placeholder.
            timestamp = new Date().getTime();
            uploadid = 'moodleimage_' + Math.round(Math.random() * 100000) + '-' + timestamp;
            host.focus();
            host.restoreSelection();
            imagehtml = template({
                url: M.util.image_url("i/loading_small", 'moodle'),
                alt: M.util.get_string('uploading', COMPONENTNAME),
                id: uploadid,
                lang: languageCode
            });
            host.insertContentAtFocusPoint(imagehtml);
            self.markUpdated();

            // Kick off a XMLHttpRequest.
            xhr.onreadystatechange = function () {
                var placeholder = self.editor.one('#' + uploadid),
                    result,
                    file,
                    newhtml,
                    newimage;

                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        result = JSON.parse(xhr.responseText);
                        if (result) {
                            if (result.error) {
                                if (placeholder) {
                                    placeholder.remove(true);
                                }
                                return new M.core.ajaxException(result);
                            }

                            file = result;
                            if (result.event && result.event === 'fileexists') {
                                // A file with this name is already in use here - rename to avoid conflict.
                                // Chances are, it's a different image (stored in a different folder on the user's computer).
                                // If the user wants to reuse an existing image, they can copy/paste it within the editor.
                                file = result.newfile;
                            }

                            // Replace placeholder with actual image.
                            newhtml = template({
                                url: file.url,
                                presentation: true
                            });
                            newimage = Y.Node.create(newhtml);
                            if (placeholder) {
                                placeholder.replace(newimage);
                            } else {
                                self.editor.appendChild(newimage);
                            }
                            self.markUpdated();
                        }
                    } else {
                        Y.use('moodle-core-notification-alert', function () {
                            new M.core.alert({ message: M.util.get_string('servererror', 'moodle') });
                        });
                        if (placeholder) {
                            placeholder.remove(true);
                        }
                    }
                }
            };
            xhr.open("POST", M.cfg.wwwroot + '/repository/repository_ajax.php?action=upload', true);
            xhr.send(formData);
            return false;
        }

    },

    /**
    * Handle a click on an image.
    *
    * @method _handleClick
    * @param {EventFacade} e
    * @private
    */
    _handleClick: function (e) {
        var image = e.target;

        var selection = this.get('host').getSelectionFromNode(image);
        if (this.get('host').getSelection() !== selection) {
            this.get('host').setSelection(selection);
        }
    },

    /**
    * Display the image editing tool.
    *
    * @method _displayDialogue
    * @private
    */
    _displayDialogue: function () {
        // Store the current selection.
        this._currentSelection = this.get('host').getSelection();
        if (this._currentSelection === false) {
            return;
        }

        // Reset the image dimensions.
        this._rawImageDimensions = null;

        // English is the default language
        this._currentLanguageCode = 'EN';
        this._currentLanguageSelector = '.mlang_EN';

        var dialogue = this.getDialogue({
            headerContent: M.util.get_string('title', COMPONENTNAME),
            width: 'auto',
            focusAfterHide: true,
            focusOnShowSelector: SELECTORS.INPUTURL
        });

        // Set the dialogue content, and then show the dialogue.
        dialogue.set('bodyContent', this._getDialogueContent())
            .show();

        this._setFiles();
    },

    /**
    * Set the inputs for width and height if they are not set, and calculate
    * if the constrain checkbox should be checked or not.
    *
    * @method _loadPreviewImage
    * @param {String} url
    * @private
    */
    _loadPreviewImage: function (url) {
        var image = new Image();
        var self = this;

        image.onerror = function () {
            var preview = self._attoform.one('.' + CSS.IMAGEPREVIEW);
            preview.setStyles({
                'display': 'none'
            });

            // Centre the dialogue when clearing the image preview.
            self.getDialogue().centerDialogue();
        };

        image.onload = function () {
            var input, currentwidth, currentheight, widthRatio, heightRatio;

            self._rawImageDimensions = {
                width: this.width,
                height: this.height
            };

            input = self._attoform.one('.' + CSS.IMAGEPREVIEW);
            input.setAttribute('src', this.src);
            input.setStyles({
                'display': 'inline'
            });

            self.getDialogue().centerDialogue();
        };

        image.src = url;
    },

    /**
    * Return the dialogue content for the tool, attaching any required
    * events.
    *
    * @method _getDialogueContent
    * @return {Node} The content to place in the dialogue.
    * @private
    */
    _getDialogueContent: function () {
        var template = Y.Handlebars.compile(TEMPLATE),
            canShowFilepicker = this.get('host').canShowFilepicker('image'),
            content = Y.Node.create(template({
                elementid: this.get('host').get('elementid'),
                CSS: CSS,
                component: COMPONENTNAME,
                LANGUAGES: LANGUAGES,
                MACHINES: MACHINES,
                SDG: SDG,
                CENTURY: CENTURY,
                CT: CT,
                DIGITAL_MAKING: DIGITAL_MAKING,
                DIGITAL_MAKING_LEVELS: DIGITAL_MAKING_LEVELS,
                showFilepicker: canShowFilepicker,
                alignments: ALIGNMENTS
            }));

        this._attoform = content;

        this._attoform.one('#language').on('change', this._updateFormContent, this);

        // Configure the view of the current image. 
        this._applyImageProperties(this._attoform);
        
        this._applyFablibProperties(this._attoform);

        this._attoform.one('.' + CSS.INPUTURL).on('blur', this._urlChanged, this);
        this._attoform.one('.' + CSS.INPUTURL).on('blur', this._urlChanged, this);
        this._attoform.one('.' + CSS.INPUTSUBMIT).on('click', this._insertData, this);
        this._attoform.one('.' + CSS.CLOSE).on('click', this._closeDialogue, this);

        if (canShowFilepicker) {
            content.delegate('click', function (e) {
                var element = this._attoform;
                e.preventDefault();
                this.get('host').showFilepicker('image', this._getFilepickerCallback(element), this);
            }, '.atto_fablib_bannerimage_openimagebrowser', this);
        }

        this._attoform.one('.' + CSS.INPUTADDFILE).on('click', this._getAddFile(this._attoform, CSS, COMPONENTNAME, this), this);

        return content;
    },

    _getAddFile: function(element, CSS, COMPONENTNAME, context) {
        return function() {
    
            context._numberOfFiles = context._numberOfFiles + 1;
            var i = context._numberOfFiles;
    
            var NEW_TEMPLATE = 
            // File name
            '<div class="row fablib-file-item">' +
            '<div class="col-12 form-group">' +
            '<label for="fileNameTextArea-'+i+'">{{get_string "help_files" component}}</label>' +
            '<textarea class="form-control" id="fileNameTextArea-' + i +  '" rows="1"></textarea>' +
            '</div>' +
            '</div>' +

            // File url
            '<div class="row fablib-file-item">' +
            '<div class="col-12 form-group">' +
            '<label for="fileUrlTextArea-'+i+'">{{get_string "help_files_url" component}}</label>' +
            '<textarea class="form-control" id="fileUrlTextArea-' + i +  '" rows="1"></textarea>' +
            '</div>' +
            '</div>';
    
            var template = Y.Handlebars.compile(NEW_TEMPLATE),
             new_content = Y.Node.create(template({
              elementid: 'fablib_files',
              CSS: CSS,
              component: COMPONENTNAME,
            }));
    
            element.insert(new_content, Y.one('#filesContainer'));
        };
    },

    _addFile: function(CSS, COMPONENTNAME, fileName, fileUrl){
        this._numberOfFiles = this._numberOfFiles + 1;
        var i = this._numberOfFiles;
        
        var NEW_TEMPLATE = 
        // File name
        '<div class="row fablib-file-item">' +
        '<div class="col-12 form-group">' +
        '<label for="fileNameTextArea-'+i+'">{{get_string "help_files" component}}</label>' +
        '<textarea class="form-control" id="fileNameTextArea-' + i +  '" rows="1">{{file_name}}</textarea>' +
        '</div>' +
        '</div>' +

        // File url
        '<div class="row fablib-file-item">' +
        '<div class="col-12 form-group">' +
        '<label for="fileUrlTextArea-'+i+'">{{get_string "help_files_url" component}}</label>' +
        '<textarea class="form-control" id="fileUrlTextArea-' + i +  '" rows="1">{{file_url}}</textarea>' +
        '</div>' +
        '</div>';

        var template = Y.Handlebars.compile(NEW_TEMPLATE),
            new_content = Y.Node.create(template({
                elementid: 'fablib_files',
                CSS: CSS,
                component: COMPONENTNAME,
                file_name: fileName,
                file_url: fileUrl
            }));

        this._attoform.insert(new_content, Y.one('#filesContainer'));
    },

    /**
     * Updates the form content when a different language is selected in the form. This method will set the new 
     * language and update the form content. 
     * 
     * @method _updateFormContent
     * @private
     */
    _updateFormContent: function() {
        this._setCurrentLanguage();
        this._applyImageProperties(this._attoform);
        this._applyFablibProperties(this._attoform);
    },

    /**
     * Update the current language code and the current language css selector
     * 
     * @method _setCurrentLanguage
     * @private
     */
    _setCurrentLanguage: function () {
        this._currentLanguageCode = this._attoform.one('#language').get('value');
        this._currentLanguageSelector = '.mlang_' + this._currentLanguageCode;
    },

    /**
    * Update the dialogue after an image was selected in the File Picker.
    *
    * @method _filepickerCallback
    * @param {object} params The parameters provided by the filepicker
    * containing information about the image.
    * @private
    */
    _filepickerCallback: function (params) {
        if (params.url !== '') {
            var input = this._attoform.one('.' + CSS.INPUTURL);
            input.set('value', params.url);

            // Load the preview image.
            this._loadPreviewImage(params.url);
        }
    },

    /**
         * Returns the callback for the file picker to call after a file has been selected.
         *
         * @method _getFilepickerCallback
         * @param  {Y.Node} element The element which triggered the callback (atto form)
         * @return {Function} The function to be used as a callback when the file picker returns the file
         * @private
         */
    _getFilepickerCallback: function (element) {
        return function (params) {
            if (params.url !== '') {
                var input = element.one('.' + CSS.INPUTURL);
                input.set('value', params.url);

                // Load the preview image.
                var image = new Image();

                image.onerror = function () {
                    var preview = element.one('.' + CSS.IMAGEPREVIEW);
                    preview.setStyles({
                        'display': 'none'
                    });
                };

                image.onload = function () {
                    var input;

                    input = element.one('.' + CSS.IMAGEPREVIEW);
                    input.setAttribute('src', this.src);
                    input.setStyles({
                        'display': 'inline'
                    });

                };

                image.src = params.url;
            }
        };
    },

    /**
    * Applies properties of an existing image to the image dialogue for editing.
    *
    * @method _applyImageProperties
    * @param {Node} form
    * @param {String} lang The language CSS selector for the current selected language in the form
    * @private
    */
    _applyImageProperties: function (form) {
        var properties = this._getSelectedImageProperties(),
            img = form.one('.' + CSS.IMAGEPREVIEW);

        if (properties === false) {
            img.setStyle('display', 'none');
            // Set the default alignment.
            ALIGNMENTS.some(function (alignment) {
                if (alignment.isDefault) {
                    //form.one('.' + CSS.INPUTALIGNMENT).set('value', alignment.value);
                    return true;
                }

                return false;
            }, this);

            return;
        }

        if (properties.align) {
            form.one('.' + CSS.INPUTALIGNMENT).set('value', properties.align);
        }
        if (properties.customstyle) {
            form.one('.' + CSS.INPUTCUSTOMSTYLE).set('value', properties.customstyle);
        }

        if (properties.src) {
            form.one('.' + CSS.INPUTURL).set('value', properties.src);
            this._loadPreviewImage(properties.src);
        } else {
            form.one('.' + CSS.INPUTURL).set('value', '');
        }
    },

    /**
     * Retrieve the content in the current language from the editor and fill it in in the form. 
     * If no content in the current language exists then reset the form.
     * 
     * @param {Node} form The form in the dialogue
     * @private
     */
    _applyFablibProperties: function (form){
        this._setDuration();
        this._setDifficulty();
        this._setIntroduction();
        this._setMachines();
        this._setMaterials();
        this._setFiles();
        this._setSafety();
        this._setCredits();
        this._setIcons();
        this._setDigitalMakingProfile();
    },

    /**
    * Gets the properties of the currently selected image.
    *
    * The first image only if multiple images are selected.
    *
    * @method _getSelectedImageProperties
    * @param {String} lang The language CSS selector for the current selected language in the form
    * @return {object}
    * @private
    */
    _getSelectedImageProperties: function () {
        var properties = {
            src: null,
            alt: null,
            align: '',
            presentation: false
        },

            // Get all images in the editor
            images = this.editor.all('img'),
            style,
            image;

        if (images) {
            images = images.filter('.fablib_bannerimage');
            images = images.filter(this._currentLanguageSelector);
        }

        if (images && images.size()) {
            image = this._removeLegacyAlignment(images.item(0));
            this._selectedImage = image;

            style = image.getAttribute('style');
            properties.customstyle = style;

            this._getAlignmentPropeties(image, properties);
            properties.src = image.getAttribute('src');
            properties.presentation = (image.get('role') === 'presentation');
            return properties;
        }

        // No image selected - clean up.
        this._selectedImage = null;
        return false;
    },

    /**
    * Sets the alignment of a properties object.
    *
    * @method _getAlignmentPropeties
    * @param {Node} image The image that the alignment properties should be found for
    * @param {Object} properties The properties object that is created in _getSelectedImageProperties()
    * @private
    */
    _getAlignmentPropeties: function (image, properties) {
        var complete = false,
            defaultAlignment;

        // Check for an alignment value.
        complete = ALIGNMENTS.some(function (alignment) {
            var classname = this._getAlignmentClass(alignment.value);
            if (image.hasClass(classname)) {
                properties.align = alignment.value;

                return true;
            }

            if (alignment.isDefault) {
                defaultAlignment = alignment.value;
            }

            return false;
        }, this);

        if (!complete && defaultAlignment) {
            properties.align = defaultAlignment;
        }
    },

    /**
    * Update the form when the URL was changed. This includes updating the
    * height, width, and image preview.
    *
    * @method _urlChanged
    * @private
    */
    _urlChanged: function () {
        var input = this._attoform.one('.' + CSS.INPUTURL);

        if (input.get('value') !== '') {
            // Load the preview image.
            this._loadPreviewImage(input.get('value'));
        }
    },

    /**
    * Update the image in the contenteditable.
    *
    * @method _setImage
    * @private
    */
    _setImage: function () {
        var form = this._attoform,
            url = form.one('.' + CSS.INPUTURL).get('value'),
            alignment = this._getAlignmentClass(form.one('.' + CSS.INPUTALIGNMENT).get('value')),
            imagehtml,
            customstyle = form.one('.' + CSS.INPUTCUSTOMSTYLE).get('value'),
            classlist = [],
            host = this.get('host');

        // Check if there are any accessibility issues.
        if (this._updateWarning()) {
            return;
        }

        var languageCode = this._attoform.one('#language').get('value');

        // Focus on the editor in preparation for inserting the image.
        host.focus();
        if (url !== '') {
            if (this._selectedImage) {
                host.setSelection(host.getSelectionFromNode(this._selectedImage));
            } else {
                host.setSelection(this._currentSelection);
            }

            // Add the alignment class for the image.
            classlist.push(alignment);

            var template = Y.Handlebars.compile(BANNERIMAGETEMPLATE);
            imagehtml = template({
                url: url,
                customstyle: customstyle,
                classlist: classlist.join(' '),
                lang: languageCode
            });

            return imagehtml;
        }

    },

    /**
     * Parse and insert the data of the dialogue form into the editor at the suitable location (as a child of fablib_contentwrapper)
     * 
     * @param {Event} e 
     * @private
     */
    _insertData: function (e) {
        var form = this._attoform,
            url = form.one('.' + CSS.INPUTURL).get('value'),
            data = '',
            temp = '',
            leftColumn = '',
            rightColumn = '',
            leftColumnContainer = '',
            rightColumnContainer = '',
            host = this.get('host');

        e.preventDefault();

        // Check if there are any accessibility issues.
        if (this._updateWarning()) {
            return;
        }

        // Focus on the editor in preparation for inserting the image.
        host.focus();
        if (url !== '') {
            host.setSelection(this._currentSelection);

            // banner image
            var imagehtml = this._setImage();

            var duration = this._appendDuration();
            var difficulty = this._appendDifficulty();
            var machines = this._appendMachines();
            var materials = this._appendMaterials();
            var files = this._appendFiles();
            var credits = this._appendCredits();

            var introduction = this._appendIntroduction();
            var safety = this._appendSafety();

            temp = this._appendTitle('', 'sdg');
            var sdg = this._appendIcons(temp, SDG);

            temp = this._appendTitle('', 'century');
            var century = this._appendIcons(temp, CENTURY);

            temp = this._appendTitle('', 'computational_thinking');
            var computationalThinking = this._appendIcons(temp, CT);

            temp = this._appendTitle('', 'digital_making');
            var digitalMaking = this._appendDigitalMakingProfile(temp);

            leftColumn = duration + difficulty + machines + materials + files + safety + credits;
            var classes = 'mlang_' + this._currentLanguageCode + ' col-md-4 span3'; 
            leftColumnContainer = this._prependAndAppendColumn(leftColumn, classes);

            rightColumn = introduction + sdg + century + computationalThinking + digitalMaking ;
            classes = 'mlang_' + this._currentLanguageCode + ' col-md-8 span8';
            rightColumnContainer = this._prependAndAppendColumn(rightColumn, classes);

            data = leftColumnContainer + rightColumnContainer;
            data = this._prependAndAppendRow(data);
            data = this._prependAndAppendContainer(data);

            data = imagehtml + data;
            data = this._prependAndAppendLanguageTags(data);

            var editorContent = this.editor.children;
            if (this.get('host').selectionFilterMatches('.contentwrapper', editorContent,false)) {

                this.editor.all('#mlang_'+this._currentLanguageCode).each(function(languageNode){ 
                    languageNode.remove(true);
                }, this)
                this.editor.one('#fablib_contentwrapper').append(data);
            } else {
                data = this._prependAndAppendContentWrapper(data);
                this.get('host').insertContentAtFocusPoint(data);
            }

            this.markUpdated();
        }
    },

    /**
     * Close the dialogue 
     * 
     * @param {Event} e 
     */
    _closeDialogue: function(e) {
        this.getDialogue({
            focusAfterHide: null
        }).hide();
    },

    _prependAndAppendContentWrapper: function(data) {
        var html = '';

        var contentwrappertemplate = Y.Handlebars.compile(CONTENTWRAPPERTEMPLATE);
        var contentpre = contentwrappertemplate({});

        var contentwrapperposttemplate = Y.Handlebars.compile(CONTAINERPOSTTEMPLATE);
        var contentpost = contentwrapperposttemplate({});

        html = contentpre + data + contentpost;
        return html;
    },

    _prependAndAppendLanguageTags: function (data) {
        var html = '';

        var languageCode = this._attoform.one('#language').get('value');

        var languagepretemplate = Y.Handlebars.compile(LANGUAGEPRETEMPLATE);
        var langpre = languagepretemplate({
            lang: languageCode
        });

        var languageposttemplate = Y.Handlebars.compile(LANGUAGEPOSTTEMPLATE);
        var langpost = languageposttemplate({});

        html = langpre + data + langpost;
        return html;
    },

    _appendTitle: function (data, title, category) {
        var html = data;

        var languageCode = this._attoform.one('#language').get('value');
        var title = M.util.get_string(title + '_' + languageCode, COMPONENTNAME);

        var titletemplate = Y.Handlebars.compile(TITLETEMPLATE);
        var titleHtml = titletemplate({
            title: title,
            category: category
        });

        html = html + titleHtml;
        return html;
    },

    _appendParagraph: function (data, text, category, id) {
        var html = data;
        if(text != ''){
            var paragraphtemplate = Y.Handlebars.compile(PARAGRAPHTEMPLATE);
            var paragraphHtml = paragraphtemplate({
                text: text,
                category: category,
                id: id,
                lang: this._currentLanguageCode
            });
    
            html = html + paragraphHtml;
        }
        return html;
    },

    _prependAndAppendColumn: function(data, classes){
        var html = '';

        var columnpretemplate = Y.Handlebars.compile(COLUMNPRETEMPLATE);
        var columnpre = columnpretemplate({
            classes: classes
        });

        var columnposttemplate = Y.Handlebars.compile(COLUMNPOSTTEMPLATE);
        var columnpost = columnposttemplate({ });

        html = columnpre + data + columnpost;
        return html;
    },

    _prependAndAppendFluidRow: function(data){
        var html = '';

        var rowpretemplate = Y.Handlebars.compile(FLUIDROWPRETEMPLATE);
        var rowpre = rowpretemplate({ });

        var rowposttemplate = Y.Handlebars.compile(ROWPOSTTEMPLATE);
        var rowpost = rowposttemplate({ });

        html = rowpre + data + rowpost;
        return html;
    },

    _prependAndAppendRow: function(data){
        var html = '';

        var rowpretemplate = Y.Handlebars.compile(ROWPRETEMPLATE);
        var rowpre = rowpretemplate({ });

        var rowposttemplate = Y.Handlebars.compile(ROWPOSTTEMPLATE);
        var rowpost = rowposttemplate({ });

        html = rowpre + data + rowpost;
        return html;
    },

    _prependAndAppendContainer: function(data){
        var html = '';

        var containerpretemplate = Y.Handlebars.compile(FLUIDCONTAINERPRETEMPLATE);
        var containerpre = containerpretemplate({ });
        
        var containerposttemplate = Y.Handlebars.compile(FLUIDCONTAINERPOSTTEMPLATE);
        var containerpost = containerposttemplate({ });

        html = containerpre + data + containerpost;
        return html;
    },

    _appendIcons: function (data, icons) {
        var html = data;

        var containerpretemplate = Y.Handlebars.compile(CONTAINERPRETEMPLATE);
        var containerpre = containerpretemplate({});
        html = html + containerpre;

        var language = this._attoform.one('#language').get('value');
        var numberOfIconsSelected = 0;
        for (var i = 0; i < icons.length; i++) {
            var id = '#checkbox' + icons[i].category + icons[i].index;
            var checked = this._attoform.one(id).get('checked');

            if (checked) {
                numberOfIconsSelected += 1;

                if (numberOfIconsSelected % 6 == 1) {
                    var rowpretemplate = Y.Handlebars.compile(ROWPRETEMPLATE);
                    var rowpre = rowpretemplate({});
                    html = html + rowpre;
                }

                var imagetemplate = Y.Handlebars.compile(ICONTEMPLATE);
                var image = imagetemplate({
                    url: M.util.image_url("ed/" + icons[i].icon + '_' + language, COMPONENTNAME),
                    alt: icons[i].icon + '_' + language,
                    title: '',
                    category: 'icon',
                    id: id,
                    lang: this._currentLanguageCode
                });

                html = html + image;

                if (numberOfIconsSelected % 6 == 0) {
                    var rowposttemplate = Y.Handlebars.compile(ROWPOSTTEMPLATE);
                    var rowpost = rowposttemplate({});
                    html = html + rowpost;
                }

            }
        }

        if (numberOfIconsSelected % 6 != 0) {
            var rowposttemplate = Y.Handlebars.compile(ROWPOSTTEMPLATE);
            var rowpost = rowposttemplate({});
            html = html + rowpost;
        }

        var containerposttemplate = Y.Handlebars.compile(CONTAINERPOSTTEMPLATE);
        var containerpost = containerposttemplate({});
        html = html + containerpost;

        return html;
    },

    _setIcons: function() {
        var iconNodes = this.editor.all('img[data-category="icon"]').filter(this._currentLanguageSelector);
        
        if(iconNodes && iconNodes.size()){
            iconNodes.each(function(item) {
                var iconCheckbox = item.getAttribute('data-id');
                this._attoform.one(iconCheckbox).set('checked', true);
            }, this);
        } else {
            this._attoform.all('input[data-category="icon"]').each(function(item) {
                item.set('checked', false);
            });
        }
    },

    _appendDigitalMakingProfile: function (data) {
        var html = data;

        var containerpretemplate = Y.Handlebars.compile(CONTAINERPRETEMPLATE);
        var containerpre = containerpretemplate({});
        html = html + containerpre;

        var rowpretemplate = Y.Handlebars.compile(ROWPRETEMPLATE);
        var rowpre = rowpretemplate({});
        html = html + rowpre;

        var i;
        var j;

        for(i = 0; i < DIGITAL_MAKING.length; i++){
            var text = M.util.get_string(DIGITAL_MAKING[i].name, COMPONENTNAME);
            var columnheadertemplate = Y.Handlebars.compile(COLUMNHEADERTEMPLATE);
            var columnheader = columnheadertemplate({
                text: text,
                lang: this._currentLanguageCode
            });
            html = html + columnheader;
        }

        var rowposttemplate = Y.Handlebars.compile(ROWPOSTTEMPLATE);
        var rowpost = rowposttemplate({});
        html = html + rowpost;
        html = html + rowpre; 
            
        for (i = 0; i < DIGITAL_MAKING.length; i++) {
            var id = '';

            for(j = 0; j < DIGITAL_MAKING_LEVELS.length; j++){
                id = 'radio' + DIGITAL_MAKING[i].category + DIGITAL_MAKING[i].index + DIGITAL_MAKING_LEVELS[j].category + DIGITAL_MAKING_LEVELS[j].index;

                var checked = this._attoform.one('#' + id).get('checked');
                if(checked){
                    var imagetemplate = Y.Handlebars.compile(ICONTEMPLATE);
                    var image = imagetemplate({
                        url: M.util.image_url("ed/" + M.util.get_string(DIGITAL_MAKING_LEVELS[j].icon, COMPONENTNAME), COMPONENTNAME),
                        alt: M.util.get_string(DIGITAL_MAKING_LEVELS[j].icon, COMPONENTNAME),
                        title: this._attoform.one('#' + id).get('title'),
                        id: id,
                        category: 'digital_making_button',
                        lang: this._currentLanguageCode
                    });

                    html = html + image;
                    break;
                }
            }
        }

        html = html + rowpost;

        var containerposttemplate = Y.Handlebars.compile(CONTAINERPOSTTEMPLATE);
        var containerpost = containerposttemplate({});
        html = html + containerpost;

        return html;
    },

    _setDigitalMakingProfile: function() {
        var iconNodes = this.editor.all('img[data-category="digital_making_button"]').filter(this._currentLanguageSelector);

        if(iconNodes && iconNodes.size()){
            this._attoform.all('input[data-category="digital_making_button"]').each(function(item) {
                item.set('checked', false);
                var id = item.getAttribute('id');
                this._attoform.one('label[for="'+id+'"]').removeClass('active');
            }, this);

            iconNodes.each(function(item) {
                var iconCheckbox = item.getAttribute('data-id');
                this._attoform.one('#' + iconCheckbox).set('checked', true);
                this._attoform.one('label[for="' +iconCheckbox+'"]').addClass('active');
            }, this);
        } else {
            this._attoform.all('input[data-category="digital_making_button"]').each(function(item) {
                item.set('checked', false);
                var id = item.getAttribute('id');
                this._attoform.one('label[for="'+id+'"]').removeClass('active');
            }, this);

            this._attoform.all('input[value="digital_making_creator"').each(function(item) {
                item.set('checked', true);
                var id = item.getAttribute('id');
                this._attoform.one('label[for="'+id+'"]').addClass('active');
            }, this);
        }
    },


    _appendDuration: function() {
        var duration = this._attoform.one('#duration').get('value');

        if(duration != ''){
            var data = this._appendTitle('', 'duration');
            var languageCode = this._attoform.one('#language').get('value');
    
            var text = M.util.get_string(duration+'_'+languageCode, COMPONENTNAME);
            var newData = this._appendParagraph(data, text, 'duration', duration);
    
            return newData;
        } else {
            return '';
        }
    },

    _setDuration: function() {
        var durationNode = this.editor.all('p[data-category="duration"]').filter(this._currentLanguageSelector);
        
        if(durationNode && durationNode.size()){
            var duration = durationNode.item(0).getAttribute('data-id');
            this._attoform.one('option[value="'+duration+'"]').set('selected', true);
        } else {
            this._attoform.one('option[value="duration1"]').set('selected', true);
        }

    },

    _appendDifficulty: function() {
        var difficulty = this._attoform.one('#difficulty').get('value');

        if(difficulty != ''){
            var data = this._appendTitle('', 'difficulty');
            var languageCode = this._attoform.one('#language').get('value');
            var text = M.util.get_string(difficulty+'_'+languageCode, COMPONENTNAME);
            var newData = this._appendParagraph(data, text, 'difficulty', difficulty);
    
            return newData;
        } else {
            return '';
        }
    },

    _setDifficulty: function() {
        var difficultyNode = this.editor.all('p[data-category="difficulty"]').filter(this._currentLanguageSelector);
        
        if(difficultyNode && difficultyNode.size()){
            var difficulty = difficultyNode.item(0).getAttribute('data-id');
            this._attoform.one('option[value="'+difficulty+'"]').set('selected', true);
        } else {
            this._attoform.one('option[value="difficulty1"]').set('selected', true);
        }
    },

    _appendMachines: function () {
        var data = this._appendTitle('', 'machines');

        var html = data;

        var listpretemplate = Y.Handlebars.compile(LISTPRETEMPLATE);
        var listpre = listpretemplate({});
        html = html + listpre;

        var language = this._attoform.one('#language').get('value');

        for (var i = 0; i < MACHINES.length; i++) {
            var id = '#checkbox' + MACHINES[i].category + MACHINES[i].index;
            var checked = this._attoform.one(id).get('checked');

            if (checked) {

                var machine = this._attoform.one(id).get('value');

                var itemtemplate = Y.Handlebars.compile(ITEMTEMPLATE);
                var itemhtml = itemtemplate({
                    item: M.util.get_string(machine + '_' + language, COMPONENTNAME),
                    category: 'machines',
                    id: id,
                    lang: this._currentLanguageCode
                });

                html = html + itemhtml;
            }
        }

        var listposttemplate = Y.Handlebars.compile(LISTPOSTTEMPLATE);
        var listpost = listposttemplate({});
        html = html + listpost;

        return html;
    },

    _setMachines: function() {
        var machineNodes = this.editor.all('li[data-category="machines"]').filter(this._currentLanguageSelector);
        
        if(machineNodes && machineNodes.size()){
            machineNodes.each(function(item) {
                var machineCheckbox = item.getAttribute('data-id');
                this._attoform.one(machineCheckbox).set('checked', true);
            }, this);
        } else {
            this._attoform.all('input[name="machines"]').each(function(item) {
                item.set('checked', false);
            });
        }
    },

    _appendMaterials: function () {
        var materialsRaw = this._attoform.one('#materialsTextArea').get('value');

        if(materialsRaw != ''){
            var data  = this._appendTitle('', 'materials');
            var html = data;

            var listpretemplate = Y.Handlebars.compile(LISTPRETEMPLATE);
            var listpre = listpretemplate({});
            html = html + listpre;

            var materialsList = materialsRaw.split(';');

            for (var i = 0; i < materialsList.length; i++) {
                var materialItem = materialsList[i].trim();
                if(materialItem != ''){
                    var itemtemplate = Y.Handlebars.compile(ITEMTEMPLATE);
                    var itemhtml = itemtemplate({
                        item: materialItem,
                        id: '',
                        category: 'materials',
                        lang: this._currentLanguageCode
                    });

                    html = html + itemhtml;
                }
            }

            var listposttemplate = Y.Handlebars.compile(LISTPOSTTEMPLATE);
            var listpost = listposttemplate({ });
            html = html + listpost;

            return html;
        } else {
            return '';
        }   
    },

    _setMaterials: function() {
        var materialNodes = this.editor.all('li[data-category="materials"]').filter(this._currentLanguageSelector);
        
        if(materialNodes && materialNodes.size()){
            var materialsTextArea = '';

            materialNodes.each(function(item) {
                var material = item.getHTML();
                materialsTextArea = materialsTextArea + material + '; ';
            });

            if(materialsTextArea.endsWith(';')){
                materialsTextArea.slice(0,materialsTextArea.length-1);
            }

            this._attoform.one('#materialsTextArea').set('value', materialsTextArea);
        } else {
            this._attoform.one('#materialsTextArea').set('value', '');
        }
    },

    _appendFiles: function (data) {
        if(this._numberOfFiles >= 1 && Y.one('#fileNameTextArea-1').get('value') != ''){
            var data = this._appendTitle('', 'files');
            var html = data;

            var listpretemplate = Y.Handlebars.compile(LISTPRETEMPLATE);
            var listpre = listpretemplate({});
            html = html + listpre;

            for(var i = 1; i <= this._numberOfFiles; i++){
                var fileName = Y.one('#fileNameTextArea-'+i).get('value');
                var fileUrl = this._attoform.one('#fileUrlTextArea-'+i).get('value');
                
                if(fileName && fileUrl){
                    if(fileName != '' && fileUrl != ''){
                        var hyperlinktemplate = Y.Handlebars.compile(HYPERLINKITEMTEMPLATE);
                        var fileItemHyperlink =  hyperlinktemplate({
                            link: fileUrl,
                            text: fileName,
                            category: 'files',
                            id: '',
                            lang: this._currentLanguageCode
                        });
        
                    html = html + fileItemHyperlink;
                    }
                }
            }

            var listposttemplate = Y.Handlebars.compile(LISTPOSTTEMPLATE);
            var listpost = listposttemplate({ });
            html = html + listpost;

            return html;
        } else {
            return '';
        }
        
    },

    _setFiles: function() {
        this._numberOfFiles = 0;
        var fileNodes = this._attoform.all('.fablib-file-item').each(function(item){
            item.remove(true);
        });
        
        var fileNodes = this.editor.all('a[data-category="files"]').filter(this._currentLanguageSelector);
        
        if(fileNodes && fileNodes.size()){
            
            fileNodes.each(function(item) {
                
                var fileName = item.getHTML();
                var fileUrl = item.get('href');
                this._addFile(CSS, COMPONENTNAME, fileName, fileUrl);
            },this);
        } 
    },

    _appendCredits: function () {
        var creditsRaw = this._attoform.one('#creditsTextArea').get('value');

        if(creditsRaw != ''){
            var data = this._appendTitle('', 'credits');
            var html = data;
    
            var listpretemplate = Y.Handlebars.compile(LISTPRETEMPLATE);
            var listpre = listpretemplate({});
            html = html + listpre;
    
    
            var creditsList = creditsRaw.split(';');
    
            for (var i = 0; i < creditsList.length; i++) {
                var creditsItem = creditsList[i].trim();
                if(creditsItem != ''){
                    var hyperlinktemplate = Y.Handlebars.compile(HYPERLINKITEMTEMPLATE);
                    var creditsItemHyperlink =  hyperlinktemplate({
                        link: creditsItem,
                        text: creditsItem,
                        category: 'credits',
                        id: '',
                        lang: this._currentLanguageCode
                    });
        
                    html = html + creditsItemHyperlink;
                }
            }
    
            var listposttemplate = Y.Handlebars.compile(LISTPOSTTEMPLATE);
            var listpost = listposttemplate({ });
            html = html + listpost;
    
            return html;
        } else {
            return '';
        }

    },

    _setCredits: function() {
        var creditNodes = this.editor.all('a[data-category="credits"]').filter(this._currentLanguageSelector);
        
        if(creditNodes && creditNodes.size()){
            var creditTextArea = '';

            creditNodes.each(function(item) {
                //var creditText = item.getHTML();
                var creditLink = item.getAttribute('href');
                creditTextArea = creditTextArea + creditLink + '; ';
            });

            if(creditTextArea.endsWith(';')){
                creditTextArea.slice(0,creditTextArea.length-1);
            }

            this._attoform.one('#creditsTextArea').set('value', creditTextArea);
        } else {
            this._attoform.one('#creditsTextArea').set('value', '');
        }
    },

    _appendIntroduction: function(data) {
        var introduction = this._attoform.one('#introductionTextArea').get('value');

        if(introduction != ''){
            var data = this._appendTitle('', 'introduction');
            var newData = this._appendParagraph(data, introduction, 'introduction', '');
    
            return newData;
        } else {
            return '';
        }
    },

    _setIntroduction: function() {
        var descriptionNode = this.editor.all('p[data-category="introduction"]').filter(this._currentLanguageSelector);
        
        if(descriptionNode && descriptionNode.size()){
            var description = descriptionNode.item(0).getHTML();
            this._attoform.one('#introductionTextArea').set('value', description);
        } else {
            this._attoform.one('#introductionTextArea').set('value', '');
        }
    },

    _appendSafety: function () {
        var safetyRaw = this._attoform.one('#safetyTextArea').get('value');

        if(safetyRaw != ''){
            var data = this._appendTitle('', 'safety');
            var html = data;

            var listpretemplate = Y.Handlebars.compile(LISTPRETEMPLATE);
            var listpre = listpretemplate({});
            html = html + listpre;


            var safetyList = safetyRaw.split(';');

            for (var i = 0; i < safetyList.length; i++) {
                var safetyItem = safetyList[i].trim();
                if(safetyItem != ''){
                    var itemtemplate = Y.Handlebars.compile(ITEMTEMPLATE);
                    var itemhtml = itemtemplate({
                        item: safetyItem,
                        category: 'safety',
                        id: '',
                        lang: this._currentLanguageCode
                    });

                    html = html + itemhtml;
                }
            }

            var listposttemplate = Y.Handlebars.compile(LISTPOSTTEMPLATE);
            var listpost = listposttemplate({ });
            html = html + listpost;

            return html;
        } else {
            return '';
        }
        
    },

    _setSafety: function() {
        var safetyNodes = this.editor.all('li[data-category="safety"]').filter(this._currentLanguageSelector);
        
        if(safetyNodes && safetyNodes.size()){
            var safetyTextArea = '';

            safetyNodes.each(function(item) {
                var safety = item.getHTML();
                safetyTextArea = safetyTextArea + safety + '; ';
            });

            if(safetyTextArea.endsWith(';')){
                safetyTextArea.slice(0,safetyTextArea.length-1);
            }

            this._attoform.one('#safetyTextArea').set('value', safetyTextArea);
        } else {
            this._attoform.one('#safetyTextArea').set('value', '');
        }
    },

    _appendDigitalMaking: function (data) {
        var html = data;

        return html;
    },

    /**
    * Removes any legacy styles added by previous versions of the atto image button.
    *
    * @method _removeLegacyAlignment
    * @param {Y.Node} imageNode
    * @return {Y.Node}
    * @private
    */
    _removeLegacyAlignment: function (imageNode) {
        if (!imageNode.getStyle('margin')) {
            // There is no margin therefore this cannot match any known alignments.
            return imageNode;
        }

        ALIGNMENTS.some(function (alignment) {
            if (imageNode.getStyle(alignment.name) !== alignment.value) {
                // The name/value do not match. Skip.
                return false;
            }

            var normalisedNode = Y.Node.create('<div>');
            normalisedNode.setStyle('margin', alignment.margin);
            if (imageNode.getStyle('margin') !== normalisedNode.getStyle('margin')) {
                // The margin does not match.
                return false;
            }

            imageNode.addClass(this._getAlignmentClass(alignment.value));
            imageNode.setStyle(alignment.name, null);
            imageNode.setStyle('margin', null);

            return true;
        }, this);

        return imageNode;
    },

    _getAlignmentClass: function (alignment) {
        return CSS.ALIGNSETTINGS + '_' + alignment;
    },

    /**
    * Update the alt text warning live.
    *
    * @method _updateWarning
    * @return {boolean} whether a warning should be displayed.
    * @private
    */
    _updateWarning: function () {
        return false;
    }
});


}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});
