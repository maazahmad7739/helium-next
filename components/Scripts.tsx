import Script from "next/script";
import { ANALYTICS } from "@/lib/site";

export function Scripts() {
  return (
    <>
      {/* Google Tag Manager (GA4 G-BK34ZK9CKB and gtag tags fire
          through this container; only one GTM load, no duplicate gtag.js) */}
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${ANALYTICS.gtmId}');`,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${ANALYTICS.gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Meta Pixel */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${ANALYTICS.metaPixelId}');
fbq('track', 'PageView');`,
        }}
      />

      {/* LinkedIn Insight Tag */}
      <Script
        id="linkedin-insight"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `_linkedin_partner_id = "${ANALYTICS.linkedinPartnerId}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
        }}
      />
      <Script
        id="linkedin-insight-src"
        strategy="lazyOnload"
        src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
      />

      {/* PostHog */}
      <Script
        id="posthog"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,a,r){function s(t,e){var n=e.split(".");2==n.length&&(t=t[n[0]],e=n[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(o=t.createElement("script")).type="text/javascript",o.async=!0,o.src="https://us-assets.i.posthog.com/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(o,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset".split(" "),p=0;p<o.length;p++)s(u,o[p]);e._i.push([i,a,r])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('${ANALYTICS.posthogKey}', {api_host:'${ANALYTICS.posthogHost}', person_profiles:'identified_only'});`,
        }}
      />

      {/* Ahrefs */}
      <Script
        id="ahrefs"
        strategy="lazyOnload"
        src="https://analytics.ahrefs.com/analytics.js"
      />

      {/* Apollo website tracker */}
      <Script
        id="apollo"
        strategy="lazyOnload"
        src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=helium"
      />

      {/* Smartarget (contact widget) */}
      <Script
        id="smartarget"
        strategy="lazyOnload"
        src="https://smartarget.online/loader.js?type=int&u=7a5948f03cd72e9e59fe31961338f445b7e9fa59&source=framer_contact_form"
      />
    </>
  );
}