# find the factors of a number in square_root of n time complexity
# determine if a number is prime in square_root time complexity

def factors(num)

end

def is_prime?(num)

end

# TIME COMPLEXITY ORDER

# constant
# sqaure root
# log n
# linear
# n log n
# n ^ 2 (quadratic)
# 2 ^ n (exponential)
# n! (factorial)

def base_converter(num, base)
  return "" if num == 0

  digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "a", "b", "c", "d", "e", "f"]

  base_converter(num / base, base) + digits[num % base]
end
