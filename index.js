const {pool} = require("./utils/db");


(async () => {


    await pool.end();
})();