export default function handler(req, res) {
  console.log(req.body)
  const reqBody = JSON.stringify(req.body.conversation.source.body)

  // API call to content moderation goes here 

  res.send({
    canvas: {
      content: {
        components: [
          { type: "text", text: `${reqBody}`,
           style: "header", align: "center" },
        ],
      },
    },
  });
}
