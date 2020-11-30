function dangKy() {
    var frm = document.forms["dangky"];
    var email = frm["email"].value;
    var atposts = email.indexOf("@");
    var atposts2 = email.lastIndexOf("@");
    var dotpost = email.lastIndexOf(".");
   if(atposts > 0 && atposts == atposts2 && (dotpost - atposts) >=1 && 
   (email.length -1 -dotpost) >= 2 ) {
       alert("Ðăng ký Email thành công");
   }
   else {
       alert("Ðăng ký Email không hợp lệ. Mời đăng ký lại");
   }
}