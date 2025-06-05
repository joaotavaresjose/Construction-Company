function TaskStats({ tasks }) {
    try {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        const pendingTasks = totalTasks - completedTasks;
        const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

        const priorityStats = {
            high: tasks.filter(task => task.priority === 'high' && !task.completed).length,
            medium: tasks.filter(task => task.priority === 'medium' && !task.completed).length,
            low: tasks.filter(task => task.priority === 'low' && !task.completed).length
        };

        return (
            <div data-name="task-stats" data-file="components/TaskStats.js" className="glass-effect rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                    <i className="fas fa-chart-pie mr-2"></i>
                    Estatísticas
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                        <div className="bg-blue-500/20 rounded-lg p-4">
                            <i className="fas fa-tasks text-2xl text-blue-400 mb-2"></i>
                            <div className="text-2xl font-bold text-white">{totalTasks}</div>
                            <div className="text-sm text-white/70">Total</div>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-green-500/20 rounded-lg p-4">
                            <i className="fas fa-check-circle text-2xl text-green-400 mb-2"></i>
                            <div className="text-2xl font-bold text-white">{completedTasks}</div>
                            <div className="text-sm text-white/70">Concluídas</div>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-yellow-500/20 rounded-lg p-4">
                            <i className="fas fa-clock text-2xl text-yellow-400 mb-2"></i>
                            <div className="text-2xl font-bold text-white">{pendingTasks}</div>
                            <div className="text-sm text-white/70">Pendentes</div>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-purple-500/20 rounded-lg p-4">
                            <i className="fas fa-percentage text-2xl text-purple-400 mb-2"></i>
                            <div className="text-2xl font-bold text-white">{completionRate}%</div>
                            <div className="text-sm text-white/70">Progresso</div>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex justify-between text-sm text-white/70 mb-2">
                        <span>Progresso Geral</span>
                        <span>{completionRate}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${completionRate}%` }}
                        ></div>
                    </div>
                </div>

                {(priorityStats.high > 0 || priorityStats.medium > 0 || priorityStats.low > 0) && (
                    <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                            <div className="text-lg font-semibold text-red-400">{priorityStats.high}</div>
                            <div className="text-xs text-white/60">Alta Prioridade</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold text-yellow-400">{priorityStats.medium}</div>
                            <div className="text-xs text-white/60">Média Prioridade</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold text-green-400">{priorityStats.low}</div>
                            <div className="text-xs text-white/60">Baixa Prioridade</div>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('TaskStats component error:', error);
        reportError(error);
    }
}
