// Selecionar elementos
const taskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Contador para IDs únicos
let taskCounter = 4; // Começando em 4 porque já temos 3 tarefas iniciais

// Adicionar evento de clique ao botão de adicionar
addButton.addEventListener('click', addTask);

// Adicionar evento de tecla ao input
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Adicionar eventos aos itens existentes
setupExistingTasks();

// Função para adicionar nova tarefa
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    // Criar novo item de lista
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.setAttribute('data-id', taskCounter++);
    li.setAttribute('data-completed', 'false');
    // Adicionar conteúdo HTML
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox">
        <span class="todo-text">${taskText}</span>
        <input type="text" class="edit-input">
        <div class="todo-actions">
            <button class="edit-btn">✏️</button>
            <button class="delete-btn">🗑️</button>
        </div>
    `;
    // Adicionar à lista
    taskList.appendChild(li);
    // Limpar input
    taskInput.value = '';
    // Configurar eventos para o novo item
    setupTaskEvents(li);
}

// Configurar eventos para tarefas existentes
function setupExistingTasks() {
    const tasks = document.querySelectorAll('.todo-item');
    tasks.forEach(task => {
        setupTaskEvents(task);
    });
}

// Configurar eventos para uma tarefa
function setupTaskEvents(taskItem) {
    const checkbox = taskItem.querySelector('.todo-checkbox');
    const editBtn = taskItem.querySelector('.edit-btn');
    const deleteBtn = taskItem.querySelector('.delete-btn');
    // Evento para marcar como concluído
    checkbox.addEventListener('change', () => {
        toggleComplete(taskItem, checkbox);
    });
    // Evento para editar
    editBtn.addEventListener('click', () => {
        makeEditable(taskItem);
    });
    // Evento para excluir
    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });
}

// Marcar como concluído
function toggleComplete(taskItem, checkbox) {
    // Alternar a classe 'completed'
    taskItem.classList.toggle('completed');
    // Atualizar o atributo data-completed
    const isCompleted = checkbox.checked;
    taskItem.setAttribute('data-completed', isCompleted);
}

// Tornar editável
function makeEditable(taskItem) {
    // Adicionar classe 'editing'
    taskItem.classList.add('editing');
    // Obter elementos
    const textSpan = taskItem.querySelector('.todo-text');
    const editInput = taskItem.querySelector('.edit-input');
    // Configurar input de edição
    editInput.value = textSpan.textContent;
    editInput.focus();
    // Salvar ao perder foco
    editInput.addEventListener('blur', () => {
        saveEdit(taskItem);
    });
    // Salvar ao pressionar Enter
    editInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            saveEdit(taskItem);
            e.preventDefault();
        }
    });
}

// Salvar edição
function saveEdit(taskItem) {
    const textSpan = taskItem.querySelector('.todo-text');
    const editInput = taskItem.querySelector('.edit-input');
    // Atualizar o texto
    textSpan.textContent = editInput.value;
    // Remover classe 'editing'
    taskItem.classList.remove('editing');
}
