Wrote python code

def decode(number):
    r = number % 37
    return r

def main():
    f = open("message.txt", "r", encoding="UTF-8")
    lst = f.read().split()
    # print(lst[0])

    dec_lst = []

    for i in range(len(lst)):
        dec_lst.append(decode(int(lst[i])))

    print(dec_lst)

if __name__ == '__main__':
    main()

Decrypt the file according to the rules
[17, 26, 20, 13, 3, 36, 13, 36, 17, 26, 20, 13, 3, 36, 1, 32, 1, 28, 31, 31, 29, 27]
→ [R, 0, U, N, D, _, N, _, R, 0, U, N, D, _, B, 6, B, 2, 5, 5, 3, 1]

Flag: picoCTF{R0UND_N_R0UND_79C18FB3}
