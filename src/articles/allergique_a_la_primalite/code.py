primes = [2, 3, 5, 7, 11,
          13, 17, 19, 23, 29,
          31, 37, 41, 43, 47,
          53, 59, 61, 67, 71,
          73, 79, 83, 89, 97]

def ok(n):
	for a in range(1, 7):
		maskA = 2**a
		if n >= maskA:
			for b in range(a):
				maskB = 2**b
				v = n ^ maskA ^ maskB
				if v in primes:
					return False
	return True

for n in range(10, 101):
    if ok(n):
        print(n, bin(n))
