import React from "react";
import {
    AppRegistry,
    asset,
    SpotLight,
    LiveEnvCamera,
    Model,
    Text,
    View,
    VrButton,
} from "react-vr";

const Arrow = props => (
    <Model
        lit={true}
        source={{
            obj: asset("model.obj"),
            mtl: asset("materials.mtl"),
        }}
        {...props}
    />
);
const rotationTranslations = {
    0: [0, -4, -10],
    90: [-10, -4, 0],
    180: [0, -4, 10],
    270: [10, -4, 0],
};

function arrowTransforms(arrowPosition) {
    const translate = rotationTranslations[arrowPosition];
    return [{ translate }, { rotateY: arrowPosition - 135 }];
}

const directionsLookup = {
    hall: {
        "Blue Sky Thinking Room 201": 0,
        Ganesha: 180,
    },
    studio: {
        "Blue Sky Thinking Room 201": 270,
        Ganesha: 180,
    },
    stairs: {
        "Blue Sky Thinking Room 201": 270,
        Ganesha: 180,
    },
};

const backOption = "< Back";

function getOptions({ location, room }) {
    if (!location) {
        return [...Object.keys(directionsLookup)];
    }
    if (!room) {
        return [backOption, ...Object.keys(directionsLookup[location])];
    }
    return [backOption];
}

function newState({ location, room }, optionClicked) {
    if (optionClicked === backOption) {
        if (!room) {
            return { location: null };
        }
        return { room: null };
    }
    if (!location) {
        return { location: optionClicked };
    }
    if (!room) {
        return { room: optionClicked };
    }
}

function getArrowPosition({ location, room }) {
    if (!location || !room) {
        return null;
    }

    return directionsLookup[location][room];
}

export default class reactvr_cli_experiment extends React.Component {
    constructor() {
        super();
        this.state = { location: null, room: null };
    }

    render() {
        const arrowPosition = getArrowPosition(this.state);
        return (
            <View>
                <LiveEnvCamera />
                <SpotLight style={{ transform: [{ translate: [0, 0, 0] }] }} />
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        width: 2,
                        alignItems: "stretch",
                        transform: [{ translate: [-1, 1, -5] }],
                    }}
                >
                    {getOptions(this.state).map(option => (
                        <VrButton
                            key={option}
                            style={{
                                margin: 0.1,
                                height: 0.3,
                                backgroundColor: "black",
                            }}
                            onClick={() =>
                                this.setState(newState(this.state, option))}
                        >
                            <Text
                                style={{ fontSize: 0.2, textAlign: "center" }}
                            >
                                {option}
                            </Text>
                        </VrButton>
                    ))}
                </View>
                {arrowPosition !== null && (
                    <Arrow
                        style={{
                            position: "absolute",
                            transform: arrowTransforms(arrowPosition),
                        }}
                    />
                )}
            </View>
        );
    }
}

AppRegistry.registerComponent(
    "reactvr_cli_experiment",
    () => reactvr_cli_experiment,
);
