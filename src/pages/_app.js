import Nav from "./../components/Nav";
import Image from "next/image";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Cursor from "react-cursor-follow";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="w-screen full-container flex-col flex">
      <div className=" z-50">
        <Cursor color="white" hollow={true} />
      </div>
      <Nav />
      <div className=" text-white grow flex child:grow flex-col h-full ">
        <div className="h-full w-full relative child:absolute">
          <TransitionGroup component={null}>
            <CSSTransition key={router.route} classNames="fade" timeout={300}>
              <Component {...pageProps} />
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
