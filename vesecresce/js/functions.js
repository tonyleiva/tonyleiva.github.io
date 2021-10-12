function goToProduct() {
	trackingClick(1)
	// window.open("https://www.sympla.com.br/programa-ve-se-cresce__1099946", "_blank")
	
	$('html, body').stop().animate({
		scrollTop: $("#quero-anchor").offset().top - 30
	}, 1000)

	// var launchDatetime = getProductLaunchDatetime()
	// var now = new Date().getTime()
	// if (launchDatetime > now) {
	// 	$('html, body').stop().animate({
	// 		scrollTop: $("#countdown").offset().top - 10
	// 	}, 1000)
	// } else {
	// 	window.open("https://www.sympla.com.br/programa-ve-se-cresce---aceleradas__1037648", "_blank")
	// }
}

function goToInscription() {
	trackingClick(5)
	window.open("https://www.sympla.com.br/programa-ve-se-cresce__1099946", "_blank")

	// var launchDatetime = getProductLaunchDatetime()
	// var now = new Date().getTime()
	// if (launchDatetime > now) {
	// 	$('html, body').stop().animate({
	// 		scrollTop: $("#newsletter").offset().top
	// 	}, 1000)
	// } else {
	// 	window.open("https://www.hotmart.com/product/programa-ve-se-cresce/H41183358H", "_blank")
	// }
}

function isMobileBrowser() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function getProductLaunchDatetime() {
	return new Date(2021, 1 - 1, 18, 11, 00, 00).getTime()
}

function getProductEndDatetime() {
	return new Date(2021, 1 - 1, 18, 11, 00, 00).getTime()
}

function copyToClipboard(elementId) {
    var el = document.createElement('textarea');
    el.value = elementId;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
}

function showVerMaisGrupo() {
	$(".ver-mais").css("display", "unset")
	$(".list-item").css("display", "none")
}

function clickVerMaisGrupo(grupoId) {
	$(`#${grupoId} .ver-mais`).css("display", "none")
	$(`#${grupoId} .list-item`).css("display", "list-item")
}

async function trackingClick(itemID) {
	$.ajax({
		url: "/metric/trackingClick/",
		type: "post",
		data: "itemID=" + itemID,
		success: () => { },
		error: () => { }
	})
}