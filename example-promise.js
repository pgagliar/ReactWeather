// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia',function(err, temp){
//   if (err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp )
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79)
//       reject('City not found')
//     },1000)
//
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// })

//Challange Area
function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if (typeof a == 'number' && typeof b == 'number'){
      resolve(a+b);
    } else {
      reject('This are not both number');
    }
  });
}

addPromise(4,5).then(function(sum){
    console.log('success', sum);
}, function(err){
    console.log('error', err);
})

addPromise('poney',5).then(function(sum){
    console.log('success', sum);
}, function(err){
    console.log('error', err);
})

function getTemp(){
  axios.get(requestUrl){
  return new Promise(function(resolve, reject){
    if (requestUrl.message == 202):
      resolve()
    else (requestUrl.message ==404):
      reject()
  })
  }
}

axios.get(requestUrl).then(function(res){
  if(res.data.cod && res.data.message){
    throw new Error(res.data.message)
  }else{
    debugger;
    return res.data.main.temp;
  }
},function(res){
  throw new Error(res.data.message);
});
