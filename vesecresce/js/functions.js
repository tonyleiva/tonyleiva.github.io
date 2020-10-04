function goToProduct() {
	trackingClick(1)
	//window.open("https://www.hotmart.com/product/programa-ve-se-cresce/H41183358H", "_blank")
	
	$('html, body').stop().animate({
		scrollTop: $("#newsletter").offset().top - 49
	}, 1000)
}

function isMobileBrowser() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
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