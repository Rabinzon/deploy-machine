### Deploy machine
This is a little helper script, that can execute command on machine from config by http post request.

How to run:

`PORT=3000 CONF=config.yaml npm start`

Example config, yaml file:

```yaml
-
    url: w3fG0dfpSsc0yDEd9DQgkwrpwhL
    exec: cd /home/dir && git pull
-
    url: erdG0dsadfpSsc0yDEd9DQg
    exec: touch file.txt
```
