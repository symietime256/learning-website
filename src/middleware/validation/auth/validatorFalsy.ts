export const checkFalsy = function (checkedObject) {
  const checkedObjectTemporary = { ...checkedObject };
  for (let obj of checkedObjectTemporary) {
    obj = !obj ? '' : obj;
  }
  return checkedObjectTemporary;
};
