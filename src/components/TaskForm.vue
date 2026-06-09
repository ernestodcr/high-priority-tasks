<script setup>
import { ref } from 'vue'
import { generateTaskId } from '@/utils/generateTaskId.js'

const emit = defineEmits(['add-task'])

const messageError = ref('')

const form = ref({
  task: '',
  priority: 'baja',
})

const createEmptyForm = () => ({
  task: '',
  priority: 'baja',
})

const submitForm = () => {
  const trimmedTask = form.value.task.trim()

  if (!trimmedTask) {
    messageError.value = 'El nombre de la tarea no puede estar vacío'
    return
  }

  emit('add-task', {
    id: generateTaskId(),
    task: trimmedTask,
    priority: form.value.priority,
    completed: false,
  })

  form.value = createEmptyForm()
  messageError.value = ''
}
</script>

<template>
  <section class="form-container" aria-labelledby="form-heading">
    <h2 id="form-heading">Crear Nueva Tarea</h2>

    <form @submit.prevent="submitForm" class="task-form" novalidate>
      <div class="form-group">
        <label for="taskName">Nombre de la tarea</label>
        <input
          id="taskName"
          v-model.trim="form.task"
          type="text"
          placeholder="Ej. Comprar leche"
          autocomplete="off"
          :aria-invalid="Boolean(messageError)"
          aria-describedby="taskName-error"
          required
        />
        <p
          v-if="messageError"
          id="taskName-error"
          class="message-error"
          role="alert"
        >
          {{ messageError }}
        </p>
      </div>

      <div class="form-group">
        <label for="taskPriority">Prioridad</label>
        <select id="taskPriority" v-model="form.priority" required>
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </div>

      <button type="submit" class="submit-btn">
        Agregar Tarea
      </button>
    </form>
  </section>
</template>

<style scoped>
.form-container {
  width: 100%;
  padding: 1.25rem;
  background-color: var(--bg-card);
  border-radius: var(--radius);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

@media (max-width: 479px) {
  .form-container {
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    padding: 1rem;
  }
}

h2 {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 1.5rem;
  letter-spacing: -0.025em;
}

.task-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-main);
}

input,
select {
  width: 100%;
  min-height: 46px;
  padding: 0 0.875rem;
  font-size: 0.95rem;
  color: var(--text-main);
  background-color: var(--bg-card);
  border: 1.5px solid var(--border);
  border-radius: 8px;
  box-sizing: border-box;
  transition: var(--transition);
  appearance: none;
}

input:focus-visible,
select:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-color: var(--primary);
}

input::placeholder {
  color: var(--text-muted);
  opacity: 0.8;
}

.message-error {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--error);
  margin: 0;
  animation: fadeIn 0.2s ease-out;
}

.submit-btn {
  width: 100%;
  min-height: 48px;
  margin-top: 0.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  background-color: var(--primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 2px 4px rgba(79, 70, 229, 0.2);
}

.submit-btn:hover {
  background-color: var(--primary-hover);
}

.submit-btn:active {
  transform: scale(0.98);
}

.submit-btn:focus-visible {
  outline: 2px solid var(--primary-hover);
  outline-offset: 2px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
