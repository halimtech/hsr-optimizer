import Icon from '@ant-design/icons'

const IconSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
    <g transform="translate(24 0) scale(-1 1)">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" d="M8 12L15 5M8 12L15 19" />
    </g>
  </svg>
)

export const RightIcon = (props) => {
  return <Icon component={IconSVG} {...props} />
}
