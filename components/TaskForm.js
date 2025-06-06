function TaskForm({ onAddTask }) {
    try {
        const [title, setTitle] = React.useState('');
        const [description, setDescription] = React.useState('');
        const [priority, setPriority] = React.useState('medium');
        const [dueDate, setDueDate] = React.useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!title.trim()) return;

            const newTask = {
                title: title.trim(),
                description: description.trim(),
                priority,
                dueDate: dueDate || null,
                completed: false,
                createdAt: new Date().toISOString()
            };

            onAddTask(newTask);
            setTitle('');
            setDescription('');
            setPriority('medium');
            setDueDate('');
        };

        return (
            <form data-name="task-form" data-file="components/TaskForm.js" 
                  onSubmit={handleSubmit} className="glass-effect rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                    <i className="fas fa-plus-circle mr-2"></i>
                    Nova Tarefa
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Título da tarefa"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                        required
                    />
                    
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                        <option value="low" className="text-gray-800">Baixa Prioridade</option>
                        <option value="medium" className="text-gray-800">Média Prioridade</option>
                        <option value="high" className="text-gray-800">Alta Prioridade</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <textarea
                        placeholder="Descrição (opcional)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                        rows="2"
                    />
                    
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                    <i className="fas fa-plus"></i>
                    <span>Adicionar Tarefa</span>
                </button>
            </form>
        );
    } catch (error) {
        console.error('TaskForm component error:', error);
        reportError(error);
    }
}
