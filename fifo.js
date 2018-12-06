// Queues [кью] Очередь
// FIFO

function createQueue() {
  const queue = []
  return {
    enqueue(item) {
      queue.unshift(item)
    },
    dequeue() {
      queue.pop()
    },
    peek(){
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    },
    isEmpty() {
      return queue.length === 0
    }
  }
}


const q = createQueue()
console.log(q.length)