var db = require('./')
var Campus = db.Campus
var Student = db.Student

var data = {
  student: [
    {name: 'Anton Cataldi', email: 'antoncataldi@gmail.com'},
    {name: 'Michael Cotto', email: 'michaelcotto1@gmail.com'},
    {name: 'Jack Morrison', email: 'jm@overwatch.com'},
    {name: 'Lena Oxton', email: 'tracer@overwatch.com'},
    {name: 'Stephen Curry', email: 'sc@gswarriors.com'},
  ],
  campus: [
    {name: 'RPI', imageUrl: 'http://placehold.it/350x150'},
    {name: 'RIT', imageUrl: 'http://placehold.it/350x150'},
    {name: 'CWRU', imageUrl: 'http://placehold.it/350x150'},
    {name: 'BU', imageUrl: 'http://placehold.it/350x150'},
    {name: 'JJU', imageUrl: 'http://placehold.it/350x150'}
  ]
}

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item);
    });
  });
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});
