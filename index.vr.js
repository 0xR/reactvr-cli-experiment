import React from "react";
import { AppRegistry, asset,DirectionalLight, LiveEnvCamera, Model, Text, View } from "react-vr";

export default class reactvr_cli_experiment extends React.Component {
  render() {
    return (
      <View>
        <LiveEnvCamera />
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
          source={{
            obj: asset("model.obj"),
            mtl: asset("materials.mtl")
          }}
          style={{
            layoutOrigin: [0, 0],
            transform: [{ translate: [0, 1, -3 ]  }]
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
