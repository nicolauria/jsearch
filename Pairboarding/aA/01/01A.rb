def digital_root(num)
  while num > 9
    num = digital_root_step(num)
  end
  num
end

def digital_root_step(num)
  total = 0
  while num > 0
    total += num % 10
    num /= 10
  end
  total
end

def caesar_cipher(str, shift)
  result = ""
  alphabet = ("a".."z").to_a

  str.split('').each do |el|
    if el == " "
      result << el
      next
    end

    old_idx = alphabet.index(el)
    new_idx = (old_idx + shift) % 26

    result << alphabet[new_idx]
  end

  result
end
