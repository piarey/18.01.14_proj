/* chkSubmit(target validate, msg) */
function chkSubmit(v_item, v_msg) {
	if (v_item.val().replace(/\s/g, "") == "") {
		alert(v_msg + " 입력해주세요.");
		v_item.val("");
		v_item.focus();
		return false;
	} else {
		return true;
	}
}