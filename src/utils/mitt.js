// 全局事件总线 
// emitter.emit()
// emitter.on()
// emitter.off()

import mitt from 'mitt'
const emitter = mitt()
export default emitter