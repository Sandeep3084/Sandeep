# Trivial Flag Transfer Protocol
Solution
On opening the given file with wireshark, I first exported the exchanged files and decided to read each one of them. I deciphered instructions.txt first, realising that it was a ROT13 cipher and hence, similarly, decoded plan to reveal that the DUEDILIGENCE	 was some sort of a password. I decided to use steghide on every exported image in the directory and finally found the required flag in picture3.bmp.

Flag
picoCTF{h1dd3n_1n_pLa1n_51GHT_18375919}
