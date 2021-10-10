//get the modals
var moreInfoModal = document.getElementById("moreInfoModal")
var videoModal = document.getElementById("videoModal")
var videoEquipeModal = document.getElementById("videoEquipeModal")

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
	} else if (videoEquipeModal != null && event.target == videoEquipeModal) {
		closeVideoEquipeModal()
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

function openVideoEquipeModal() {
	videoEquipeModal.style.display = "block"
	reziseVideoEquipeFrame()
	var videoEquipeFrame = document.getElementById("videoEquipeFrame")
	videoEquipeFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
	trackingClick(4)
}

function closeVideoEquipeModal() {
	var videoEquipeFrame = document.getElementById("videoEquipeFrame")
	videoEquipeFrame.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
	videoEquipeModal.style.display = "none"
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

function reziseVideoEquipeFrame() {
	$('#videoEquipeFrame').height(($('#videoEquipeFrame').width())*0.5625)
}