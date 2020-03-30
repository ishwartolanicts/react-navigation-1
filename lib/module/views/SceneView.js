function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import NavigationContext from './NavigationContext';
export default class SceneView extends React.PureComponent {
  render() {
    const {
      component: Component,
      navigation
    } = this.props;
    return /*#__PURE__*/React.createElement(NavigationContext.Provider, {
      value: navigation
    }, /*#__PURE__*/React.createElement(Component, _extends({}, navigation.getScreenProps(), {
      navigation: navigation
    })));
  }

}
//# sourceMappingURL=SceneView.js.map