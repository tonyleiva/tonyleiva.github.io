//get the modals
var moreInfoModal = document.getElementById("moreInfoModal")
var videoModal = document.getElementById("videoModal")
//get the <span> element that closes the modal
var closeMoreInfoModalBtn = document.getElementById("closeModal")

var goToTopButton = document.getElementById("goToTopButton")

if (moreInfoModal != null && closeMoreInfoModalBtn != null) {
    closeMoreInfoModalBtn.onclick = () => {
		closeMoreInfoModal()
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
    moreInfoModal.style.display = "block"
}

function closeMoreInfoModal() {
	moreInfoModal.style.display = "none"
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
	videoFrame.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
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
