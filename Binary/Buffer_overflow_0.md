Buffer Overflow 0

It is found that the gets function is prone to buffer overflow. If we exceed the storage capacity
of gets it will overflow into different memory location. The SIGSEGV (Segmentation function) checks if there is any overflow beyond the bounds.
If we input a large number of characters and press enter, it causes buffer overflow and we get the flag.
