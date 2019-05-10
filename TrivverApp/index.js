// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
import Main from "./screen/Main";
import ARCamera from "./screen/ARCamera";
import Wallet from "./screen/Wallet/index";
import Redeem from "./screen/Redeem/index";
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import { Navigation } from "react-native-navigation";

Navigation.registerComponent(`Main`, () => Main);
Navigation.registerComponent(`ARCamera`, () => ARCamera);
Navigation.registerComponent(`Wallet`, () => Wallet);
Navigation.registerComponent(`Redeem`, () => Redeem);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
    },
    animations: {
      push: {
        enabled: "true", // Optional, used to enable/disable the animation
        content: {
          x: {
            from: 1000,
            to: 1,
            duration: 300,
            // startDelay: 100,
            interpolation: "accelerate"
          },
        },
      },
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        id: "AppStack",
        children: [
          {
            component: {
              name: "Main",
              options: {
                topBar: {
                  title: {
                    text: "MainPage"
                  },
                }
              }
            }
          }
        ]
      }
    }
  });
});
