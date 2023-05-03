const sdk = require('api')('@intercom-api-reference/v2.8#3c6mn4t106lesrrug9');
sdk.auth(`${process.env.INTERCOM_KEY}`);
sdk.server('https://api.intercom.io');


export default async function handler(req, res) {
  // reqBody gets contents of convo
  const reqBody = JSON.stringify(req.body.conversation.source.body)
  const convoId = req.body.conversation.id
  const adminId = req.body.admin.id

  try {
    const conversationRes = await sdk.replyConversation({
      message_type: 'comment',
      type: 'admin',
      body: 'Hey there! Thank you for contacting us, we will reply later!',
      admin_id: `${adminId}` }, {id: `${convoId}`, 'intercom-version': '2.8'})

    const data = await conversationRes
    console.log(data)

    res.send({
      canvas: {
        content: {
          components: [
            { type: "text", text: `${JSON.stringify(data)}`,
              style: "header", align: "center" },
          ],
        },
      },
    });
  } catch (error){
    console.log(error)
  }

}
