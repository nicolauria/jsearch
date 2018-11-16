require 'byebug'

class Fibonacci
  def initialize
    @cache = { 1 => 1, 2 => 1 }
  end

  def fibonacci(n)
    return @cache[n] unless @cache[n].nil?

    ans = fibonacci(n - 1) + fibonacci(n - 2)
    @cache[n] = ans
    return ans
  end
end
