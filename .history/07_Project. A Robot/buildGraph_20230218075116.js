let graph = {}

const addEdge = (from, to) => {
  if (graph[from] == null) {
    graph[from] = [to]
  } else {
    graph[from].push(to)
  }
}
