function sum(a, b) {
	var c = parseInt(a, 10) + parseInt(b, 10);
	return c;
}

// function addNumbers() {
// 	var a = document.getElementById('num1').value;
// 	var b = document.getElementById('num2').value;
// 	var c = sum(a, b);
// 	document.getElementById('sum').value = c;
// }


$('#add').click(function() {
	var c = sum($('#num1').val(), $('#num2').val() );
	$('#sum').val(c);
});

$('#animate').click(function() {
	$("#error").slideDown(2000);
});




$('#submitForm').click(function(e) {
	e.preventDefault();
	var name = $('#name').val();
	var email = $('#email').val();
	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: 'http://localhost:8081/admin/employee',
		data: JSON.stringify({"name": name, "email": email}),
		contentType: 'application/json'
	});


	return false;
});

