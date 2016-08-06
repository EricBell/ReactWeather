// function getTempCallack(location,callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }

// getTempCallack('Philadelphia', function(err,temp){
//   if (err) {
//     console.log('error', err);

//   } else {
//     console.log('success', temp);
//   }
// });

// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout( function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
  
//   });
// }

// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise success ', temp);
// }, function(err) {
//   console.log('promise error ', err);
// });

// Challenge
function addPromise(a,b) {
  return new Promise(function(resolve, reject){
    
    if (typeof a == 'number' && typeof b == 'number') {
      resolve(a+b);
    } else {
      reject('rejected');
    }
  });
}

addPromise(7,8).then(function(temp) {
  console.log('success ', temp);
}, function(err) {
  console.log('err ', err);
});

addPromise(7,'d').then(function(temp) {
  console.log('success ', temp);
}, function(err) {
  console.log('err ', err);
});
