import React from 'react';
import NavigationContext from './NavigationContext';

export default class SceneView extends React.PureComponent {
  render() {
    const { component: Component, navigation } = this.props;
    return (
      <NavigationContext.Provider value={navigation}>
        <Component {...navigation.getScreenProps()} navigation={navigation} />
      </NavigationContext.Provider>
    );
  }
}
