class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    prc ||= Proc.new { |a, b| a <=> b }
    @prc = prc
    @store = []
  end

  def count
    @store.length
  end

  def extract
    @store[0], @store[count - 1] = @store[count - 1], @store[0]
    val = @store.pop
    BinaryMinHeap.heapify_down(@store, 0, count, &@prc)
    val
  end

  def peek
    @store[0]
  end

  def push(val)
    @store.push(val)
    BinaryMinHeap.heapify_up(@store, count - 1, count, &@prc)
  end

  public
  def self.child_indices(len, parent_index)
    indices = [(parent_index * 2) + 1, (parent_index * 2) + 2]
    indices.select { |num| num.between?(0, len - 1)}
  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new { |a, b| a <=> b }

    idxs = self.child_indices(len, parent_idx)
    return array if idxs.empty?

    smallest_idx = nil;
    if idxs.length == 1
      smallest_idx = idxs[0]
    else
      if prc.call(array[idxs[0]], array[idxs[1]]) > 0
        smallest_idx = idxs[1]
      else
        smallest_idx = idxs[0]
      end
    end

    smallest_child_val = array[smallest_idx]
    parent_val = array[parent_idx]

    if prc.call(smallest_child_val, parent_val) < 0
      array[smallest_idx], array[parent_idx] = array[parent_idx], array[smallest_idx]
      BinaryMinHeap.heapify_down(array, smallest_idx, len, &prc)
    end
    array
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new { |a, b| a <=> b }

    return array if child_idx == 0
    parent_idx = self.parent_index(child_idx)

    if prc.call(array[child_idx], array[parent_idx]) < 0
      array[child_idx], array[parent_idx] = array[parent_idx], array[child_idx]
      BinaryMinHeap.heapify_up(array, parent_idx, len, &prc)
    end
    array
  end
end
