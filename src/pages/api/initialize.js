export default function handler(req, res) {
  res.send({
    canvas: {
      content: {
        components: [
          { type: "button", label: "Click Me!", style: "primary", id: "url_button", action: {type: "submit"} },
        ],
      },
    },
  });
}
