import Dexie from 'dexie';

const db = new Dexie('RamTasksDB')
db.version(1).stores({
    tasks: 'id, text, done'
})

const getAllTasks = () => db.tasks.toArray()

const putTask = task => db.tasks.put(task)
  .then(() => {})
  .catch(err => {
    console.error('Error putting new task into DB:', err)
  })

export default db
export { getAllTasks, putTask }
