var visible = false;

function showContact() {
	if (visible) {
		visible = false;
		//$("#foot").animate({bottom: '1em'});
		$("#contactBox").fadeOut();
	}
	else {
		visible = true;
		//$("#foot").animate({top: '100px'});
		$("#contactBox").fadeIn("slow");
	}
}