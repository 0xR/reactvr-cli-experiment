import React from "react";
import {
  AppRegistry,
  asset,
  SpotLight,
  LiveEnvCamera,
  Model,
  Text,
  View,
  VrButton
} from "react-vr";

export default class reactvr_cli_experiment extends React.Component {
  constructor() {
    super();
    this.state = { arrowPosition: null };
  }

  render() {
    return (
      <View>
        <LiveEnvCamera />
        <SpotLight style={{ transform: [{ translate: [0, 0, 0] }] }} />
          <View style={{
              flex: 1,
              flexDirection: 'column',
              width: 2,
              alignItems: 'stretch',
              transform: [{translate: [-1, 1, -5]}],
          }}>
              <Text
                  style={{margin: 0.1, height: 0.3, backgroundColor: 'black'}}>
                  {this.state.arrowPosition}
              </Text>
              <VrButton
                  style={{ margin: 0.1, height: 0.3, backgroundColor: 'black'}}
                  onClick={() => this.setState({arrowPosition:0})}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Up</Text>
              </VrButton>
              <VrButton
                  style={{ margin: 0.1, height: 0.3, backgroundColor: 'black'}}
                  onClick={() => this.setState({arrowPosition:90})}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Right</Text>
              </VrButton>
              <VrButton
                  style={{ margin: 0.1, height: 0.3, backgroundColor: 'black'}}
                  onClick={() => this.setState({arrowPosition:180})}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Down</Text>
              </VrButton>
              <VrButton
                  style={{ margin: 0.1, height: 0.3, backgroundColor: 'black'}}
                  onClick={() => this.setState({arrowPosition:270})}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Left</Text>
              </VrButton>
          </View>
        <Model
          lit={true}
          source={{
            obj: asset("model.obj"),
            mtl: asset("materials.mtl")
          }}
          style={{
            position: "absolute",
            transform: [{ translate: [0, -4, -10] }, { rotateY: -135 }]
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent(
  "reactvr_cli_experiment",
  () => reactvr_cli_experiment
);
