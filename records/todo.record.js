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






}

module.exports = {
    TodoRecord,
}

