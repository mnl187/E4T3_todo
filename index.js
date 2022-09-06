const {pool} = require("./utils/db");
const {TodoRecord} = require("./records/todo.record");


(async () => {
const firstTodoItem = new TodoRecord({
    id: 'xyz',
    title: 'Zrobić dzień 5, Tydzien 4'
});
await firstTodoItem.insert();
console.log(firstTodoItem);

    await pool.end();
})();