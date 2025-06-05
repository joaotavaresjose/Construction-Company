const taskManager = {
    async createTask(taskData) {
        try {
            const task = await trickleCreateObject('task', taskData);
            return task;
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
            throw new Error('Não foi possível criar a tarefa. Tente novamente.');
        }
    },

    async getTasks() {
        try {
            const response = await trickleListObjects('task', 100, true);
            return response.items || [];
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            throw new Error('Não foi possível carregar as tarefas. Tente novamente.');
        }
    },

    async updateTask(taskId, updates) {
        try {
            const updatedTask = await trickleUpdateObject('task', taskId, updates);
            return updatedTask;
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            throw new Error('Não foi possível atualizar a tarefa. Tente novamente.');
        }
    },

    async deleteTask(taskId) {
        try {
            await trickleDeleteObject('task', taskId);
            return true;
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
            throw new Error('Não foi possível deletar a tarefa. Tente novamente.');
        }
    },

    async toggleTaskComplete(taskId, currentStatus) {
        try {
            const updates = { 
                completed: !currentStatus,
                completedAt: !currentStatus ? new Date().toISOString() : null
            };
            return await this.updateTask(taskId, updates);
        } catch (error) {
            console.error('Erro ao alterar status da tarefa:', error);
            throw new Error('Não foi possível alterar o status da tarefa.');
        }
    }
};
