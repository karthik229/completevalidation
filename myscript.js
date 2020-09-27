function validation()
{
    var email=document.getElementById('email');
    var password=document.getElementById('password');

    if (email.value.trim()=="")
    {
      document.getElementById('label1').style.visibility="visible"
      email.style.border="4px solid red";
      return false;
    }
    if (password.value.trim()=="")
    {
      document.getElementById('label2').style.visibility="visible"
      password.style.border="4px solid red";
      return false;
    }
}
