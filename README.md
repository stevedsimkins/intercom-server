This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone this repo and install dependencies
```bash
git clone https://github.com/stevedsimkins/intercom-server && cd intercom-server && npm install
```

Second, add your [Intercom Workspace ID](https://www.intercom.com/help/en/articles/3539-where-can-i-find-my-workspace-id-app-id) and [Intercom API Key](https://developers.intercom.com/building-apps/docs/authentication) like so in a ```.env.local``` file
```
NEXT_PUBLIC_WORKSPACE_ID=WORKSPACEID
INTERCOM_KEY=INTERCOM-BEARER-TOKEN
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/initialize](http://localhost:3000/api/initialize). This endpoint can be edited in `pages/api/initialize.js`. 

Most Intercom Canvas apps use an initialize endpoint and a submit endpoint. These two functions are setup in the ```api``` directory where you can edit them accordingly. You can see how this is done through this guide [here](https://developers.intercom.com/building-apps/docs/build-an-app-for-your-inbox). By default this app will have a button that can return an automated message using the Intercom API, and you will be able to see all the information you will have access to in the ```req``` body. 

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

