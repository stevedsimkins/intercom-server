import FormData from "form-data"

export default async function handler(req, res) {
  console.log(req.body)
  const reqBody = JSON.stringify(req.body.conversation.source.body)
  const convoId = JSON.stringify(req.body.conversation.id)
  const formData = new FormData()

  const convoData = JSON.stringify({
    type: "admin",
    message_type: "comment",
    body: "Hey there!",
    admin_id: req.body.admin.id
  })
  formData.append(convoData)

  const conversationRes = await fetch(`https://api.intercom.io/conversations/${convoId}/reply`, formData, {
    headers: {
      "Authorization": `Bearer ${process.env.INTERCOM_KEY}`
    }
  })

  console.log(conversationRes.data)

  res.send({
    canvas: {
      content: {
        components: [
          { type: "text", text: `${conversationRes.data}`,
           style: "header", align: "center" },
        ],
      },
    },
  });
}
