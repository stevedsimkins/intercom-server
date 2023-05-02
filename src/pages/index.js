import { useState, useEffect } from "react"


export default function Home() {
  const [initializeUrl, setInitializeUrl] = useState("");
  const [submitUrl, setSubmitUrl] = useState("");

  useEffect(() => {
    setInitializeUrl(`${window.location.origin}/api/initialize`);
    setSubmitUrl(`${window.location.origin}/api/submit`);
  }, []);

  return (
    <>
      <h1>INITIALIZE URL:</h1>
      <p id="init">{initializeUrl}</p>

      <h1>SUBMIT URL:</h1>
      <p id="submit">{submitUrl}</p>

      {/* #INSERT YOUR MESSENGER CODE HERE */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var WS_ID = "${process.env.NEXT_PUBLIC_WORKSPACE_ID}";
            window.intercomSettings = {
              app_id: WS_ID
            };
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/APP_ID';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
          `,
        }}
      />
    </>
  );
}

