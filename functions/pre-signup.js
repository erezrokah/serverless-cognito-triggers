export const main = async (event, context, callback) => {
  console.log(event);
  callback(null, event);
};
