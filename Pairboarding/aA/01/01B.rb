# we only have to check the substrings of str1 and then use includes with str2

def longest_commong_substring(str1, str2)
  lcs = ""

  str1.length.times do |i|
    j = i + 1
    while j < str1.length
      substring = str1[i..j]
      if str2.include?(substring) && substring.length > lcs.length
        lcs = substring
      end
      j += 1
    end
  end

  lcs
end
