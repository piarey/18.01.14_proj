/* chkSubmit(target validate, msg) */
function chkSubmit(v_item, v_msg) {
	if (v_item.val().replace(/\s/g, "") == "") {
		alert(v_msg + " 잘못되었습니다.");
		v_item.val("");
		v_item.focus();
		return false;
	} else {
		return true;
	}
}