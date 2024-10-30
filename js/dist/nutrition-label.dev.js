"use strict";

/**
 * @file nutrition-label.js
 *
 * Style for Canadian Nutrition Facts Label
 * 
 * Copyright (c) 2014, Dandelion Web Design Inc. <http://dandelionwebdesign.com>
 */
jQuery(document).ready(function ($) {
  /**
   * Script to generate new vitamin label
   */
  $('.addNewVitamin').click(function (e) {
    e.preventDefault();
    var id = 1,
        length = $('.dynamic').length;

    if (length > 0) {
      id = $('.dynamic:last').data('id') + 1;
    }

    var html = '<div class="nutritionField dynamic" data-id=' + id + '>' + '<div class="label editable" title="Click to edit">' + '<label>Add Label' + id + ' Here</label>' + '</div>' + '<input type="hidden" value="Add Label' + id + ' Here" class="extraVitaminLabel" name="extra_vitamin_label[]">' + '<input type="text" value="" name="extra_vitamin[]">' + '<input type="text" value="" name="extra_vitamin_percent[]" placeholder="Percentage">' + '<a class="remove" href="#" title="Remove this label"></a>' + '<div class="clear"></div>' + '</div>';
    $('.nutritionField:last').after(html);
  });
  /**
   * Make the label editable.
   */

  $('.nutritionFieldsWrap').on('click', '.editable > label', function () {
    var value = $(this).html(),
        parent = $(this).parent(),
        input = '<input type="text" value="' + value + '" class="editableTextField" title="Click outside to save">';
    $(this).parent().html(input);
    parent.find('.editableTextField').focus().select();
  });
  /**
   * Change textbox to label on focus out.
   */

  $('.nutritionFieldsWrap').on('blur', '.editableTextField', function () {
    var value = $(this).val();

    if (!value) {
      value = "Add Label Here";
    }

    var vitaminLabel = $(this).closest('.nutritionField').find('.extraVitaminLabel');
    $(this).parent().html("<label>" + value + "</label>");
    vitaminLabel.val(value);
  });
  /**
   * Remove label.
   */

  $('.nutritionFieldsWrap').on('click', '.remove', function (e) {
    e.preventDefault();
    var sure = confirm('Are you sure?');

    if (sure) {
      $(this).parent().fadeOut(300, function () {
        $(this).remove();
      });
    }
  });
});