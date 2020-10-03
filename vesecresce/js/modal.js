//get the modals
var modal = document.getElementById("moreInfoModal");
var videoModal = document.getElementById("videoModal");
//get the <span> element that closes the modal
var closeModal = document.getElementById("closeModal");

var goToTopButton = document.getElementById("goToTopButton");

if (modal != null && closeModal != null) {
    closeModal.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = (event) => {
	if (videoModal != null && event.target == videoModal) {
		closeVideoModal()
	}
}

$("#moreInfoModal").scroll(() => {
	scrollFunction()
})

function openMoreInfoModal() {
	trackingClick(2)
    modal.style.display = "block"
}

function openVideoModal() {
	videoModal.style.display = "block"
	reziseVideoFrame()
	var videoFrame = document.getElementById("videoFrame")
	videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
	trackingClick(3)
}

function closeVideoModal() {
	var videoFrame = document.getElementById("videoFrame")
	videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
	videoModal.style.display = "none"
}

function goToTop() {
	$("#moreInfoModal").animate({ scrollTop: 0 }, 500)
}

function scrollFunction() {
	if ($("#moreInfoModal").scrollTop() > 20) {
		goToTopButton.style.display = "block";
	} else {
		goToTopButton.style.display = "none";
	}
}

function goToTopFunction() {
	$("#moreInfoModal").animate({ scrollTop: 0 }, 500)
}

function reziseVideoFrame() {
	$('#videoFrame').height(($('#videoFrame').width())*0.5625)
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