import registerRootComponent from 'expo/build/launch/registerRootComponent'
import Amplify from 'aws-amplify'
import App from './App'

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: 'us-east-2',
    userPoolId: 'us-east-2_XcbgECGFh',
    userPoolWebClientId: '7u1hlkr8irqjaeb1vg294sjs8v',
    oauth: {
      domain: 'learnquran.auth.us-east-2.amazoncognito.com',
      redirectSignIn: 'http://localhost:3000/',
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'token'
    }
  }
})

registerRootComponent(App)
