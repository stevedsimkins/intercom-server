import FormData from "form-data"

export default async function handler(req, res) {
  const reqBody = JSON.stringify(req.body.conversation.source.body)
  const convoId = JSON.stringify(req.body.conversation.id)
  const adminId = JSON.stringify(req.boyd.admin.id)
  const formData = new FormData()
  console.log(convoId)
  console.log(adminId)

  formData.append('type', 'admin')
  formData.append('message_type', 'comment')
  formData.append('body', 'Hey there!')
  formData.append('admin_id', `${adminId}`)

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
