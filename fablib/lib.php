<?php
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

/**
 * Atto text editor integration version file.
 *
 * @package    atto_fablib
 * @copyright  2020 Zimcke Van de Staey <zimcke@fablabfactory.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();


/**
 * Initialise the strings required for js
 */
function atto_fablib_strings_for_js() {
    global $PAGE;

    $strings = array(
        'alignment',
        'alignment_bottom',
        'alignment_left',
        'alignment_middle',
        'alignment_right',
        'alignment_top',
        'browserepositories',
        'close',
        'constrain',
        'insert',
        'title',
        'customstyle',
        'enterurl',
        'enteralt',
        'height',
        'presentation',
        'presentationoraltrequired',
        'size',
        'width',
        'uploading',

        'duration',
        'duration_EN',
        'duration_NL',

        'select',
        'duration1',
        'duration2',
        'duration3',
        'duration4',
        'duration5',
        'duration6',
        'duration7',
        'duration1_EN',
        'duration2_EN',
        'duration3_EN',
        'duration4_EN',
        'duration5_EN',
        'duration6_EN',
        'duration7_EN',
        'duration1_NL',
        'duration2_NL',
        'duration3_NL',
        'duration4_NL',
        'duration5_NL',
        'duration6_NL',
        'duration7_NL',

        'difficulty',
        'difficulty_EN',
        'difficulty_NL',

        'difficulty1',
        'difficulty2',
        'difficulty3',
        'difficulty1_EN',
        'difficulty2_EN',
        'difficulty3_EN',
        'difficulty1_NL',
        'difficulty2_NL',
        'difficulty3_NL',

        'machines',
        'machines_EN',
        'machines_NL',

        'check_machines',
        'machine1',
        'machine2',
        'machine3',
        'machine4',
        'machine5',
        'machine6',
        'machine7',
        'machine8',
        'machine9',
        'machine1_EN',
        'machine2_EN',
        'machine3_EN',
        'machine4_EN',
        'machine5_EN',
        'machine6_EN',
        'machine7_EN',
        'machine8_EN',
        'machine9_EN',
        'machine1_NL',
        'machine2_NL',
        'machine3_NL',
        'machine4_NL',
        'machine5_NL',
        'machine6_NL',
        'machine7_NL',
        'machine8_NL',
        'machine9_NL',

        'materials',
        'materials_EN',
        'materials_NL',

        'help_materials',
        'example_materials',

        'files',
        'files_EN',
        'files_NL',
        'help_files',
        'example_files',
        
        'introduction',
        'introduction_EN',
        'introduction_NL',
        'help_introduction',

        'safety',
        'safety_EN',
        'safety_NL',
        'help_safety',
        'example_safety',

        'sdg',
        'sdg_EN',
        'sdg_NL',
        'check_sdg',

        'century',
        'century_EN',
        'century_NL',
        'check_century',

        'computational_thinking',
        'computational_thinking_EN',
        'computational_thinking_NL',
        'check_computational_thinking',

        'digital_making',
        'digital_making_EN',
        'digital_making_NL',

        'digital_making_creator',
        'digital_making_builder',
        'digital_making_developer',
        'digital_making_maker',

        'creator_icon',
        'builder_icon',
        'developer_icon',
        'maker_icon',

        'digital_making1_creator_help',
        'digital_making2_creator_help',
        'digital_making3_creator_help',
        'digital_making4_creator_help',
        'digital_making5_creator_help',

        'digital_making1_builder_help',
        'digital_making2_builder_help',
        'digital_making3_builder_help',
        'digital_making4_builder_help',
        'digital_making5_builder_help',

        'digital_making1_developer_help',
        'digital_making2_developer_help',
        'digital_making3_developer_help',
        'digital_making4_developer_help',
        'digital_making5_developer_help',

        'digital_making1_maker_help',
        'digital_making2_maker_help',
        'digital_making3_maker_help',
        'digital_making4_maker_help',
        'digital_making5_maker_help',

        'digital_making1',
        'digital_making2',
        'digital_making3',
        'digital_making4',
        'digital_making5',

        'digital_making1_EN',
        'digital_making2_EN',
        'digital_making3_EN',
        'digital_making4_EN',
        'digital_making5_EN',

        'digital_making1_NL',
        'digital_making2_NL',
        'digital_making3_NL',
        'digital_making4_NL',
        'digital_making5_NL',

        'check_digital_making',

        'credits',
        'credits_EN',
        'credits_NL',
        'help_credits',
        'example_credits',

        'sdg1',
        'sdg1_icon',
        'sdg2',
        'sdg2_icon',
        'sdg3',
        'sdg3_icon',
        'sdg4',
        'sdg4_icon',
        'sdg5',
        'sdg5_icon',
        'sdg6',
        'sdg6_icon',
        'sdg7',
        'sdg7_icon',
        'sdg8',
        'sdg8_icon',
        'sdg9',
        'sdg9_icon',
        'sdg10',
        'sdg10_icon',
        'sdg11',
        'sdg11_icon',
        'sdg12',
        'sdg12_icon',
        'sdg13',
        'sdg13_icon',
        'sdg14',
        'sdg14_icon',
        'sdg15',
        'sdg15_icon',
        'sdg16',
        'sdg16_icon',
        'sdg17',
        'sdg17_icon',

        'literacy',
        'numeracy',
        'scientific_literacy',
        'ict_literacy',
        'financial_literacy',
        'civic_literacy',
        'critical_thinking',
        'communication',
        'collaboration',
        'creativity',
        'initiative',
        'adaptability',
        'curiosity',
        'leadership',
        'social_awareness',
        'abstraction',
        'generalization',
        'decomposition',
        'algorithmic_thinking',
        'evaluation',

        'literacy_icon',
        'numeracy_icon',
        'scientific_literacy_icon',
        'ict_literacy_icon',
        'financial_literacy_icon',
        'civic_literacy_icon',
        'critical_thinking_icon',
        'communication_icon',
        'collaboration_icon',
        'creativity_icon',
        'initiative_icon',
        'adaptability_icon',
        'curiosity_icon',
        'leadership_icon',
        'social_awareness_icon',
        'abstraction_icon',
        'decomposition_icon',
        'generalization_icon',
        'algorithmic_thinking_icon',
        'evaluation_icon',

        'language',
        'english',
        'dutch'
    );

    $PAGE->requires->strings_for_js($strings, 'atto_fablib');
}

