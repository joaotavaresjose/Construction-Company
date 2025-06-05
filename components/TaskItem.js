function TaskItem({ task, onToggleComplete, onDeleteTask, onEditTask }) {
    try {
        const [isEditing, setIsEditing] = React.useState(false);
        const [editTitle, setEditTitle] = React.useState(task.title);
        const [editDescription, setEditDescription] = React.useState(task.description);

        const handleSaveEdit = () => {
            if (!editTitle.trim()) return;
            onEditTask(task.objectId, {
                title: editTitle.trim(),
                description: editDescription.trim()
            });
            setIsEditing(false);
        };

        const getPriorityColor = () => {
            switch (task.priority) {
                case 'high': return 'text-red-400';
                case 'medium': return 'text-yellow-400';
                case 'low': return 'text-green-400';
                default: return 'text-gray-400';
            }
        };

        const getPriorityIcon = () => {
            switch (task.priority) {
                case 'high': return 'fas fa-exclamation-circle';
                case 'medium': return 'fas fa-minus-circle';
                case 'low': return 'fas fa-check-circle';
                default: return 'fas fa-circle';
            }
        };

        return (
            <div data-name="task-item" data-file="components/TaskItem.js" 
                 className={`glass-effect rounded-lg p-4 mb-3 fade-in priority-${task.priority} ${task.completed ? 'task-completed' : ''}`}>
                <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                        <button
                            onClick={() => onToggleComplete(task.objectId)}
                            className={`mt-1 ${task.completed ? 'text-green-400' : 'text-white/40'} hover:text-green-400 transition-colors`}
                        >
                            <i className={`fas ${task.completed ? 'fa-check-square' : 'fa-square'}`}></i>
                        </button>
                        
                        <div className="flex-1">
                            {isEditing ? (
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 rounded px-3 py-1 text-white"
                                    />
                                    <textarea
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 rounded px-3 py-1 text-white resize-none"
                                        rows="2"
                                    />
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={handleSaveEdit}
                                            className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-3 py-1 rounded text-sm"
                                        >
                                            Salvar
                                        </button>
                                        <button
                                            onClick={() => setIsEditing(false)}
                                            className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-3 py-1 rounded text-sm"
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="flex items-center space-x-2 mb-1">
                                        <h3 className={`font-medium ${task.completed ? 'text-white/60' : 'text-white'}`}>
                                            {task.title}
                                        </h3>
                                        <i className={`${getPriorityIcon()} ${getPriorityColor()} text-sm`}></i>
                                    </div>
                                    {task.description && (
                                        <p className={`text-sm ${task.completed ? 'text-white/40' : 'text-white/70'} mb-2`}>
                                            {task.description}
                                        </p>
                                    )}
                                    <div className="flex items-center space-x-4 text-xs text-white/50">
                                        {task.dueDate && (
                                            <span>
                                                <i className="fas fa-calendar-alt mr-1"></i>
                                                {new Date(task.dueDate).toLocaleDateString('pt-BR')}
                                            </span>
                                        )}
                                        <span>
                                            <i className="fas fa-clock mr-1"></i>
                                            {new Date(task.createdAt).toLocaleDateString('pt-BR')}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <i className="fas fa-edit"></i>
                        </button>
                        <button
                            onClick={() => onDeleteTask(task.objectId)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('TaskItem component error:', error);
        reportError(error);
    }
}
