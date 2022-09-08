const {v4: uuid} = require("uuid");
const {pool} = require("../utils/db");

class TodoRepository {
    static async insert(record) {


        this.id = this.id ?? uuid();

        await pool.execute('INSERT INTO `todos` VALUES(:id, :title)', {
            id: this.id,
            title: this.title,
        });
        return this.id;
    }
    static delete() {
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

    static update() {
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

    _validate() {

    }
}

exports.modules = {
    TodoRepository,
}