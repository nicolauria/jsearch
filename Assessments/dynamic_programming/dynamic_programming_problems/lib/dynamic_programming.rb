require 'byebug'

class DynamicProgramming
  def initialize
    @blair_cache = { 1 => 1, 2 => 2 }
  end

  def blair_nums(n)
    return @blair_cache[n] if @blair_cache[n]
    odd_num = 2 * (n - 1) - 1
    @blair_cache[n] = blair_nums(n - 1) + blair_nums(n - 2) + odd_num
  end

  def frog_hops_bottom_up(n)
    frog_cache_builder(n)[n]
  end

  def frog_cache_builder(n)
    ways_collection = [[[]], [[1]], [[1, 1], [2]]]
    return ways_collection if n < 3

    (3..n).each do |i|
      new_collection = []
      (1..3).each do |first_step|
        ways_collection[i - first_step].each do |way|
          new_set = [first_step]
          way.each do |step|
            new_set << step
          end
          new_collection << new_set
        end
      end
      ways_collection << new_collection
    end
    ways_collection
  end

  def knapsack(weights, values, capacity)

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  # Bonus
  def maze_solver(maze, start_pos, end_pos)
  end
end
