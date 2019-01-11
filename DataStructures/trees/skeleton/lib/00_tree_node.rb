module Searchable
  def dfs(target)
    return self if self.value == target
    # return nil if self.nil?

    self.children.each do |child|
      result = child.dfs(target)
      return result unless result.nil?
    end
    nil
  end

  def bfs(root, target)
    nodes = [self]
    until nodes.empty?
      node = nodes.shift
      return node if node == target
      nodes.concat(node.children)
    end
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
    if self.parent
      self.parent._children.delete(self)
    end

    @parent = parent
    self.parent._children << self unless self.parent.nil?
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
