import { Firebase as FirebaseSuper } from "upe-react-components";

const config = {
  apiKey: "AIzaSyBgPA6rr72Kk70s-SPgCI4Lu5REGTHA_cU",
  authDomain: "barryboyspodcast.firebaseapp.com",
  projectId: "barryboyspodcast",
  storageBucket: "barryboyspodcast.appspot.com",
  messagingSenderId: "977383581652",
  appId: "1:977383581652:web:722f1022e189c1e1ca1841",
  measurementId: "G-1RPY0GGZXR",
};

class Firebase extends FirebaseSuper {
  constructor(firebaseApp) {
    const app = firebaseApp.default;
    super(app, config);
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  doGoogleSignIn = () => this.auth.signInWithPopup(this.googleProvider);

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        next(authUser);
      } else {
        fallback();
      }
    });
}

export default Firebase;
