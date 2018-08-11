import * as React from 'react'
import classnames from 'classnames';


/**
 * Manages workspace selection.
 * 
 * TODO: Are the index values passed to React.Children.map callback reliable?
 */
const noop = () => {};

export default class WorkspaceManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isSwitching: false, activeWorkspace: 0};
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeyPress);
  }

  onKeyPress(e) {
    if (e.key == ' ') {
      e.preventDefault();
      this.setState(prevState => ({isSwitching: !prevState.isSwitching}))
    }
  }

  onClickWorkspace(workspaceIndex) {
    this.setState({isSwitching: false, activeWorkspace: workspaceIndex});
  }

  render() {
    const children: any = this.props.children
    const {isSwitching, activeWorkspace} = this.state
    return (
      <div className="WorkspaceManager">
        {React.Children.map(children, (child, index) => {
          const classNames = classnames('WorkspaceManager-workspace', {
            'WorkspaceManager-workspace--fullscreen': !isSwitching && activeWorkspace === index,
            'WorkspaceManager-workspace--hidden': !isSwitching && activeWorkspace !== index,
            'WorkspaceManager-workspace--scaled': isSwitching
          })

          let transformStyle = {};
          let onClick;
          if (isSwitching) {
            transformStyle['transform'] = `translate3d(${index * 50}%,0,0) scale3d(0.3, 0.3, 1)`
            onClick = () => this.onClickWorkspace(index);
          } else {
            onClick = noop;
          }

          return <div key={index} className={classNames} onClick={onClick} style={transformStyle}>{child}</div>
        })}
      </div>
    )
  }
}
