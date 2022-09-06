const {pool} = require("../utils/db");
const{v4: uuid} = require('uuid');

class TodoRecord {
    constructor(obj) {
        if (obj.title.trim().length < 5) {
            throw new Error('Todo title should be at least 5 characters.');
        }
        if (obj.title.length > 150) {
            throw new Error('Todo title should be at most than 150 characters');
        }

        this.id = obj.id;
        this.title = obj.title;
    }

    async insert() {
        this.id = this.id ?? uuid();

        await pool.execute('INSERT INTO `todos` VALUES(:id, :title)', {
            id: this.id,
            title: this.title,
        });
        return this.id;
    }

    async delete() {
        if (!this.id) {
            throw new Error('Todo has no ID.');
        }

        await pool.execute('DELETE FROM `todos` WHERE `id` = :id', {
            id: this.id,
        });
    }
}

module.exports = {
    TodoRecord,
}

