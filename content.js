const url = 'https://lms.tsu.ru/login/accounts_tsu/login.php'

if (document.querySelector('button[class ="btn-login"]') != null || document.querySelector('a[id ="login_url"]')!= null)
{
    document.location.href = url
}
if(String(document.location.href).indexOf('accounts.tsu.ru') != -1){
    document.querySelector('button[class="btn btn-lg btn-primary"]').click();
}


