/*tonyleivah*/
function linkClick(linkId) {
	$.ajax({
		url: "/contact/linkClick/",
		type: "post",
		data: "linkId=" + linkId,
		success: () => { },
		error: () => { }
	})
}
