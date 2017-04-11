var db = require('./')
var Campus = db.Campus
var Student = db.Student
var Promise = require('bluebird')

var data = {
  campus: [
    {name: 'RPI', imageUrl: 'http://placehold.it/350x150'},
    {name: 'RIT', imageUrl: 'http://placehold.it/350x150'},
    {name: 'CWRU', imageUrl: 'http://placehold.it/350x150'},
    {name: 'BU', imageUrl: 'http://placehold.it/350x150'}
  ],
  student: [
    {name: 'Anton Cataldi', email: 'antoncataldi@gmail.com', campusId: 2},
    {name: 'Kevin G', email: 'keving@gmail.com', campusId: 1},
    {name: 'Jack Morrison', email: 's76@overwatch.com', campusId: 3},
    {name: 'Lena Oxton', email: 'tracer@overwatch.com', campusId: 4},
    {name: 'Stephen Curry', email: 'sc@gswarriors.com', campusId: 3}
  ]
}

db.didSync
.then(() => db.sync({force: true}))
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      console.log('creating item...', item)
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
