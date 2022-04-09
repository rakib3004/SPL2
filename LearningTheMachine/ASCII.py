c='A'

print('ASCII code for upper case letters: ')
for i in range(26):

    x=ord(c)
    print(c, x)
    x=x+1
    c=chr(x)

x=x+6
c = chr(x)
print('ASCII code for lower case letters: ')

for i in range(26):

    x=ord(c)
    print(c, x)
    x=x+1
    c=chr(x)
