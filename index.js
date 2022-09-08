const {pool} = require("./utils/db");
const {TodoRepository} = require("./repositories/todo.repository");

(async () => {

    const foundTodo = await TodoRepository.find('');
    foundTodo.title = 'Siaiaalal';
    await TodoRepository.update(foundTodo);

    console.log(await TodoRepository.findAll());

    await pool.end();
})();