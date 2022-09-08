const {pool} = require("./utils/db");
const {TodoRepository} = require("./repositories/todo.repository");

(async () => {

    const foundTodo = await TodoRepository.find('');
    foundTodo.title = 'Siaiaalal';
    await TodoRepository.delete(foundTodo);

    console.log(foundTodo);

    await pool.end();
})();