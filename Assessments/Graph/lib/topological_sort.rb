require_relative 'graph'

# Implementing topological sort using both Khan's and Tarian's algorithms

# Khan's algorithms assumes we are using a Direct Acyclic Graph
# Topological sort of a directed graph is a linear ordering of its vertices
# such that for every directed edge uv, from vertex u to vertex v, u comes
# before v in the ordering

def topological_sort(vertices)
  
end


# def topological_sort(vertices)
#   order = []
#   explored = Set.new
#   temp = Set.new
#   cycle = false

#   vertices.each do |vertex|
#     cycle = dfs!(vertex, explored, temp, order, cycle)  unless explored.include?(vertex)
#     return [] if cycle
#   end

#   order
# end


# def dfs!(vertex, explored, temp, order, cycle)
#   return true if temp.include?(vertex)
#   temp.add(vertex)

#   vertex.out_edges.each do |edge|
#     next_vertex = edge.to_vertex
#     cycle = dfs!(next_vertex, explored, temp, order, cycle) unless explored.include?(next_vertex)
#     return true if cycle
#   end

#   explored.add(vertex)
#   temp.delete(vertex)
#   order.unshift(vertex)
#   false
# end
