import { partytownSnippet } from '@builder.io/partytown/integration'

const Partytown = () => {
  const scriptElm = document.createElement('script')
  scriptElm.dataset.partytown = ''
  scriptElm.innerHTML = partytownSnippet()
  document.head.appendChild(scriptElm)
}

export default Partytown