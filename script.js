const password = "siavash";

function checkPassword() {

    const input = document.getElementById("password").value;

    if(input === password){

        document.body.innerHTML = `
        <div style="text-align:center;color:#00ff00;background:black;height:100vh;padding-top:80px;font-family:monospace;">
            <h1 style="font-size:60px;text-shadow:0 0 20px #00ff00;">
            NIGHT LORD SIAVASH
            </h1>

            <h2>ACCESS GRANTED</h2>

            <pre style="font-size:18px;">
root@nightlord:~$ whoami
Night Lord Siavash

root@nightlord:~$ status
Connected...

root@nightlord:~$
            </pre>
        </div>
        `;

    }else{

        document.getElementById("error").innerHTML="ACCESS DENIED";

    }

}
