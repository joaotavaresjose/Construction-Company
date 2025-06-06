function TaskList({ tasks, onToggleComplete, onDeleteTask, onEditTask }) {
    try {
        const [filter, setFilter] = React.useState('all');
        const [sortBy, setSortBy] = React.useState('created');

        const filteredTasks = tasks.filter(task => {
            switch (filter) {
                case 'completed': return task.completed;
                case 'pending': return !task.completed;
                case 'high': return task.priority === 'high';
                case 'medium': return task.priority === 'medium';
                case 'low': return task.priority === 'low';
                default: return true;
            }
        });

        const sortedTasks = [...filteredTasks].sort((a, b) => {
            switch (sortBy) {
                case 'priority':
                    const priorityOrder = { high: 3, medium: 2, low: 1 };
                    return priorityOrder[b.priority] - priorityOrder[a.priority];
                case 'dueDate':
                    if (!a.dueDate && !b.dueDate) return 0;
                    if (!a.dueDate) return 1;
                    if (!b.dueDate) return -1;
                    return new Date(a.dueDate) - new Date(b.dueDate);
                default:
                    return new Date(b.createdAt) - new Date(a.createdAt);
            }
        });

        return (
            <div data-name="task-list" data-file="components/TaskList.js" className="glass-effect rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-white mb-4 md:mb-0">
                        <i className="fas fa-list-ul mr-2"></i>
                        Suas Tarefas ({sortedTasks.length})
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                        >
                            <option value="all" className="text-gray-800">Todas</option>
                            <option value="pending" className="text-gray-800">Pendentes</option>
                            <option value="completed" className="text-gray-800">Concluídas</option>
                            <option value="high" className="text-gray-800">Alta Prioridade</option>
                            <option value="medium" className="text-gray-800">Média Prioridade</option>
                            <option value="low" className="text-gray-800">Baixa Prioridade</option>
                        </select>
                        
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                        >
                            <option value="created" className="text-gray-800">Data de Criação</option>
                            <option value="priority" className="text-gray-800">Prioridade</option>
                            <option value="dueDate" className="text-gray-800">Data de Vencimento</option>
                        </select>
                    </div>
                </div>

                {sortedTasks.length === 0 ? (
                    <div className="text-center py-12">
                        <i className="fas fa-clipboard-list text-4xl text-white/30 mb-4"></i>
                        <p className="text-white/60 text-lg">
                            {filter === 'all' ? 'Nenhuma tarefa encontrada' : 'Nenhuma tarefa corresponde ao filtro selecionado'}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {sortedTasks.map(task => (
                            <TaskItem
                                key={task.objectId}
                                task={task}
                                onToggleComplete={onToggleComplete}
                                onDeleteTask={onDeleteTask}
                                onEditTask={onEditTask}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('TaskList component error:', error);
        reportError(error);
    }
}
