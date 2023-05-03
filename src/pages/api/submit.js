import FormData from "form-data"

export default async function handler(req, res) {
  const reqBody = JSON.stringify(req.body.conversation.source.body)
  const convoId = req.body.conversation.id
  const adminId = req.body.admin.id
  const url = `https://api.intercom.io/conversations/${convoId}/reply`
  const formData = new FormData()
  console.log(convoId)
  console.log(adminId)
  console.log(url)
  console.log(process.env.INTERCOM_KEY)

  formData.append('type', 'admin')
  formData.append('message_type', 'comment')
  formData.append('body', 'Hey there!')
  formData.append('admin_id', `${adminId}`)


  try {
    const conversationRes = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        "Authorization": `Bearer ${process.env.INTERCOM_KEY}`
      }
    })

    console.log(conversationRes.status)
    const data = conversationRes.json()
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
    res.sendStatus(500)
  }

}
