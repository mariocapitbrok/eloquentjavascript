let graph = {}

const addEdge = (from, to) => {
  if (graph[from] == null) {
    graph[from] = [to]
  } else {
    graph[from].push(to)
  }
}

const buildGraph = roads => {
  for (let [from, to] of roads.map(r => r.split('-'))) {
    addEdge(from, to)
    addEdge(to, from)
  }
  return graph
}

module.exports = buildGraph

/* const roadGraph = buildGraph(roads)

console.log(roadGraph) */
