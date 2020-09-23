//get the modal
var modal = document.getElementById("moreInfoModal");
//get the <span> element that closes the modal
var closeModal = document.getElementById("closeModal");

var goToTopButton = document.getElementById("goToTopButton");

if (modal != null && closeModal != null) {
    closeModal.onclick = function() {
        modal.style.display = "none";
    }
}

function openMoreInfoModal() {
	trackingClick(2)
    modal.style.display = "block"
};

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

$("#moreInfoModal").scroll(() => {
	scrollFunction()
})

async function trackingClick(itemID) {
	$.ajax({
		url: "/metric/trackingClick/",
		type: "post",
		data: "itemID=" + itemID,
		success: () => { },
		error: () => { }
	})
}