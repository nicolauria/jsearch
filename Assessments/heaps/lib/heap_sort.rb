require_relative "heap"

class Array
  def heap_sort!
    prc ||= Proc.new { |a, b| a <=> b }

    (0...length).each do |idx|
      BinaryMinHeap.heapify_up(self, idx, idx + 1, &prc)
    end

    (length - 1).downto(0).each do |idx|
      self[0], self[idx] = self[idx], self[0]
      BinaryMinHeap.heapify_down(self, 0, idx, &prc)
    end

    self.reverse!
  end
end
