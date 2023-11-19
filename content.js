const url = 'https://accounts.tsu.ru/Account/Choose2?applicationId=1036&redirectUri=https%3A%2F%2Fmoodle.tsu.ru%2Flogin%2Faccounts_tsu%2Flogin_confirm.php';

if (document.querySelector('button[class ="btn-login"]') != null || document.querySelector('a[id ="login_url"]')!= null)
{
    document.location.href = url
}
if(String(document.location.href).indexOf('accounts.tsu.ru') != -1){
    document.querySelector('button[class="btn btn-lg btn-primary"]').click();
}


