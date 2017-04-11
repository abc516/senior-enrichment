var db = require('./')
var Campus = db.Campus
var Student = db.Student
var Promise = require('bluebird')

var data = {
  campus: [
    {name: 'RPI', imageUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple6/v4/0f/37/5a/0f375a22-374f-5e83-4e8d-2a4f32633d01/source/256x256bb.jpg'},
    {name: 'RIT', imageUrl: 'http://www.commonapp.org/files/styles/400-y/public/school/logo/RIT-logo-%208.25.jpg'},
    {name: 'CWRU', imageUrl: 'https://pbs.twimg.com/profile_images/657295708161048576/wfDtPIB0.jpg'},
    {name: 'BU', imageUrl: 'https://www.hscripts.com/freeimages/logos/university-logos/bu-seal/bu-seal-clipart-256.gif'}
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
