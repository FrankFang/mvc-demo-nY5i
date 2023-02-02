import './style.scss'
import { mount as mount1 } from './1.js'
import { mount as mount2 } from './2.js'
import { mount as mount3 } from './3.js'

const app = document.getElementById('app')

mount1(app)
mount2(app)
mount3(app)

