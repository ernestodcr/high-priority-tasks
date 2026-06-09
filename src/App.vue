<script setup>
import TaskForm from './components/TaskForm.vue'
import TaskCard from './components/TaskCard.vue'
import { useTasks } from './composables/useTasks.js'

const { tasks, completedCount, addTask, toggleTaskCompleted, removeTask } = useTasks()
</script>

<template>
  <main class="app-main">
    <header class="app-header">
      <h1>Lista de Tareas</h1>
    </header>

    <TaskForm @add-task="addTask" />

    <section class="tasks-section" aria-labelledby="tasks-heading">
      <h2 id="tasks-heading" class="visually-hidden">Tareas registradas</h2>

      <p v-if="tasks.length === 0" class="empty-state">
        No hay ninguna tarea
      </p>

      <template v-else>
        <p class="tasks-summary" aria-live="polite">
          Tareas completadas: {{ completedCount }} de {{ tasks.length }}
        </p>
        <ul class="task-list">
          <TaskCard
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            @submit-completed="toggleTaskCompleted"
            @submit-eliminate="removeTask"
          />
        </ul>
      </template>
    </section>
  </main>
</template>

<style scoped>
.app-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.app-header h1 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
  letter-spacing: -0.025em;
}

.tasks-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tasks-summary {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-muted);
  margin: 0;
}

.empty-state {
  text-align: center;
  color: var(--text-muted);
  padding: 2rem 1rem;
  margin: 0;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
