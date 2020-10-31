function goToProduct() {
	trackingClick(1)
	
	var launchDatetime = getProductLaunchDatetime()
	var now = new Date().getTime()
	if (launchDatetime > now) {
		$('html, body').stop().animate({
			scrollTop: $("#countdown").offset().top - 10
		}, 1000)
	} else {
		window.open("https://www.sympla.com.br/programa-ve-se-cresce---aceleradas__1037648", "_blank")
	}
}

function goToInscription() {
	trackingClick(5)
	window.open("https://www.sympla.com.br/programa-ve-se-cresce---aceleradas__1037648", "_blank")

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
	return new Date(2020, 11 - 1, 6, 21, 00, 00).getTime()
}

function getProductEndDatetime() {
	return new Date(2020, 11 - 1, 13, 23, 59, 00).getTime()
}

function copyToClipboard(elementId) {
    var el = document.createElement('textarea');
    el.value = elementId;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
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