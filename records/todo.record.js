const {pool} = require("../utils/db");
const {v4: uuid} = require('uuid');

class TodoRecord {
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;

        this._validate();
    }

    _validate() {
        if (this.title.trim() < 5) {
            if (this.title.trim().length < 5) {
                throw new Error('Todo title should be at least 5 characters.');
            }
            if (this.title.length > 150) {
                throw new Error('Todo title should be at most than 150 characters');
            }
        }
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

    static async find(id) {
        const [results] = await pool.execute('SELECT * FROM `todos` WHERE `id` = :id', {
            id: id,
        });
        return results.length === 1 ? TodoRecord(results[0]) : null;
    }

    static async findAll() {
        // ...
    }

    async update() {
        if (!this.id) {
            throw new Error('Todo has no ID');
        }
        this._validate();

        await pool.execute('UPADATE `todos` SET `title` = :title WHERE `id` = :id', {
            title: this.title,
            id: this.id,
        });
        return this.id;
    }




}

module.exports = {
    TodoRecord,
}

