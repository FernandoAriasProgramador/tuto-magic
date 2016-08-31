import 'angular-material/angular-material.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'animate.css/animate.css'
import './assets/style.css'

import angular from 'angular'
import angularAria from 'angular-aria'
import angularAnimate from 'angular-animate'
import angularMaterial from 'angular-material'

import components from './components'
import services from './services'

export default angular.module('app', [components, services, angularAria, angularAnimate, angularMaterial])
