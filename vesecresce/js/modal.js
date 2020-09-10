function openMoreInfoModal() {
    //get the modal
    var modal = document.getElementById("moreInfoModal");
    //get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    if (modal != null && span != null) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
};

function goToTop() {
	$("#moreInfoModal").animate({ scrollTop: 0 }, 500)
}