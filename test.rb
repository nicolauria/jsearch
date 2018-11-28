def permutations(arr)
  return [arr] if arr.length <= 1

  first = arr.shift
  perms = permutations(arr)

  sub_arr = []
  perms.each do |perm|
    (0..perm.length).each do |i|
      sub_arr << perm[0...i] + [first] + perm[i..-1]
    end
  end

  return sub_arr
end

p permutations([1, 2, 3])
