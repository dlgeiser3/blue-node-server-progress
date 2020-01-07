let express = require('express');
let app = express();
// ***** ADD LINE BELOW
let sequelize = require('./db');

let journal = require('./controllers/journalcontroller');

// ***** ADD 2 LINES BELOW
sequelize.sync();
//sequelize.sync({force: true})

app.use('/journal', journal);

app.listen(3000, function(){
  console.log('App is listening on port 3000');
})
