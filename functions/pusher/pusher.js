// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const { PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET, PUSHER_CLUSTER} = process.env;
const Pusher = require('pusher');
const pusher = new Pusher({
  appId: PUSHER_APP_ID,
  key: PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: PUSHER_CLUSTER,
  useTLS: true
});
exports.handler = async (event, context) => {
  try {
    pusher.trigger('my-channel', 'my-event', {
      'message': 'hello from netlify!'
    });
    return {
      statusCode: 200,
      body:'',
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
