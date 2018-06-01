import Dexie from 'dexie'

const db = new Dexie('RamTasksDB')
db.version(1).stores({
    tasks: 'id, text, done'
})

const getAllTasks = () => db.tasks.orderBy('id').toArray()

const putTask = task => db.tasks.put(task)
  .then(() => {})
  .catch(err => {
    console.error('Error putting new task into DB:', err)
  })

const removeTask = id => db.tasks.delete(id)
  .then(() => {})
  .catch(err => {
    console.error('Error removing task from DB:', err)
  })

export default db
export { getAllTasks, putTask, removeTask }
