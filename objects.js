var playlist = { "artistName" :"songTitle"}
function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
};
updateObjectWithKeyAndValue(playlist, 'My Bloody Valentine' = 'Sometimes')
