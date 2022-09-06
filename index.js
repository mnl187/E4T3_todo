const {pool} = require("./utils/db");
const {TodoRecord} = require("./records/todo.record");


(async () => {

    const firstTodoItem = new TodoRecord({
        title: 'Zrobić dzień 5, Tydzien 4'
    });
    const newId = await firstTodoItem.insert();
    console.log('New todo item added with ID', newId);

    await firstTodoItem.delete();

    await pool.end();
})();