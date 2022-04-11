import { partytownSnippet } from '@builder.io/partytown/integration'

const Partytown = () => {
  const scriptElm = document.createElement('script')
  scriptElm.dataset.partytown = ''
  scriptElm.innerHTML = partytownSnippet({
    debug: true,
    forward: ['dataLayer.push'],
    resolveUrl(url) {
      if (
        url.hostname.includes('google-analytics') ||
        url.hostname.includes('www.googletagmanager.com')
      ) {
        const proxyUrl = new URL('https://cdn.builder.io/api/v1/proxy-api');
        proxyUrl.searchParams.append('url', url);
        return proxyUrl;
      }
      
      return url;
    },
    logCalls: true,
    logGetters: true,
    logSetters: true,
    logImageRequests: true,
    logMainAccess: true,
    logSendBeaconRequests: true,
    logStackTraces: false,
    logScriptExecution: true,
  })
  document.head.appendChild(scriptElm)
}

export default Partytown