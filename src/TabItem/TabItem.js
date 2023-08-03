import './TabItem.css'

const TabItem = props => {
  const {details, active, click} = props
  const {tabId, displayText} = details

  const change = () => click(tabId)

  return (
    <li onClick={change} className="tab">
      <button
        type="button"
        className={tabId === active ? 'active' : 'not-active'}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
