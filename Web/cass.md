# Caas
Solution
I looked up the index.js file to realise that the {message} is not validated before being passed to exec and, thus, piped an ls after passing a random message as instructed in the front end. This revealed the existence of falg.txt, which I cated to obtain the flag.

Alternatively, you can also use -ls on the URL to get the directories and cat the contents of the falg.txt file thus revealing the flag.

Flag
picoCTF{moooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo0o}
