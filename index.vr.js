import React from "react";
import {
  AppRegistry,
  asset,
  SpotLight,
  LiveEnvCamera,
  Model,
  Text,
  View
} from "react-vr";

export default class reactvr_cli_experiment extends React.Component {
  constructor() {
    super();
    this.state = { index: 0 };
  }

  componentDidMount() {
    const updateIndex = () => {
      this.setState(state => ({ index: state.index + 1 }));
      requestAnimationFrame(updateIndex);
    }
    requestAnimationFrame(updateIndex);
  }

  render() {
    const { index } = this.state;
    return (
      <View>
        <LiveEnvCamera />
        <SpotLight style={{ transform: [{ translate: [0, 0, 0] }] }} />
        <Text
          style={{
            backgroundColor: "#777879",
            fontSize: 0.8,
            fontWeight: "400",
            layoutOrigin: [0, 0],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 0, -3] }]
          }}
        >
          hello
        </Text>

        <Model
          lit={true}
          source={{
            obj: asset("model.obj"),
            mtl: asset("materials.mtl")
          }}
          style={{
            position: "absolute",
            layoutOrigin: [0, 0],
            transform: [{ translate: [0, -4, -10] }, { rotateY: index }]
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
