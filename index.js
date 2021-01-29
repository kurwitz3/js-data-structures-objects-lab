const driver = {name: "Sam"}

function updateDriverWithKeyAndValue(obj, key, value){
  const driverNew = {...obj}
  driverNew[key] = value
  return driverNew
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj.address = value 
  return obj
}

function  deleteFromDriverByKey(obj, key){
  const newDriver = Object.assign({},obj)
  delete newDriver['name']
  return newDriver
}

function  destructivelyDeleteFromDriverByKey(obj, key){
   delete obj.name 
  return obj
}
