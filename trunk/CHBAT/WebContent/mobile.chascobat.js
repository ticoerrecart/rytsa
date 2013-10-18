	function cargarHtml(nombreHtml,div){
		$("#" + div).load(nombreHtml);
	}
	
	function cargarHtmlInstitucional(){
		document.write(
				'<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">' +
			    '<h3>Historia</h3>' +
				'bla bla' +
			'</div><!-- /collapsible -->' +
			'<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">' +
			    '<h3>Quienes Somos</h3>' +
				'adfs33333344444' +
			'</div><!-- /collapsible -->' +
			'<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">' +
			    '<h3>Nuestros Valores</h3>' +
				'sdag4686' +
			'</div><!-- /collapsible -->' +
			'<div data-role="collapsible" data-theme="b" data-content-theme="d" data-inset="false">' +
			    '<h3>Política de Calidad</h3>' +
				'sdgasdf' +
			'</div><!-- /collapsible -->'
		);
	}