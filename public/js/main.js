function reload() {
	setTimeout(function () {
		location.reload();
	}, 500);
}

$(function () {
	$('ul').on('click', 'button[data-id]', function (event) {
		var id = $(this).data("id");
		$.ajax("/api/burger/" + id, {
			type: "PUT"
		}).then(reload);
	});

	$('form').on('submit', function (event) {
		event.preventDefault();

		$.ajax("/api/burger", {
			type: "POST",
			data: {
				name: $('input[name="name"]').val().trim()
			}
		}).then(reload);
	});
});
