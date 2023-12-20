# babygame01
Solution
I opened the game in ghidra and realised that p could be used to traverse immediately to x but only resulted in a "You Win!" without the flag. After playing around for a while, I discovered that going back four positions from the top-leftmost visible position changes the value of flag to 64 after which I pressed p to win the game and retrieve the flag.

Flag
picoCTF{gamer_m0d3_enabled_8985ce0e}
