import { partytownSnippet } from '@builder.io/partytown/integration'

const Partytown = () => {
  const scriptElm = document.createElement('script')
  scriptElm.dataset.partytown = ''
  scriptElm.innerHTML = partytownSnippet({
    debug: true,
    forward: ['dataLayer.push'],
    // logCalls: true,
    // logGetters: true,
    // logSetters: true,
    // logStackTraces: false,
    logScriptExecution: true,
    // logMainAccess: true,
  })
  document.head.appendChild(scriptElm)
}

export default Partytown