# try to solve problem in n**2 time and O(1) space complexity

def longest_palindrome(str)
  longest_pali = ""

  (str.length).downto(2).each do |j|
    (0...str.length - 1).each do |i|
      if i + j <= str.length
        sub_str = str.slice(i, j)
        if sub_str.split('').reverse == sub_str.split('') && sub_str.length > longest_pali.length
           longest_pali = sub_str
        end
      end
    end
  end
  longest_pali
end

p longest_palindrome('abcracecaradef')
