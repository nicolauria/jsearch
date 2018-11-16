module Searchable
  def dfs(root, target)
    return nil if root.nil?
    return root if root == target

    root.children.each do |child|
      search_res = dfs(child, target)
      return search_res unless search_res.nil?
    end
  end

  def bfs(root, target)
    queue = [root]
    until queue.empty?
      node = queue.shift
      return node if node.value == target

      node.children.each { |child| queue << child }
    end
    nil
  end
end

class PolyTreeNode
  include Searchable

  attr_accessor :value
  attr_reader :parent

  def initialize(value)
    @value, @parent, @children = value, nil, []
  end

  def children
    @children.dup
  end

  def parent=(parent)
    return if self.parent == parent

    if self.parent
      self.parent._children.delete(self)
    end

    @parent = parent
    self.parent._children << self unless self.parent.nil?

    self
  end

  def add_child(child)
    child.parent = self
  end

  def remove_child(child)
    child.parent = nil
  end

  protected
  def _children
    @children
  end
end
