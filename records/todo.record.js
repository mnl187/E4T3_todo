class TodoRecord {
    constructor(obj) {
        if (obj.title.trim() < 5) {
            throw new Error('Todo title should be at least 5 characters.');
        }
        if (obj.title.length > 150) {
            throw new Error('Todo title should be at most than 150 characters');
        }

        this.title = obj.title;
        this.id = obj.id;
    }

    async insert() {
        await pool.execute('INSERT INTO `tools` VALUES(:id, :title)', {
            id: this.id,
            title: this.title,
        });
    }
}

module.exports = {
    TodoRecord,
}

