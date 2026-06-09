import { computed, ref } from 'vue'
import { initialTasks } from '@/data/mockTasks.js'

export function useTasks() {
  const tasks = ref(structuredClone(initialTasks))

  const completedCount = computed(
    () => tasks.value.filter((task) => task.completed).length
  )

  const addTask = (task) => {
    tasks.value = [...tasks.value, task]
  }

  const toggleTaskCompleted = (id) => {
    tasks.value = tasks.value.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  }

  const removeTask = (id) => {
    tasks.value = tasks.value.filter((task) => task.id !== id)
  }

  return {
    tasks,
    completedCount,
    addTask,
    toggleTaskCompleted,
    removeTask,
  }
}
