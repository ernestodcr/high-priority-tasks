<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
    validator: (value) =>
      typeof value.id !== 'undefined' &&
      typeof value.task === 'string' &&
      ['baja', 'media', 'alta'].includes(value.priority) &&
      typeof value.completed === 'boolean',
  },
})

const emit = defineEmits(['submit-completed', 'submit-eliminate'])

const submitCompletedTask = (id) => {
  emit('submit-completed', id)
}

const submitEliminate = (id) => {
  emit('submit-eliminate', id)
}
</script>

<template>
  <li class="task-card" :class="{ 'card-completed': task.completed }">
    <div class="task-content">
      <p :class="{ 'task-completed': task.completed }" class="task-text">
        {{ task.task }}
      </p>
      <span
        :class="['priority-badge', task.priority]"
        :aria-label="`Prioridad ${task.priority}`"
      >
        {{ task.priority }}
      </span>
    </div>

    <div class="task-actions">
      <button
        type="button"
        :class="['btn', task.completed ? 'btn-success' : 'btn-outline']"
        :aria-label="task.completed
          ? `Marcar '${task.task}' como pendiente`
          : `Completar tarea '${task.task}'`"
        @click="submitCompletedTask(task.id)"
      >
        {{ task.completed ? 'Completada' : 'Completar' }}
      </button>

      <button
        v-if="!task.completed"
        type="button"
        class="btn btn-danger"
        :aria-label="`Eliminar tarea '${task.task}'`"
        @click="submitEliminate(task.id)"
      >
        Eliminar
      </button>
    </div>
  </li>
</template>

<style scoped>
.task-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  list-style: none;
}

.card-completed {
  background-color: #f8fafc;
  opacity: 0.85;
}

.task-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
}

.task-text {
  margin: 0;
  font-size: clamp(0.95rem, 2.5vw, 1rem);
  font-weight: 600;
  color: var(--text-main);
  line-height: 1.4;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.task-completed {
  text-decoration: line-through;
  color: var(--text-muted);
}

.priority-badge {
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.baja {
  background-color: #f0fdf4;
  color: #16a34a;
}

.media {
  background-color: #fffbeb;
  color: #d97706;
}

.alta {
  background-color: #fef2f2;
  color: #dc2626;
}

.task-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
}

.btn {
  flex: 1 1 calc(50% - 0.25rem);
  min-height: 38px;
  min-width: 7rem;
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-outline {
  background-color: var(--bg-card);
  border: 1.5px solid #cbd5e1;
  color: #475569;
}

.btn-outline:hover {
  background-color: #f8fafc;
  border-color: #94a3b8;
}

.btn-success {
  background-color: var(--success);
  color: #ffffff;
}

.btn-success:hover {
  background-color: var(--success-hover);
}

.btn-danger {
  background-color: var(--danger);
  color: #ffffff;
}

.btn-danger:hover {
  background-color: var(--danger-hover);
}

.btn:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

@media (min-width: 640px) {
  .task-card {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
  }

  .task-actions {
    width: auto;
    flex-wrap: nowrap;
    min-width: min(100%, 15rem);
    justify-content: flex-end;
  }

  .btn {
    flex: 0 0 auto;
    padding: 0 1rem;
  }
}

@media (max-width: 359px) {
  .btn {
    flex: 1 1 100%;
  }
}
</style>
