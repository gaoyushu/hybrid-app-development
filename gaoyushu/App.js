import React, {useEffect, useState} from 'react';
import {AsyncStorage, BackHandler, ToastAndroid} from 'react-native';
import {Icon, Modal} from '@ant-design/react-native';
import {Router, Scene, Tabs, Lightbox, Actions} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';

import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import SignUp from './src/common/SignUp';
import Home from './src/home/Home';
import Type from './src/type/Type';
import User from './src/user/User';
import Publish from './src/user/Publish';

console.disableYellowBox = true;

const App = () => {
  let now = 0;
  let [isInstall, setIsInstall] = useState(true);
  let [isLogin, setLogin] = useState(false);

  let init = async () => {
    AsyncStorage.getItem('isInstall').then(res=>{
      setIsInstall(false);
    })
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			if(!user){
				SplashScreen.hide();
			}
			if(user){
				setLogin(true);
				SplashScreen.hide();
			}
		})
  };

  useEffect(() => {
    // AsyncStorage.clear() // 清理内存
    init();
  }, []);
  
  let afterInstall = () => {
    setIsInstall(false);
  };

  if (isInstall) {
    return <SwiperPage afterInstall={afterInstall} />;
  }

  return (
    <Router
      backAndroidHandler={() => {
        if (
          Actions.currentScene != 'home' &&
          Actions.currentScene != 'login'
        ) {
          Actions.pop();
          return true;
        } else {
          if (new Date().getTime() - now < 2000) {
            BackHandler.exitApp();
          } else {
            ToastAndroid.show('Are you sure?', 100);
            now = new Date().getTime();
            return true;
          }
        }
      }}>
      <Modal hideNavBar>
        <Lightbox key="lightbox">
          <Scene key="root">
            <Tabs
              key="tabbar"
              hideNavBar
              activeTintColor="red"
              inactiveTintColor="black"
              header={null}
              tabBarStyle={{backgroundColor: '#fff'}}>
              {/* 首页 */}
              <Scene
                key="home"
                title="首页"
                icon={({focused}) => (
                  <Icon color={focused ? 'red' : 'black'} name="home" />
                )}>
                <Scene key="home" component={Home} />
              </Scene>

              {/* 分类列表 */}
              <Scene
                key="type"
                title="分类列表"
                icon={({focused}) => (
                  <Icon color={focused ? 'red' : 'black'} name="appstore" />
                )}>
                <Scene key="type" component={Type} />
              </Scene>

              {/* 个人中心 */}
              <Scene
                key="user"
                icon={({focused}) => (
                  <Icon color={focused ? 'red' : 'black'} name="user" />
                )}
                title="个人中心">
                <Scene key="usr" component={User} />
                <Scene key="publish" hideTabBar component={Publish} />
              </Scene>
            </Tabs>
          </Scene>
        </Lightbox>
        <Scene initial={!isLogin} key="login" component={Login} />
        <Scene key="signUp" component={SignUp} />
      </Modal>
    </Router>
  );
};

export default App;
