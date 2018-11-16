# Implement a queue with #enqueue and #dequeue, as well as a #max API,
# a method which returns the maximum element still in the queue. This
# is trivial to do by spending O(n) time upon dequeuing.
# Can you do it in O(1) amortized? Maybe use an auxiliary storage structure?

# Use your RingBuffer to achieve optimal shifts! Write any additional
# methods you need.

require_relative 'ring_buffer'

class QueueWithMax
  attr_accessor :store

  def initialize
    @store = RingBuffer.new
    @max_que = RingBuffer.new
  end

  def enqueue(val)
    @store.push(val)
    update_max_que(val)
  end

  def dequeue
    val = @store.shift
    @max_que.shift if val == @max_que[0]
    val
  end

  def max
    @max_que[0] if @max_que.length > 0
  end

  def length
    @store.length
  end

  def update_max_que(val)
    while @max_que.length > 0 && @max_que[@max_que.length - 1] < val
      @max_que.pop
    end
    @max_que.push(val)
  end
end
