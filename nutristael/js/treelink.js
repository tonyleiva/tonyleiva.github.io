/*tonyleivah*/
function linkClick(linkId) {
	$.ajax({
		url: "/links/linkClick/",
		type: "post",
		data: "linkId=" + linkId,
		success: () => { },
		error: () => { }
	})
}
