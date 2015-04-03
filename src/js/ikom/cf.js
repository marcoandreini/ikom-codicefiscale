jQuery(function($) {
	$('#billing\\:country_id').change(function(e) {
		var $this = $(this);
		var $input = $('#billing\\:vat_id');
		var $label = $('label[for="billing:vat_id"]');
		if ($this.val() == "IT") {
			$input.addClass('required-entry validate-alphanum');
			$label.addClass('required');
			$('<span id="vat_id_required"><em>*</em></span>').appendTo($label);
		} else {
			$input.removeClass('required-entry validate-alphanum');
			$label.removeClass('required');
			$('#vat_id_required').remove();
		}
	}).trigger('change');
});  
