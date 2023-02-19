let graph = {}

const addEdge = (from, to) => {
  if (graph[from] == null) {
    graph[from] = [to]
  } else {
    graph[from].push(to)
  }
}

const buildGraph = edges => {
  for (let [from, to] of edges.map(r => r.split('-'))) {
    addEdge(from, to)
    addEdge(to, from)
  }
  return graph
}
